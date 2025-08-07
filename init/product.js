const Product = require("../models/product");
const mongoose = require("mongoose");

//MongoDB Setup
main().then(() => {
  console.log("Successfully Connected to Database");
})
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/renter_web");
}

// 🧪 Sample product data
const data = [
  {
    name: "Aurora Lamp",
    desc: "A sleek lamp with ambient lighting.",
    colour: "Silver",
    price: 1299,
    hastags: ["lighting", "home", "decor"],
    isAvailable: true,
  },
  {
    name: "Pixel Backpack",
    desc: "Durable backpack with USB charging port.",
    colour: "Black",
    price: 2499,
    hastags: ["travel", "tech", "gear"],
    isAvailable: true,
  },
  {
    name: "Zen Mug",
    desc: "Ceramic mug with calming design.",
    colour: "Teal",
    price: 499,
    hastags: ["kitchen", "relax", "tea"],
    isAvailable: false,
  },
  {
    name: "Nimbus Chair",
    desc: "Ergonomic office chair with lumbar support.",
    colour: "Gray",
    price: 8999,
    hastags: ["office", "comfort", "furniture"],
    isAvailable: true,
  },
  {
    name: "Echo Speaker",
    desc: "Smart speaker with voice assistant.",
    colour: "White",
    price: 3499,
    hastags: ["audio", "smart", "tech"],
    isAvailable: true,
  },
];

// 🚀 Insert data into MongoDB
async function insertProducts() {
  try {

    // Clear existing products
    await Product.deleteMany({});
    console.log("Existing products cleared 🧹");

    // Insert sample products
    await Product.insertMany(data);
    console.log("Sample products inserted 🎉");

    mongoose.disconnect();
  } catch (error) {
    console.error("Error seeding products ❌", error);
    mongoose.disconnect();
  }
}

insertProducts();
