import { useEffect, useState } from "react";
import API from "../services/api";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [sortBy, setSortBy] =
    useState("default");

  const [bannerIndex, setBannerIndex] =
    useState(0);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setBannerIndex((prev) =>
        prev === 2 ? 0 : prev + 1
      );
    }, 4000);

    return () =>
      clearInterval(interval);
  }, []);

  const getProducts = async () => {
    try {
      const { data } = await API.get(
        "/products"
      );

      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  const categories = [
    {
      name: "All",
      img: "🔥",
    },
    {
      name: "Mobiles",
      img: "📱",
    },
    {
      name: "Fashion",
      img: "👕",
    },
    {
      name: "Electronics",
      img: "💻",
    },
    {
      name: "Home",
      img: "🏠",
    },
    {
      name: "Travel",
      img: "✈️",
    },
    {
      name: "Beauty",
      img: "💄",
    },
    {
      name: "Grocery",
      img: "🛒",
    },
  ];

  return (
    <>
      <Navbar />

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        {/* HERO SLIDER */}

        <div
          style={{
            background:
              bannerIndex === 0
                ? "linear-gradient(90deg,#2874f0,#4a00e0)"
                : bannerIndex === 1
                ? "linear-gradient(90deg,#ff512f,#dd2476)"
                : "linear-gradient(90deg,#11998e,#38ef7d)",

            color: "white",
            padding: "60px",
            borderRadius: "20px",
            marginBottom: "30px",
            minHeight: "280px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            transition: "0.5s",
          }}
        >
          {bannerIndex === 0 && (
            <>
              <h1
                style={{
                  fontSize: "60px",
                  marginBottom: "10px",
                }}
              >
                Mega Electronics Sale
              </h1>

              <h2>
                Up To 70% OFF On Electronics
              </h2>

              <button
                style={{
                  width: "220px",
                  marginTop: "20px",
                  padding: "15px",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                Shop Electronics
              </button>
            </>
          )}

          {bannerIndex === 1 && (
            <>
              <h1
                style={{
                  fontSize: "60px",
                  marginBottom: "10px",
                }}
              >
                Fashion Fiesta
              </h1>

              <h2>
                Latest Trends Starting ₹299
              </h2>

              <button
                style={{
                  width: "220px",
                  marginTop: "20px",
                  padding: "15px",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                Explore Fashion
              </button>
            </>
          )}

          {bannerIndex === 2 && (
            <>
              <h1
                style={{
                  fontSize: "60px",
                  marginBottom: "10px",
                }}
              >
                Grocery Super Deals
              </h1>

              <h2>
                Daily Essentials At Best Price
              </h2>

              <button
                style={{
                  width: "220px",
                  marginTop: "20px",
                  padding: "15px",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                Buy Grocery
              </button>
            </>
          )}

          <div
            style={{
              display: "flex",
              gap: "10px",
              marginTop: "25px",
            }}
          >
            {[0, 1, 2].map((dot) => (
              <div
                key={dot}
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background:
                    bannerIndex === dot
                      ? "white"
                      : "rgba(255,255,255,0.5)",
                }}
              />
            ))}
          </div>
        </div>

        {/* CATEGORIES */}
                <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "12px",
            marginBottom: "35px",
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            gap: "20px",
            boxShadow:
              "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          {categories.map((item) => (
            <div
              key={item.name}
              onClick={() =>
                setSelectedCategory(
                  item.name
                )
              }
              style={{
                textAlign: "center",
                cursor: "pointer",
                padding: "12px",
                borderRadius: "10px",

                background:
                  selectedCategory ===
                  item.name
                    ? "#2874f0"
                    : "white",

                color:
                  selectedCategory ===
                  item.name
                    ? "white"
                    : "black",

                transition: "0.3s",
              }}
            >
              <div
                style={{
                  fontSize: "50px",
                  marginBottom: "10px",
                }}
              >
                {item.img}
              </div>

              <p
                style={{
                  fontWeight: "600",
                }}
              >
                {item.name}
              </p>
            </div>
          ))}
        </div>

        {/* SEARCH + SORT */}

        <div
          style={{
            display: "flex",
            gap: "15px",
            marginBottom: "25px",
          }}
        >
          <input
            type="text"
            placeholder="🔍 Search Products..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            style={{
              flex: 1,
              padding: "14px",
              borderRadius: "10px",
              border: "1px solid #ddd",
              fontSize: "16px",
            }}
          />

          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value)
            }
            style={{
              width: "220px",
              padding: "14px",
              borderRadius: "10px",
              border: "1px solid #ddd",
            }}
          >
            <option value="default">
              Sort By
            </option>

            <option value="low">
              Price Low To High
            </option>

            <option value="high">
              Price High To Low
            </option>
          </select>
        </div>

        {/* FILTERING */}

        {(() => {
          let filteredProducts =
            products.filter((product) => {
              const matchSearch =
                product.name
                  .toLowerCase()
                  .includes(
                    search.toLowerCase()
                  );

              const matchCategory =
                selectedCategory === "All"
                  ? true
                  : product.category ===
                    selectedCategory;

              return (
                matchSearch &&
                matchCategory
              );
            });

          if (sortBy === "low") {
            filteredProducts.sort(
              (a, b) =>
                a.price - b.price
            );
          }

          if (sortBy === "high") {
            filteredProducts.sort(
              (a, b) =>
                b.price - a.price
            );
          }

          return (
            <>
              {/* PRODUCT COUNT */}

              <p
                style={{
                  color: "#666",
                  marginBottom: "20px",
                  fontWeight: "bold",
                }}
              >
                Showing{" "}
                {filteredProducts.length} Products
              </p>

              <h2
                style={{
                  fontSize: "35px",
                  marginBottom: "20px",
                }}
              >
                Trending Products
              </h2>
                            {filteredProducts.length === 0 ? (
                <div
                  style={{
                    background: "#fff",
                    padding: "40px",
                    borderRadius: "15px",
                    textAlign: "center",
                    boxShadow:
                      "0 2px 10px rgba(0,0,0,0.1)",
                  }}
                >
                  <h2>
                    😔 No Products Found
                  </h2>

                  <p>
                    Try changing search or
                    category filters.
                  </p>
                </div>
              ) : (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fill,minmax(280px,1fr))",
                    gap: "25px",
                  }}
                >
                  {filteredProducts.map(
                    (product) => (
                      <ProductCard
                        key={product._id}
                        product={product}
                      />
                    )
                  )}
                </div>
              )}
            </>
          );
        })()}
      </div>

      <Footer />
    </>
  );
}

export default Home;