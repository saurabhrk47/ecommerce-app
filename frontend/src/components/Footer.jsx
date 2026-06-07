function Footer() {
  const comingSoon = (page) => {
    alert(`${page} Page Coming Soon 🚀`);
  };

  return (
    <footer
      style={{
        background: "#172337",
        color: "#fff",
        marginTop: "50px",
        padding: "50px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "30px",
        }}
      >
        {/* About */}

        <div>
          <h3>ABOUT</h3>

          <p
            onClick={() =>
              comingSoon("Contact Us")
            }
            style={{ cursor: "pointer" }}
          >
            Contact Us
          </p>

          <p
            onClick={() =>
              comingSoon("About Us")
            }
            style={{ cursor: "pointer" }}
          >
            About FlipMart
          </p>

          <p
            onClick={() =>
              comingSoon("Careers")
            }
            style={{ cursor: "pointer" }}
          >
            Careers
          </p>

          <p
            onClick={() =>
              comingSoon("Press")
            }
            style={{ cursor: "pointer" }}
          >
            Press
          </p>

          <p
            onClick={() =>
              comingSoon(
                "Corporate Information"
              )
            }
            style={{ cursor: "pointer" }}
          >
            Corporate Information
          </p>
        </div>

        {/* Help */}

        <div>
          <h3>HELP</h3>

          <p
            onClick={() =>
              comingSoon("Payments")
            }
            style={{ cursor: "pointer" }}
          >
            Payments
          </p>

          <p
            onClick={() =>
              comingSoon("Shipping")
            }
            style={{ cursor: "pointer" }}
          >
            Shipping
          </p>

          <p
            onClick={() =>
              comingSoon(
                "Cancellation & Returns"
              )
            }
            style={{ cursor: "pointer" }}
          >
            Cancellation & Returns
          </p>

          <p
            onClick={() =>
              comingSoon("FAQ")
            }
            style={{ cursor: "pointer" }}
          >
            FAQ
          </p>

          <p
            onClick={() =>
              comingSoon(
                "Report Infringement"
              )
            }
            style={{ cursor: "pointer" }}
          >
            Report Infringement
          </p>
        </div>

        {/* Policy */}

        <div>
          <h3>POLICY</h3>

          <p
            onClick={() =>
              comingSoon("Return Policy")
            }
            style={{ cursor: "pointer" }}
          >
            Return Policy
          </p>

          <p
            onClick={() =>
              comingSoon("Terms Of Use")
            }
            style={{ cursor: "pointer" }}
          >
            Terms Of Use
          </p>

          <p
            onClick={() =>
              comingSoon("Security")
            }
            style={{ cursor: "pointer" }}
          >
            Security
          </p>

          <p
            onClick={() =>
              comingSoon(
                "Privacy Policy"
              )
            }
            style={{ cursor: "pointer" }}
          >
            Privacy Policy
          </p>

          <p
            onClick={() =>
              comingSoon("Sitemap")
            }
            style={{ cursor: "pointer" }}
          >
            Sitemap
          </p>
        </div>

        {/* Seller */}

        <div>
          <h3>WANT TO BE A SELLER?</h3>

          <p>
            Start selling on FlipMart and
            reach millions of customers.
          </p>

          <button
            onClick={() =>
              comingSoon(
                "Seller Registration"
              )
            }
            style={{
              marginTop: "10px",
              padding: "10px 20px",
              background: "#ff9f00",
              border: "none",
              borderRadius: "8px",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Become A Seller
          </button>
        </div>

        {/* Contact */}

        <div>
          <h3>CONTACT US</h3>

          <p>
            📍 Ghaziabad, Uttar Pradesh,
            India
          </p>

          <p>
            📧 support@flipmart.com
          </p>

          <p>
            📞 +91 98765 43210
          </p>

          <p>
            🕒 Mon - Sat | 9 AM - 8 PM
          </p>
        </div>
      </div>

      <hr
        style={{
          margin: "30px 0",
          borderColor: "#444",
        }}
      />

      <div
        style={{
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginBottom: "15px",
            fontSize: "24px",
          }}
        >
          <span
            style={{ cursor: "pointer" }}
            onClick={() =>
              comingSoon("Facebook")
            }
          >
            📘
          </span>

          <span
            style={{ cursor: "pointer" }}
            onClick={() =>
              comingSoon("Instagram")
            }
          >
            📸
          </span>

          <span
            style={{ cursor: "pointer" }}
            onClick={() =>
              comingSoon("Twitter")
            }
          >
            🐦
          </span>

          <span
            style={{ cursor: "pointer" }}
            onClick={() =>
              comingSoon("LinkedIn")
            }
          >
            💼
          </span>
        </div>

        <h2>🛒 FlipMart</h2>

        <p>
          India's Smart Shopping
          Destination
        </p>

        <p>
          Secure Payments | Fast Delivery
          | Easy Returns
        </p>

        <p>
          © 2026 FlipMart. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;