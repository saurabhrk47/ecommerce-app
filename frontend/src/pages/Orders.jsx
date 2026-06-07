import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const { data } = await API.get("/orders");

      setOrders(data.orders);
    } catch (error) {
      console.log(error);
      alert("Failed to load orders");
    }
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          maxWidth: "1200px",
          margin: "30px auto",
          padding: "20px",
        }}
      >
        <h1>My Orders</h1>

        {orders.length === 0 ? (
          <div
            style={{
              background: "#fff",
              padding: "30px",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            No Orders Found
          </div>
        ) : (
          orders.map((order) => (
            <div
              key={order._id}
              style={{
                background: "#fff",
                padding: "20px",
                borderRadius: "10px",
                marginBottom: "20px",
                boxShadow:
                  "0 2px 10px rgba(0,0,0,0.1)",
              }}
            >
              <h3>
                Order ID: {order._id}
              </h3>

              <p>
                Status:
                <strong
                  style={{
                    color:
                      order.status ===
                      "Paid"
                        ? "green"
                        : "orange",
                    marginLeft: "5px",
                  }}
                >
                  {order.status}
                </strong>
              </p>

              <p>
                Total Amount:
                ₹{order.totalAmount}
              </p>

              <p>
                Products:
                {
                  order.products.length
                }
              </p>

              <p>
                Date:
                {new Date(
                  order.createdAt
                ).toLocaleString()}
              </p>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Orders;