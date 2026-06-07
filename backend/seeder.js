const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const Product = require("./models/Product");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    seedProducts();
  })
  .catch((err) => {
    console.log(err);
  });

const products = [// =========================
// MOBILES (10)
// =========================

{
  name: "iPhone 15",
  description: "Apple A16 Bionic Smartphone",
  price: 79999,
  image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800",
  category: "Mobiles",
  stock: 20,
},
{
  name: "iPhone 15 Pro",
  description: "Titanium Apple Smartphone",
  price: 129999,
  image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
  category: "Mobiles",
  stock: 10,
},
{
  name: "Samsung Galaxy S24",
  description: "Flagship Android Phone",
  price: 74999,
  image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800",
  category: "Mobiles",
  stock: 18,
},
{
  name: "Samsung Galaxy A55",
  description: "Mid Range Samsung",
  price: 34999,
  image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800",
  category: "Mobiles",
  stock: 25,
},
{
  name: "OnePlus 12",
  description: "Premium Performance Phone",
  price: 64999,
  image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=800",
  category: "Mobiles",
  stock: 15,
},
{
  name: "Nothing Phone 2",
  description: "Transparent Design Smartphone",
  price: 39999,
  image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800",
  category: "Mobiles",
  stock: 22,
},
{
  name: "Redmi Note 13 Pro",
  description: "Best Budget Device",
  price: 23999,
  image: "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=800",
  category: "Mobiles",
  stock: 30,
},
{
  name: "Vivo V30",
  description: "Camera Centric Smartphone",
  price: 31999,
  image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800",
  category: "Mobiles",
  stock: 20,
},
{
  name: "Oppo Reno 11",
  description: "Stylish Smartphone",
  price: 29999,
  image: "https://images.unsplash.com/photo-1583573636246-18cb2246697f?w=800",
  category: "Mobiles",
  stock: 16,
},
{
  name: "Realme GT 6",
  description: "Gaming Smartphone",
  price: 35999,
  image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800",
  category: "Mobiles",
  stock: 14,
},

// =========================
// FASHION (10)
// =========================

{
  name: "Nike Air Max",
  description: "Running Shoes",
  price: 5999,
  image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
  category: "Fashion",
  stock: 40,
},
{
  name: "Adidas Ultraboost",
  description: "Premium Sports Shoes",
  price: 7999,
  image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=800",
  category: "Fashion",
  stock: 35,
},
{
  name: "Puma Hoodie",
  description: "Winter Hoodie",
  price: 2499,
  image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800",
  category: "Fashion",
  stock: 20,
},
{
  name: "Levis Jeans",
  description: "Slim Fit Denim",
  price: 2999,
  image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800",
  category: "Fashion",
  stock: 30,
},
{
  name: "Roadster Shirt",
  description: "Casual Wear",
  price: 1299,
  image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800",
  category: "Fashion",
  stock: 25,
},
{
  name: "Allen Solly Shirt",
  description: "Formal Shirt",
  price: 1899,
  image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800",
  category: "Fashion",
  stock: 20,
},
{
  name: "US Polo T-Shirt",
  description: "Premium Cotton Tee",
  price: 1499,
  image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
  category: "Fashion",
  stock: 35,
},
{
  name: "Zara Jacket",
  description: "Winter Collection",
  price: 3999,
  image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800",
  category: "Fashion",
  stock: 15,
},
{
  name: "H&M Sweatshirt",
  description: "Comfort Wear",
  price: 2199,
  image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800",
  category: "Fashion",
  stock: 18,
},
{
  name: "Woodland Boots",
  description: "Outdoor Footwear",
  price: 4599,
  image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800",
  category: "Fashion",
  stock: 12,
},
// =========================
// ELECTRONICS (10)
// =========================

{
  name: "MacBook Air M3",
  description: "Apple Laptop with M3 Chip",
  price: 114999,
  image: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=800",
  category: "Electronics",
  stock: 8,
},
{
  name: "Dell XPS 15",
  description: "Professional Laptop",
  price: 99999,
  image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800",
  category: "Electronics",
  stock: 10,
},
{
  name: "HP Pavilion",
  description: "Everyday Use Laptop",
  price: 64999,
  image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800",
  category: "Electronics",
  stock: 12,
},
{
  name: "Lenovo Legion 5",
  description: "Gaming Laptop",
  price: 119999,
  image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800",
  category: "Electronics",
  stock: 7,
},
{
  name: "Sony WH-1000XM5",
  description: "Noise Cancelling Headphones",
  price: 24999,
  image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
  category: "Electronics",
  stock: 20,
},
{
  name: "JBL Flip 6",
  description: "Portable Bluetooth Speaker",
  price: 4999,
  image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=800",
  category: "Electronics",
  stock: 25,
},
{
  name: "Apple Watch Series 9",
  description: "Premium Smart Watch",
  price: 42999,
  image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800",
  category: "Electronics",
  stock: 12,
},
{
  name: "Samsung Smart TV 55",
  description: "4K UHD Smart TV",
  price: 58999,
  image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800",
  category: "Electronics",
  stock: 10,
},
{
  name: "Canon EOS R50",
  description: "Mirrorless Camera",
  price: 74999,
  image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800",
  category: "Electronics",
  stock: 6,
},
{
  name: "Logitech MX Keys",
  description: "Wireless Keyboard",
  price: 8999,
  image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800",
  category: "Electronics",
  stock: 18,
},// =========================
// HOME (10)
// =========================

{
  name: "Luxury Wooden Sofa",
  description: "Premium 5 Seater Sofa",
  price: 35999,
  image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
  category: "Home",
  stock: 8,
},
{
  name: "Modern Dining Table",
  description: "6 Seater Dining Set",
  price: 24999,
  image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=800",
  category: "Home",
  stock: 10,
},
{
  name: "Queen Size Bed",
  description: "Premium Bedroom Furniture",
  price: 29999,
  image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
  category: "Home",
  stock: 6,
},
{
  name: "Office Study Desk",
  description: "Modern Wooden Desk",
  price: 7999,
  image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
  category: "Home",
  stock: 20,
},
{
  name: "Bookshelf Rack",
  description: "Multi Layer Bookshelf",
  price: 5999,
  image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
  category: "Home",
  stock: 15,
},
{
  name: "LED Floor Lamp",
  description: "Decorative Home Light",
  price: 2999,
  image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800",
  category: "Home",
  stock: 30,
},
{
  name: "Wall Decor Set",
  description: "Luxury Wall Decoration",
  price: 1999,
  image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800",
  category: "Home",
  stock: 25,
},
{
  name: "Coffee Table",
  description: "Living Room Furniture",
  price: 8999,
  image: "https://images.unsplash.com/photo-1499933374294-4584851497cc?w=800",
  category: "Home",
  stock: 12,
},
{
  name: "Kitchen Storage Cabinet",
  description: "Large Storage Unit",
  price: 11999,
  image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800",
  category: "Home",
  stock: 10,
},
{
  name: "Premium Recliner Chair",
  description: "Comfort Seating",
  price: 15999,
  image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
  category: "Home",
  stock: 5,
},

// =========================
// BEAUTY (10)
// =========================

{
  name: "Lakme Lipstick",
  description: "Matte Finish Lipstick",
  price: 499,
  image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800",
  category: "Beauty",
  stock: 100,
},
{
  name: "Maybelline Foundation",
  description: "Smooth Skin Foundation",
  price: 799,
  image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800",
  category: "Beauty",
  stock: 80,
},
{
  name: "Mamaearth Face Wash",
  description: "Natural Face Cleanser",
  price: 299,
  image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800",
  category: "Beauty",
  stock: 120,
},
{
  name: "Nivea Body Lotion",
  description: "Daily Skin Care",
  price: 349,
  image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800",
  category: "Beauty",
  stock: 90,
},
{
  name: "Dove Shampoo",
  description: "Hair Care Solution",
  price: 399,
  image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=800",
  category: "Beauty",
  stock: 70,
},
{
  name: "L'Oreal Hair Serum",
  description: "Professional Hair Serum",
  price: 699,
  image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800",
  category: "Beauty",
  stock: 60,
},
{
  name: "Garnier Face Cream",
  description: "Daily Moisturizer",
  price: 299,
  image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800",
  category: "Beauty",
  stock: 85,
},
{
  name: "Minimalist Sunscreen",
  description: "SPF 50 Protection",
  price: 499,
  image: "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?w=800",
  category: "Beauty",
  stock: 90,
},
{
  name: "Victoria Secret Perfume",
  description: "Luxury Fragrance",
  price: 2499,
  image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800",
  category: "Beauty",
  stock: 25,
},
{
  name: "Nykaa Makeup Kit",
  description: "Complete Beauty Kit",
  price: 2999,
  image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800",
  category: "Beauty",
  stock: 30,
},  // =========================
// GROCERY (10)
// =========================

{
  name: "Basmati Rice 5kg",
  description: "Premium Long Grain Rice",
  price: 899,
  image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800",
  category: "Grocery",
  stock: 100,
},
{
  name: "Aashirvaad Atta 10kg",
  description: "Whole Wheat Flour",
  price: 599,
  image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800",
  category: "Grocery",
  stock: 80,
},
{
  name: "Fortune Sunflower Oil",
  description: "Healthy Cooking Oil",
  price: 189,
  image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800",
  category: "Grocery",
  stock: 120,
},
{
  name: "Tata Salt",
  description: "Iodized Salt",
  price: 35,
  image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=800",
  category: "Grocery",
  stock: 200,
},
{
  name: "Nescafe Coffee",
  description: "Instant Coffee Powder",
  price: 399,
  image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800",
  category: "Grocery",
  stock: 75,
},
{
  name: "Taj Mahal Tea",
  description: "Premium Tea",
  price: 299,
  image: "https://images.unsplash.com/photo-1564894809611-1742fc40ed80?w=800",
  category: "Grocery",
  stock: 60,
},
{
  name: "Maggi Noodles Pack",
  description: "Instant Noodles",
  price: 149,
  image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=800",
  category: "Grocery",
  stock: 150,
},
{
  name: "Oreo Biscuits",
  description: "Chocolate Cream Biscuit",
  price: 40,
  image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800",
  category: "Grocery",
  stock: 120,
},
{
  name: "Amul Butter",
  description: "Pasteurized Butter",
  price: 59,
  image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=800",
  category: "Grocery",
  stock: 90,
},
{
  name: "Kellogg Corn Flakes",
  description: "Healthy Breakfast",
  price: 199,
  image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=800",
  category: "Grocery",
  stock: 50,
},

// =========================
// TRAVEL (10)
// =========================

{
  name: "Delhi to Dubai Flight",
  description: "Round Trip Air Ticket",
  price: 25999,
  image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800",
  category: "Travel",
  stock: 50,
},
{
  name: "Delhi to Goa Flight",
  description: "Domestic Flight Ticket",
  price: 6999,
  image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800",
  category: "Travel",
  stock: 100,
},
{
  name: "Mumbai to Singapore Flight",
  description: "International Flight",
  price: 34999,
  image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=800",
  category: "Travel",
  stock: 40,
},
{
  name: "Thailand Tour Package",
  description: "5 Days Luxury Tour",
  price: 45999,
  image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
  category: "Travel",
  stock: 20,
},
{
  name: "Maldives Honeymoon Package",
  description: "Romantic Vacation",
  price: 89999,
  image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800",
  category: "Travel",
  stock: 15,
},
{
  name: "Kashmir Holiday Package",
  description: "7 Days Tour",
  price: 29999,
  image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800",
  category: "Travel",
  stock: 25,
},
{
  name: "Shimla Manali Tour",
  description: "Hill Station Package",
  price: 19999,
  image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800",
  category: "Travel",
  stock: 35,
},
{
  name: "Europe Vacation Package",
  description: "10 Days Europe Tour",
  price: 149999,
  image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800",
  category: "Travel",
  stock: 10,
},
{
  name: "Bali Tour Package",
  description: "Beach Vacation",
  price: 59999,
  image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
  category: "Travel",
  stock: 18,
},
{
  name: "Dubai Desert Safari",
  description: "Adventure Package",
  price: 14999,
  image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800",
  category: "Travel",
  stock: 30,
},
];


const seedProducts = async () => {
  try {
    await Product.deleteMany();

    await Product.insertMany(products);

    console.log("Products Seeded Successfully ✅");

    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};