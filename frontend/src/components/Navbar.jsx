import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const navigate = useNavigate();

  const [cartCount, setCartCount] = useState(0);

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  useEffect(() => {
    const updateCartCount = () => {
      const cart =
        JSON.parse(
          localStorage.getItem("cart")
        ) || [];

      const totalQty = cart.reduce(
        (acc, item) => acc + item.qty,
        0
      );

      setCartCount(totalQty);
    };

    updateCartCount();

    window.addEventListener(
      "storage",
      updateCartCount
    );

    return () => {
      window.removeEventListener(
        "storage",
        updateCartCount
      );
    };
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    alert("Logout Successful");

    window.location.reload();
  };

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "#2874f0",
        color: "white",
        padding: "12px 30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow:
          "0 2px 15px rgba(0,0,0,0.2)",
      }}
    >
      {/* Logo */}

      <div
        onClick={() => navigate("/")}
        style={{
          cursor: "pointer",
          minWidth: "180px",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: "42px",
            fontWeight: "800",
          }}
        >
          FlipMart
        </h1>

        <p
          style={{
            margin: 0,
            fontSize: "12px",
            color: "#ffe500",
          }}
        >
          Explore Plus ✨
        </p>
      </div>

      {/* Search */}

      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          padding: "0 30px",
        }}
      >
        <input
          type="text"
          placeholder="🔍 Search for products, brands and more..."
          style={{
            width: "100%",
            maxWidth: "650px",
            padding: "14px 18px",
            borderRadius: "8px",
            border: "none",
            outline: "none",
            fontSize: "15px",
            boxShadow:
              "0 2px 8px rgba(0,0,0,0.15)",
          }}
        />
      </div>

      {/* Right Menu */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "22px",
          fontWeight: "600",
        }}
      >
        {user ? (
          <>
            <div
              style={{
                background:
                  "rgba(255,255,255,0.15)",
                padding: "10px 14px",
                borderRadius: "8px",
              }}
            >
              👋 Hi, {user.name}
            </div>

            <button
              onClick={logoutHandler}
              style={{
                background: "#ff6161",
                color: "#fff",
                border: "none",
                padding: "12px 20px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() =>
                navigate("/login")
              }
              style={{
                background: "#fff",
                color: "#2874f0",
                border: "none",
                padding: "12px 20px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Login
            </button>

            <button
              onClick={() =>
                navigate("/register")
              }
              style={{
                background: "#ff9f00",
                color: "#fff",
                border: "none",
                padding: "12px 20px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Register
            </button>
          </>
        )}

        {/* Cart */}

        <div
          onClick={() =>
            navigate("/cart")
          }
          style={{
            position: "relative",
            cursor: "pointer",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          🛒 Cart

          {cartCount > 0 && (
            <span
              style={{
                position: "absolute",
                top: "-10px",
                right: "-15px",
                background: "red",
                color: "white",
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px",
              }}
            >
              {cartCount}
            </span>
          )}
        </div>

        {/* Orders */}

        <span
          onClick={() =>
            navigate("/orders")
          }
          style={{
            cursor: "pointer",
          }}
        >
          📦 Orders
        </span>

        {/* Seller */}

        <span
          style={{
            cursor: "pointer",
          }}
        >
          🏪 Become Seller
        </span>
      </div>
    </nav>
  );
}

export default Navbar;