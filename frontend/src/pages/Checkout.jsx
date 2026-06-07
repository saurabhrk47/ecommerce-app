import { useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

function Checkout() {
  const cart =
    JSON.parse(localStorage.getItem("cart")) || [];

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");

  const totalPrice = cart.reduce(
    (acc, item) =>
      acc + item.price * item.qty,
    0
  );

  const placeOrderHandler = async () => {
    try {
      if (
        !address ||
        !city ||
        !state ||
        !pincode
      ) {
        return alert(
          "Please Fill Complete Address"
        );
      }

      const { data } = await API.post(
        "/payment/create-order",
        {
          amount: totalPrice,
        }
      );

      const options = {
        key: "rzp_test_SyPk90TBBR489W",

        amount: data.order.amount,

        currency: "INR",

        name: "FlipMart",

        description: "Order Payment",

        order_id: data.order.id,

        handler: async function (
          response
        ) {
          try {
            const verifyRes =
              await API.post(
                "/payment/verify",
                {
                  razorpay_order_id:
                    response.razorpay_order_id,

                  razorpay_payment_id:
                    response.razorpay_payment_id,

                  razorpay_signature:
                    response.razorpay_signature,
                }
              );

            if (
              verifyRes.data.success
            ) {
              const user =
                JSON.parse(
                  localStorage.getItem(
                    "user"
                  )
                );

              await API.post(
                "/orders",
                {
                  user: user.id,

                  products:
                    cart.map(
                      (item) => ({
                        product:
                          item._id,
                        quantity:
                          item.qty,
                      })
                    ),

                  totalAmount:
                    totalPrice,

                  status: "Paid",
                }
              );

              localStorage.removeItem(
                "cart"
              );

              alert(
                "Order Placed Successfully"
              );

              window.location.href =
                "/order-success";
            }
          } catch (error) {
            console.log(error);

            alert(
              "Payment Verification Failed"
            );
          }
        },

        prefill: {
          name:
            JSON.parse(
              localStorage.getItem(
                "user"
              )
            )?.name || "",

          email:
            JSON.parse(
              localStorage.getItem(
                "user"
              )
            )?.email || "",
        },

        theme: {
          color: "#2874f0",
        },
      };

      const razorpay =
        new window.Razorpay(options);

      razorpay.open();
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Payment Failed"
      );
    }
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          maxWidth: "1200px",
          margin: "30px auto",
          display: "grid",
          gridTemplateColumns:
            "2fr 1fr",
          gap: "20px",
        }}
      >
        <div
          style={{
            background: "#fff",
            padding: "25px",
            borderRadius: "10px",
          }}
        >
          <h2>Delivery Address</h2>

          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) =>
              setAddress(
                e.target.value
              )
            }
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
            }}
          />

          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) =>
              setCity(e.target.value)
            }
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
            }}
          />

          <input
            type="text"
            placeholder="State"
            value={state}
            onChange={(e) =>
              setState(
                e.target.value
              )
            }
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
            }}
          />

          <input
            type="text"
            placeholder="Pincode"
            value={pincode}
            onChange={(e) =>
              setPincode(
                e.target.value
              )
            }
            style={{
              width: "100%",
              padding: "12px",
            }}
          />
        </div>

        <div
          style={{
            background: "#fff",
            padding: "25px",
            borderRadius: "10px",
            height: "fit-content",
          }}
        >
          <h2>Order Summary</h2>

          {cart.map((item) => (
            <div
              key={item._id}
              style={{
                marginBottom:
                  "10px",
              }}
            >
              <p>
                {item.name} × {item.qty}
              </p>

              <strong>
                ₹
                {item.price *
                  item.qty}
              </strong>
            </div>
          ))}

          <hr />

          <h2>
            Total : ₹{totalPrice}
          </h2>

          <button
            onClick={
              placeOrderHandler
            }
            style={{
              width: "100%",
              padding: "15px",
              background:
                "#fb641b",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "bold",
              marginTop: "15px",
            }}
          >
            Pay With Razorpay
          </button>
        </div>
      </div>
    </>
  );
}

export default Checkout;