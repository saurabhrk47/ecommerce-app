import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div
        style={{
          minHeight: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <div
          style={{
            background: "#fff",
            padding: "50px",
            borderRadius: "15px",
            textAlign: "center",
            maxWidth: "600px",
            width: "100%",
            boxShadow:
              "0 2px 20px rgba(0,0,0,0.1)",
          }}
        >
          <div
            style={{
              fontSize: "80px",
              marginBottom: "20px",
            }}
          >
            🎉
          </div>

          <h1
            style={{
              color: "#2e7d32",
              marginBottom: "15px",
            }}
          >
            Order Placed Successfully
          </h1>

          <p
            style={{
              color: "#666",
              marginBottom: "30px",
              fontSize: "18px",
            }}
          >
            Thank you for shopping with
            FlipMart.
          </p>

          <div
            style={{
              display: "flex",
              gap: "15px",
              justifyContent: "center",
            }}
          >
            <button
              onClick={() =>
                navigate("/")
              }
              style={{
                padding: "12px 25px",
                border: "none",
                borderRadius: "8px",
                background: "#2874f0",
                color: "#fff",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Continue Shopping
            </button>

            <button
              onClick={() =>
                navigate("/orders")
              }
              style={{
                padding: "12px 25px",
                border: "none",
                borderRadius: "8px",
                background: "#fb641b",
                color: "#fff",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              View Orders
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderSuccess;