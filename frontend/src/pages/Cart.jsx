import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Cart() {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart =
      JSON.parse(
        localStorage.getItem("cart")
      ) || [];

    setCartItems(cart);
  }, []);

  const removeItem = (id) => {
    const updatedCart =
      cartItems.filter(
        (item) => item._id !== id
      );

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    setCartItems(updatedCart);
  };

  const increaseQty = (id) => {
    const updatedCart =
      cartItems.map((item) =>
        item._id === id
          ? {
              ...item,
              qty: item.qty + 1,
            }
          : item
      );

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    setCartItems(updatedCart);
  };

  const decreaseQty = (id) => {
    const updatedCart =
      cartItems.map((item) =>
        item._id === id
          ? {
              ...item,
              qty:
                item.qty > 1
                  ? item.qty - 1
                  : 1,
            }
          : item
      );

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    setCartItems(updatedCart);
  };

  const subtotal =
    cartItems.reduce(
      (acc, item) =>
        acc +
        item.price * item.qty,
      0
    );

  const deliveryCharge =
    subtotal > 0 ? 99 : 0;

  const discount =
    subtotal > 5000 ? 500 : 0;

  const grandTotal =
    subtotal +
    deliveryCharge -
    discount;

  return (
    <>
      <Navbar />

      <div
        style={{
          maxWidth: "1400px",
          margin: "30px auto",
          padding: "20px",
        }}
      >
        <h1
          style={{
            marginBottom: "25px",
          }}
        >
          🛒 My Shopping Cart
        </h1>
                {cartItems.length === 0 ? (
          <div
            style={{
              background: "#fff",
              padding: "60px",
              borderRadius: "15px",
              textAlign: "center",
              boxShadow:
                "0 2px 15px rgba(0,0,0,0.1)",
            }}
          >
            <h2>
              🛒 Your Cart Is Empty
            </h2>

            <p>
              Looks like you haven't
              added anything yet.
            </p>

            <button
              onClick={() =>
                navigate("/")
              }
              style={{
                marginTop: "20px",
                padding:
                  "12px 25px",
                background:
                  "#2874f0",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "2fr 1fr",
              gap: "25px",
            }}
          >
            {/* LEFT SIDE */}

            <div>
              {cartItems.map(
                (item) => (
                  <div
                    key={item._id}
                    style={{
                      background:
                        "#fff",
                      borderRadius:
                        "15px",
                      padding:
                        "20px",
                      marginBottom:
                        "15px",
                      display:
                        "flex",
                      gap: "20px",
                      alignItems:
                        "center",
                      boxShadow:
                        "0 2px 10px rgba(0,0,0,0.08)",
                    }}
                  >
                    <img
                      src={
                        item.image
                      }
                      alt={
                        item.name
                      }
                      onError={(
                        e
                      ) => {
                        e.target.src =
                          "https://via.placeholder.com/300x300?text=Product";
                      }}
                      style={{
                        width:
                          "140px",
                        height:
                          "140px",
                        objectFit:
                          "cover",
                        borderRadius:
                          "12px",
                      }}
                    />

                    <div
                      style={{
                        flex: 1,
                      }}
                    >
                      <h3>
                        {
                          item.name
                        }
                      </h3>

                      <p
                        style={{
                          color:
                            "#666",
                        }}
                      >
                        Category:{" "}
                        {
                          item.category
                        }
                      </p>

                      <h2
                        style={{
                          color:
                            "#2874f0",
                        }}
                      >
                        ₹
                        {
                          item.price
                        }
                      </h2>

                      <p
                        style={{
                          color:
                            "green",
                        }}
                      >
                        In Stock
                      </p>

                      <div
                        style={{
                          display:
                            "flex",
                          gap: "10px",
                          marginTop:
                            "15px",
                        }}
                      >
                        <button
                          onClick={() =>
                            decreaseQty(
                              item._id
                            )
                          }
                        >
                          -
                        </button>

                        <span
                          style={{
                            fontWeight:
                              "bold",
                          }}
                        >
                          {
                            item.qty
                          }
                        </span>

                        <button
                          onClick={() =>
                            increaseQty(
                              item._id
                            )
                          }
                        >
                          +
                        </button>

                        <button
                          onClick={() =>
                            removeItem(
                              item._id
                            )
                          }
                          style={{
                            background:
                              "#ff6161",
                            color:
                              "#fff",
                            border:
                              "none",
                            padding:
                              "8px 15px",
                            borderRadius:
                              "6px",
                            cursor:
                              "pointer",
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
                        {/* RIGHT SIDE */}

            <div>
              <div
                style={{
                  background: "#fff",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow:
                    "0 2px 10px rgba(0,0,0,0.08)",
                  position: "sticky",
                  top: "100px",
                }}
              >
                <h2
                  style={{
                    marginBottom: "20px",
                    color: "#666",
                  }}
                >
                  PRICE DETAILS
                </h2>

                <div
                  style={{
                    display: "flex",
                    justifyContent:
                      "space-between",
                    marginBottom: "12px",
                  }}
                >
                  <span>
                    Price (
                    {cartItems.length} Items)
                  </span>

                  <span>
                    ₹{subtotal}
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent:
                      "space-between",
                    marginBottom: "12px",
                  }}
                >
                  <span>
                    Delivery Charges
                  </span>

                  <span>
                    ₹{deliveryCharge}
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent:
                      "space-between",
                    marginBottom: "12px",
                    color: "green",
                  }}
                >
                  <span>
                    Discount
                  </span>

                  <span>
                    -₹{discount}
                  </span>
                </div>

                <hr />

                <div
                  style={{
                    display: "flex",
                    justifyContent:
                      "space-between",
                    marginTop: "15px",
                    marginBottom:
                      "15px",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  <span>
                    Grand Total
                  </span>

                  <span>
                    ₹{grandTotal}
                  </span>
                </div>

                <p
                  style={{
                    color: "green",
                    fontWeight: "bold",
                    marginBottom:
                      "20px",
                  }}
                >
                  🎉 You Save ₹
                  {discount}
                </p>

                <button
                  onClick={() =>
                    navigate(
                      "/checkout"
                    )
                  }
                  style={{
                    width: "100%",
                    padding: "15px",
                    background:
                      "#fb641b",
                    color: "#fff",
                    border: "none",
                    borderRadius:
                      "8px",
                    cursor: "pointer",
                    fontWeight:
                      "bold",
                    fontSize: "18px",
                  }}
                >
                  Proceed To Checkout
                </button>

                <div
                  style={{
                    marginTop: "20px",
                    padding: "12px",
                    background:
                      "#f1f8ff",
                    borderRadius:
                      "8px",
                    fontSize: "14px",
                  }}
                >
                  🔒 Safe and Secure
                  Payments

                  <br />

                  🚚 Fast Delivery

                  <br />

                  ↩️ Easy Returns
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Cart;