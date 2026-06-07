import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();

  const addToCartHandler = (e) => {
    e.stopPropagation();

    const existingCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const itemExists = existingCart.find(
      (item) => item._id === product._id
    );

    if (itemExists) {
      itemExists.qty += 1;
    } else {
      existingCart.push({
        ...product,
        qty: 1,
      });
    }

    localStorage.setItem(
      "cart",
      JSON.stringify(existingCart)
    );

    alert("Added To Cart");
  };

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "15px",
        overflow: "hidden",
        boxShadow:
          "0 4px 15px rgba(0,0,0,0.1)",
        cursor: "pointer",
        transition: "0.3s",
      }}
      onClick={() =>
        navigate(`/product/${product._id}`)
      }
    >
      {/* Discount Badge */}

      <div
        style={{
          position: "absolute",
          background: "#ff6161",
          color: "#fff",
          padding: "5px 10px",
          borderRadius: "0 0 8px 0",
          fontSize: "12px",
          fontWeight: "bold",
          zIndex: 1,
        }}
      >
        20% OFF
      </div>

      {/* Product Image */}

      <img
        src={product.image}
        alt={product.name}
        onError={(e) => {
          e.target.src =
            "https://via.placeholder.com/400x300?text=Product+Image";
        }}
        style={{
          width: "100%",
          height: "250px",
          objectFit: "cover",
        }}
      />

      {/* Product Info */}

      <div
        style={{
          padding: "15px",
        }}
      >
        <h3
          style={{
            marginBottom: "10px",
          }}
        >
          {product.name}
        </h3>

        <p
          style={{
            color: "#666",
            minHeight: "40px",
            fontSize: "14px",
          }}
        >
          {product.description}
        </p>

        <div
          style={{
            color: "#ff9f00",
            marginBottom: "10px",
          }}
        >
          ⭐⭐⭐⭐⭐
        </div>

        <h2
          style={{
            color: "#2874f0",
            marginBottom: "10px",
          }}
        >
          ₹{product.price}
        </h2>

        <p>
          <strong>Category:</strong>{" "}
          {product.category}
        </p>

        <p
          style={{
            color: "green",
            fontWeight: "bold",
          }}
        >
          In Stock ({product.stock})
        </p>

        <button
          onClick={addToCartHandler}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "15px",
            background: "#ff9f00",
            border: "none",
            color: "#fff",
            fontWeight: "bold",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;