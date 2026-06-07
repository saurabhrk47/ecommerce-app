import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProduct();
  }, [id]);

  const getProduct = async () => {
    try {
      const { data } = await API.get(`/products/${id}`);
      setProduct(data.product);
    } catch (error) {
      console.log(error);
      alert("Failed To Load Product");
    }
  };

  const addToCart = () => {
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

  const buyNow = () => {
    addToCart();
    window.location.href = "/cart";
  };

  if (!product) {
    return (
      <>
        <Navbar />
        <div
          style={{
            padding: "50px",
            textAlign: "center",
          }}
        >
          <h1>Loading Product...</h1>
        </div>
      </>
    );
  }

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
        <div
          style={{
            background: "#fff",
            borderRadius: "15px",
            padding: "25px",
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: "40px",
            boxShadow:
              "0 4px 15px rgba(0,0,0,0.1)",
          }}
        >
          {/* LEFT */}

          <div>
            <div
              style={{
                position: "relative",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  background: "#ff6161",
                  color: "#fff",
                  padding: "6px 12px",
                  borderRadius: "6px",
                  fontSize: "13px",
                  fontWeight: "bold",
                }}
              >
                20% OFF
              </span>

              <img
                src={product.image}
                alt={product.name}
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/600x400?text=Product+Image";
                }}
                style={{
                  width: "100%",
                  height: "450px",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                gap: "15px",
                marginTop: "20px",
              }}
            >
              <button
                onClick={addToCart}
                style={{
                  flex: 1,
                  padding: "16px",
                  background: "#ff9f00",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
              >
                🛒 ADD TO CART
              </button>

              <button
                onClick={buyNow}
                style={{
                  flex: 1,
                  padding: "16px",
                  background: "#fb641b",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
              >
                ⚡ BUY NOW
              </button>
            </div>
          </div>

          {/* RIGHT */}

          <div>
            <h1
              style={{
                marginBottom: "10px",
              }}
            >
              {product.name}
            </h1>

            <div
              style={{
                color: "#388e3c",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              Special Price
            </div>

            <div
              style={{
                fontSize: "22px",
                color: "#ff9f00",
                marginBottom: "15px",
              }}
            >
              ⭐⭐⭐⭐⭐ (4.8)
            </div>

            <h1
              style={{
                color: "#2874f0",
                marginBottom: "20px",
              }}
            >
              ₹{product.price}
            </h1>

            <p
              style={{
                fontSize: "18px",
                color: "#555",
                lineHeight: "32px",
              }}
            >
              {product.description}
            </p>

            <div
              style={{
                marginTop: "30px",
              }}
            >
              <h3>Highlights</h3>

              <ul
                style={{
                  lineHeight: "35px",
                  fontSize: "16px",
                }}
              >
                <li>Premium Quality Product</li>
                <li>Best In Class Performance</li>
                <li>Lightweight Design</li>
                <li>Fast Delivery Available</li>
                <li>Easy Return Policy</li>
                <li>Trusted Brand</li>
              </ul>
            </div>

            <div
              style={{
                marginTop: "25px",
                fontSize: "17px",
              }}
            >
              <strong>Category:</strong>{" "}
              {product.category}
            </div>

            <div
              style={{
                marginTop: "12px",
                color: "green",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              In Stock ({product.stock})
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;