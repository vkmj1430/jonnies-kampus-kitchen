import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import "./App.css";
import heroImage from "./assets/hero.png";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxfW-5PNghH-eXcHHE4ZXKvC0CY0PSp7Jq42TYJKrY-0-kjO9pSUCKcdcTuWuAEeRRx/exec";

const menuItems = [
  // BREAKFAST & MORNING BITES
  { id: 85, name: "Poha", price: 50, category: "Breakfast & Morning Bites", emoji: "🍚" },
  { id: 86, name: "Bread Omelette", price: 60, category: "Breakfast & Morning Bites", emoji: "🍳" },
  { id: 87, name: "Upma", price: 60, category: "Breakfast & Morning Bites", emoji: "🥣" },
  { id: 88, name: "Idli", price: 60, category: "Breakfast & Morning Bites", emoji: "🍚" },
  { id: 89, name: "Vada", price: 70, category: "Breakfast & Morning Bites", emoji: "🍩" },
  { id: 90, name: "Plain Dosa", price: 90, category: "Breakfast & Morning Bites", emoji: "🥞" },
  { id: 91, name: "Butter Plain Dosa", price: 100, category: "Breakfast & Morning Bites", emoji: "🥞" },
  { id: 92, name: "Butter Masala Dosa", price: 120, category: "Breakfast & Morning Bites", emoji: "🥞" },

  // SANDWICHES
  { id: 1, name: "Veg Sandwich", price: 100, category: "Sandwiches", emoji: "🥪" },
  { id: 2, name: "Corn & Cheese Sandwich", price: 110, category: "Sandwiches", emoji: "🥪" },
  { id: 3, name: "Coleslaw Sandwich", price: 120, category: "Sandwiches", emoji: "🥪" },
  { id: 4, name: "Paneer Tikka Sandwich", price: 120, category: "Sandwiches", emoji: "🥪" },
  { id: 5, name: "Chicken Sandwich", price: 160, category: "Sandwiches", emoji: "🥪" },
  { id: 6, name: "Chicken Coleslaw Sandwich", price: 180, category: "Sandwiches", emoji: "🥪" },
  { id: 7, name: "Chicken Tikka Sandwich", price: 200, category: "Sandwiches", emoji: "🥪" },

  // PAKODAS
  { id: 8, name: "Pyaz Pakoda", price: 80, category: "Pakodas / Snacks", emoji: "🧅" },
  { id: 9, name: "Mix Veg Pakoda", price: 100, category: "Pakodas / Snacks", emoji: "🥘" },
  { id: 10, name: "French Fries", price: 100, category: "Pakodas / Snacks", emoji: "🍟" },
  { id: 11, name: "Peri Peri Crispy Corn", price: 120, category: "Pakodas / Snacks", emoji: "🌽" },
  { id: 12, name: "Peri Peri Fries", price: 120, category: "Pakodas / Snacks", emoji: "🍟" },
  { id: 13, name: "Paneer Pakoda", price: 160, category: "Pakodas / Snacks", emoji: "🧀" },
  { id: 84, name: "Black Pepper Paneer", price: 170, category: "Pakodas / Snacks", emoji: "🧀" },

  // BURGERS
  { id: 14, name: "Veg Burger", price: 120, category: "Burgers", emoji: "🍔" },
  { id: 15, name: "Veg Cheese Burger", price: 130, category: "Burgers", emoji: "🍔" },
  { id: 16, name: "Paneer Burger", price: 140, category: "Burgers", emoji: "🍔" },
  { id: 17, name: "Paneer Cheese Burger", price: 150, category: "Burgers", emoji: "🍔" },
  { id: 18, name: "Double Tikki Burger", price: 180, category: "Burgers", emoji: "🍔" },
  { id: 19, name: "Chicken Zinger Burger", price: 220, category: "Burgers", emoji: "🍔" },
  { id: 20, name: "Chicken Zinger Double Tikki", price: 250, category: "Burgers", emoji: "🍔" },

  // WRAPS
  { id: 21, name: "Veg Spring Roll", price: 120, category: "Wraps N Spring Rolls", emoji: "🌯" },
  { id: 22, name: "Egg Roll", price: 120, category: "Wraps N Spring Rolls", emoji: "🌯" },
  { id: 23, name: "Paneer Spring Roll", price: 140, category: "Wraps N Spring Rolls", emoji: "🌯" },
  { id: 24, name: "Veg Mac Roll", price: 150, category: "Wraps N Spring Rolls", emoji: "🌯" },
  { id: 25, name: "Paneer Tikka Roll", price: 150, category: "Wraps N Spring Rolls", emoji: "🌯" },
  { id: 26, name: "Chicken Tikka Roll", price: 180, category: "Wraps N Spring Rolls", emoji: "🌯" },
  { id: 27, name: "Chicken Spring Roll", price: 180, category: "Wraps N Spring Rolls", emoji: "🌯" },
  { id: 28, name: "Chicken Mac Roll", price: 190, category: "Wraps N Spring Rolls", emoji: "🌯" },

  // MOMOS
  { id: 29, name: "Veg Momo's (Steamed)", price: 80, category: "Momo's", emoji: "🥟" },
  { id: 30, name: "Veg Momo's (Fried)", price: 90, category: "Momo's", emoji: "🥟" },
  { id: 31, name: "Paneer Momo's (Steamed)", price: 100, category: "Momo's", emoji: "🥟" },
  { id: 32, name: "Veg Momo's (Kurkure)", price: 110, category: "Momo's", emoji: "🥟" },
  { id: 33, name: "Veg Chilly Momo's", price: 120, category: "Momo's", emoji: "🥟" },
  { id: 34, name: "Paneer Chilly Momo's", price: 130, category: "Momo's", emoji: "🥟" },
  { id: 35, name: "Paneer Momo's (Kurkure)", price: 140, category: "Momo's", emoji: "🥟" },
  { id: 36, name: "Chicken Momo's (Steamed)", price: 120, category: "Momo's", emoji: "🥟" },
  { id: 37, name: "Chicken Momo's (Fried)", price: 130, category: "Momo's", emoji: "🥟" },
  { id: 38, name: "Chicken Momo's (Kurkure)", price: 140, category: "Momo's", emoji: "🥟" },
  { id: 39, name: "Chicken Momo's (Chilly)", price: 150, category: "Momo's", emoji: "🥟" },

  // PASTA
  { id: 40, name: "White Sauce Penne Pasta", price: 175, category: "Italian Pasta", emoji: "🍝" },
  { id: 41, name: "Red Sauce Penne Pasta", price: 165, category: "Italian Pasta", emoji: "🍝" },
  { id: 42, name: "White Sauce Chicken Pasta", price: 200, category: "Italian Pasta", emoji: "🍝" },

  // SOUPS
  { id: 43, name: "Veg Hot & Sour Soup", price: 120, category: "Soups", emoji: "🍲" },
  { id: 44, name: "Veg Manchow Soup", price: 120, category: "Soups", emoji: "🍲" },
  { id: 45, name: "Cream of Tomato Soup", price: 120, category: "Soups", emoji: "🍲" },
  { id: 46, name: "Chicken Hot & Sour Soup", price: 150, category: "Soups", emoji: "🍲" },
  { id: 47, name: "Chicken Manchow Soup", price: 160, category: "Soups", emoji: "🍲" },

  // NOODLES & RICE
  { id: 48, name: "Veg Noodles", price: 100, category: "Noodles / Rice", emoji: "🍜" },
  { id: 49, name: "Hakka Noodles", price: 120, category: "Noodles / Rice", emoji: "🍜" },
  { id: 50, name: "Chilly Garlic Noodles", price: 130, category: "Noodles / Rice", emoji: "🍜" },
  { id: 51, name: "Egg Noodles", price: 140, category: "Noodles / Rice", emoji: "🍜" },
  { id: 52, name: "Chicken Noodles", price: 180, category: "Noodles / Rice", emoji: "🍜" },
  { id: 53, name: "Steamed Rice", price: 100, category: "Noodles / Rice", emoji: "🍚" },
  { id: 54, name: "Veg Fried Rice", price: 120, category: "Noodles / Rice", emoji: "🍚" },
  { id: 55, name: "Schezwan Fried Rice", price: 130, category: "Noodles / Rice", emoji: "🍚" },
  { id: 56, name: "Egg Fried Rice", price: 140, category: "Noodles / Rice", emoji: "🍚" },
  { id: 57, name: "Paneer Fried Rice", price: 150, category: "Noodles / Rice", emoji: "🍚" },

  // CHINESE STARTERS
  { id: 58, name: "Veg Manchurian (Dry)", price: 130, category: "Chinese Starters", emoji: "🥘" },
  { id: 59, name: "Veg Manchurian (Gravy)", price: 140, category: "Chinese Starters", emoji: "🥘" },
  { id: 60, name: "Crispy Veg", price: 150, category: "Chinese Starters", emoji: "🥘" },
  { id: 61, name: "Honey Chilly Potato", price: 160, category: "Chinese Starters", emoji: "🥔" },
  { id: 62, name: "Paneer Manchurian (Dry)", price: 160, category: "Chinese Starters", emoji: "🧀" },
  { id: 63, name: "Paneer Manchurian (Gravy)", price: 170, category: "Chinese Starters", emoji: "🧀" },
  { id: 64, name: "Chilly Mushroom", price: 180, category: "Chinese Starters", emoji: "🍄" },
  { id: 65, name: "Chilly Paneer", price: 200, category: "Chinese Starters", emoji: "🧀" },
  { id: 66, name: "Chicken Manchurian (Dry)", price: 210, category: "Chinese Starters", emoji: "🍗" },
  { id: 67, name: "Chicken Manchurian (Gravy)", price: 220, category: "Chinese Starters", emoji: "🍗" },
  { id: 68, name: "Black Pepper Chicken", price: 180, category: "Chinese Starters", emoji: "🍗" },
  { id: 69, name: "Chilly Chicken", price: 200, category: "Chinese Starters", emoji: "🍗" },
  { id: 70, name: "Chicken 65", price: 220, category: "Chinese Starters", emoji: "🍗" },

  // INDIAN MAINS & KAMPUS MEALS
  { id: 93, name: "Paneer Butter Masala", price: 200, category: "Indian Mains & Kampus Meals", emoji: "🍛" },
  { id: 94, name: "Kadhai Paneer", price: 230, category: "Indian Mains & Kampus Meals", emoji: "🍛" },
  { id: 95, name: "Paneer Bhurji", price: 180, category: "Indian Mains & Kampus Meals", emoji: "🍳" },
  { id: 96, name: "Egg Bhurji", price: 140, category: "Indian Mains & Kampus Meals", emoji: "🍳" },
  { id: 97, name: "Mix Veg Curry", price: 150, category: "Indian Mains & Kampus Meals", emoji: "🥘" },
  { id: 98, name: "Rajma Rice Combo", price: 130, category: "Indian Mains & Kampus Meals", emoji: "🍛" },
  { id: 99, name: "Veg Biriyani", price: 180, category: "Indian Mains & Kampus Meals", emoji: "🍚" },
  { id: 100, name: "Chicken Biriyani", price: 250, category: "Indian Mains & Kampus Meals", emoji: "🍗" },

  // ROTI
  { id: 71, name: "Plain Tawa Roti", price: 15, category: "Roti", emoji: "🫓" },
  { id: 72, name: "Butter Tawa Roti", price: 20, category: "Roti", emoji: "🫓" },

  // PARATHA
  { id: 73, name: "Plain Paratha", price: 40, category: "Paratha", emoji: "🫓" },
  { id: 74, name: "Aloo Paratha", price: 70, category: "Paratha", emoji: "🫓" },
  { id: 75, name: "Aloo Pyaz Paratha", price: 80, category: "Paratha", emoji: "🫓" },
  { id: 76, name: "Paneer Paratha", price: 90, category: "Paratha", emoji: "🫓" },
  { id: 77, name: "Paneer Onion Paratha", price: 100, category: "Paratha", emoji: "🫓" },

  // BEVERAGES
  { id: 78, name: "Special Masala Tea", price: 30, category: "Tea / Beverages", emoji: "☕" },
  { id: 79, name: "Lemon Tea", price: 40, category: "Tea / Beverages", emoji: "🍋" },
  { id: 80, name: "Iced Tea", price: 60, category: "Tea / Beverages", emoji: "🥤" },
  { id: 81, name: "Hot Coffee", price: 50, category: "Tea / Beverages", emoji: "☕" },
  { id: 82, name: "Cold Coffee", price: 80, category: "Tea / Beverages", emoji: "🥤" },
  { id: 83, name: "Soft Drink / Mineral Water", price: 0, category: "Tea / Beverages", emoji: "🥤" },
];

const categories = [
  "All",
  "Breakfast & Morning Bites",
  "Sandwiches",
  "Pakodas / Snacks",
  "Burgers",
  "Wraps N Spring Rolls",
  "Momo's",
  "Italian Pasta",
  "Soups",
  "Noodles / Rice",
  "Chinese Starters",
  "Indian Mains & Kampus Meals",
  "Roti",
  "Paratha",
  "Tea / Beverages",
];

function getDescription(item) {
  const descriptions = {
    "Poha":
      "Flattened rice tempered with spices, peanuts and fresh herbs.",
    "Bread Omelette":
      "Fluffy spiced egg omelette served with toasted bread.",
    "Upma":
      "Traditional roasted semolina cooked with vegetables and mild spices.",
    "Idli":
      "Soft and fluffy steamed rice cakes served fresh.",
    "Vada":
      "Crispy deep-fried savory lentil donuts, golden and flavorful.",
    "Plain Dosa":
      "Classic crispy golden rice and lentil crepe.",
    "Butter Plain Dosa":
      "Crisp dosa topped generously with fresh butter.",
    "Butter Masala Dosa":
      "Crispy butter dosa filled with flavorful spiced potato masala.",

    "Veg Sandwich":
      "Fresh veggies, creamy spread and soft toasted bread.",
    "Corn & Cheese Sandwich":
      "Sweet corn and melted cheese layered in soft toasted bread.",
    "Coleslaw Sandwich":
      "Crunchy creamy coleslaw packed between freshly toasted bread.",
    "Paneer Tikka Sandwich":
      "Smoky paneer tikka with fresh veggies and delicious sauces.",
    "Chicken Sandwich":
      "Tender chicken, fresh veggies and creamy sauce in toasted bread.",
    "Chicken Coleslaw Sandwich":
      "Juicy chicken combined with creamy crunchy coleslaw.",
    "Chicken Tikka Sandwich":
      "Flavorful chicken tikka with fresh veggies and creamy sauces.",

    "Pyaz Pakoda":
      "Crispy onion fritters, golden fried and served hot.",
    "Mix Veg Pakoda":
      "Crispy mix vegetable fritters with delicious Indian spices.",
    "French Fries":
      "Golden, crispy fries perfect for a quick campus snack.",
    "Peri Peri Crispy Corn":
      "Crunchy crispy corn tossed in spicy peri peri seasoning.",
    "Peri Peri Fries":
      "Crispy golden fries loaded with spicy peri peri flavour.",
    "Paneer Pakoda":
      "Soft paneer coated in spiced batter and fried until golden.",
    "Black Pepper Paneer":
      "Crispy paneer tossed with aromatic black pepper and flavorful spices.",

    "Veg Burger":
      "Crispy veg patty, fresh veggies and creamy sauce in a soft bun.",
    "Veg Cheese Burger":
      "Classic veg burger loaded with a delicious layer of melted cheese.",
    "Paneer Burger":
      "Flavorful paneer patty with fresh veggies and creamy sauces.",
    "Paneer Cheese Burger":
      "Juicy paneer patty topped with melted cheese and fresh veggies.",
    "Double Tikki Burger":
      "Two crispy tikki patties stacked with fresh veggies and sauces.",
    "Chicken Zinger Burger":
      "Crispy chicken fillet, fresh veggies and creamy sauce in a soft bun.",
    "Chicken Zinger Double Tikki":
      "Double the chicken goodness with crispy patties and rich sauces.",

    "Veg Spring Roll":
      "Crispy spring roll filled with seasoned fresh vegetables.",
    "Egg Roll":
      "Soft wrap layered with seasoned egg and fresh tasty fillings.",
    "Paneer Spring Roll":
      "Crispy roll packed with flavourful paneer and fresh vegetables.",
    "Veg Mac Roll":
      "Creamy macaroni and fresh fillings wrapped in a delicious roll.",
    "Paneer Tikka Roll":
      "Smoky paneer tikka wrapped with fresh veggies and tasty sauces.",
    "Chicken Tikka Roll":
      "Juicy chicken tikka wrapped with fresh veggies and flavorful sauces.",
    "Chicken Spring Roll":
      "Crispy spring roll packed with delicious seasoned chicken filling.",
    "Chicken Mac Roll":
      "Creamy macaroni and tender chicken wrapped in a tasty roll.",

    "Veg Momo's (Steamed)":
      "Soft steamed momos filled with delicious seasoned vegetables.",
    "Veg Momo's (Fried)":
      "Crispy fried momos filled with flavorful vegetable stuffing.",
    "Paneer Momo's (Steamed)":
      "Soft steamed momos filled with creamy, flavorful paneer.",
    "Veg Momo's (Kurkure)":
      "Crunchy Kurkure-style coating with delicious veg momo filling.",
    "Veg Chilly Momo's":
      "Crispy veg momos tossed with spicy chilly sauce and veggies.",
    "Paneer Chilly Momo's":
      "Paneer momos tossed in spicy chilly sauce with fresh vegetables.",
    "Paneer Momo's (Kurkure)":
      "Crunchy Kurkure coating outside with flavorful paneer momos inside.",
    "Chicken Momo's (Steamed)":
      "Soft steamed momos filled with juicy seasoned chicken.",
    "Chicken Momo's (Fried)":
      "Crispy fried momos with a juicy and flavorful chicken filling.",
    "Chicken Momo's (Kurkure)":
      "Crunchy Kurkure coating outside with juicy chicken momos inside.",
    "Chicken Momo's (Chilly)":
      "Juicy chicken momos tossed with spicy chilly sauce and vegetables.",

    "White Sauce Penne Pasta":
      "Creamy white sauce, tender penne and rich cheesy flavours.",
    "Red Sauce Penne Pasta":
      "Penne pasta tossed in a rich, tangy and flavorful red sauce.",
    "White Sauce Chicken Pasta":
      "Creamy white sauce pasta loaded with tender pieces of chicken.",

    "Veg Hot & Sour Soup":
      "A warm, tangy and spicy soup loaded with fresh vegetables.",
    "Veg Manchow Soup":
      "Spicy vegetable soup topped with crispy noodles for extra crunch.",
    "Cream of Tomato Soup":
      "Smooth and comforting tomato soup with a rich creamy texture.",
    "Chicken Hot & Sour Soup":
      "Spicy and tangy soup with tender chicken and fresh vegetables.",
    "Chicken Manchow Soup":
      "Flavorful chicken soup topped with crispy noodles and fresh veggies.",

    "Veg Noodles":
      "Hot wok-tossed noodles loaded with fresh crunchy vegetables.",
    "Hakka Noodles":
      "Classic wok-tossed noodles with vegetables and Indo-Chinese flavours.",
    "Chilly Garlic Noodles":
      "Wok-tossed noodles infused with spicy chilly and aromatic garlic.",
    "Egg Noodles":
      "Wok-tossed noodles combined with seasoned egg and fresh vegetables.",
    "Chicken Noodles":
      "Hot noodles tossed with tender chicken and flavorful vegetables.",
    "Steamed Rice":
      "Light and fluffy steamed rice, perfect with your favourite curry.",
    "Veg Fried Rice":
      "Wok-fried rice tossed with fresh vegetables and aromatic seasoning.",
    "Schezwan Fried Rice":
      "Spicy Schezwan-style fried rice loaded with bold flavours.",
    "Egg Fried Rice":
      "Wok-fried rice with seasoned egg and delicious Indo-Chinese flavours.",
    "Paneer Fried Rice":
      "Flavorful fried rice tossed with soft paneer and fresh vegetables.",

    "Veg Manchurian (Dry)":
      "Crispy vegetable balls tossed in a flavorful Manchurian sauce.",
    "Veg Manchurian (Gravy)":
      "Soft vegetable Manchurian balls served in rich spicy gravy.",
    "Crispy Veg":
      "Crispy mixed vegetables tossed with delicious Indo-Chinese seasoning.",
    "Honey Chilly Potato":
      "Crispy potato strips tossed in sweet, spicy honey chilly sauce.",
    "Paneer Manchurian (Dry)":
      "Crispy paneer tossed in flavorful Manchurian sauce and spices.",
    "Paneer Manchurian (Gravy)":
      "Soft paneer Manchurian served in a rich and spicy gravy.",
    "Chilly Mushroom":
      "Tender mushrooms tossed with chilly, onions and fresh peppers.",
    "Chilly Paneer":
      "Soft paneer tossed with crunchy peppers in a spicy chilly sauce.",
    "Chicken Manchurian (Dry)":
      "Crispy chicken tossed in bold and flavorful Manchurian sauce.",
    "Chicken Manchurian (Gravy)":
      "Tender chicken pieces served in rich spicy Manchurian gravy.",
    "Black Pepper Chicken":
      "Tender chicken tossed with aromatic black pepper and fresh vegetables.",
    "Chilly Chicken":
      "Tender chicken tossed with crunchy vegetables in spicy chilly sauce.",
    "Chicken 65":
      "Crispy, spicy and flavorful chicken bites served hot and fresh.",

    "Paneer Butter Masala":
      "Soft paneer cubes cooked in a rich tomato-butter gravy.",
    "Kadhai Paneer":
      "Paneer cooked with bell peppers, onions and aromatic spices.",
    "Paneer Bhurji":
      "Scrambled cottage cheese cooked with onions and flavorful spices.",
    "Egg Bhurji":
      "Spiced Indian-style scrambled eggs cooked with onions and herbs.",
    "Mix Veg Curry":
      "Fresh seasonal vegetables cooked with aromatic Indian spices.",
    "Rajma Rice Combo":
      "Homestyle kidney beans curry served with steamed rice.",
    "Veg Biriyani":
      "Aromatic basmati rice cooked with garden-fresh vegetables and spices.",
    "Chicken Biriyani":
      "Tender chicken and fragrant basmati rice cooked with aromatic spices.",

    "Plain Tawa Roti":
      "Freshly cooked soft tawa roti, served hot.",
    "Butter Tawa Roti":
      "Fresh tawa roti finished with a delicious layer of butter.",

    "Plain Paratha":
      "Golden layered paratha cooked fresh on the tawa.",
    "Aloo Paratha":
      "Golden tawa paratha stuffed with delicious spiced potatoes.",
    "Aloo Pyaz Paratha":
      "Crispy paratha stuffed with spiced potato and onion filling.",
    "Paneer Paratha":
      "Soft golden paratha filled with flavorful seasoned paneer.",
    "Paneer Onion Paratha":
      "Delicious paneer and onion stuffing inside a crispy golden paratha.",

    "Special Masala Tea":
      "Hot aromatic tea brewed with special Indian spices.",
    "Lemon Tea":
      "Refreshing hot tea with a bright and zesty lemon flavour.",
    "Iced Tea":
      "Chilled and refreshing tea, perfect for a quick campus break.",
    "Hot Coffee":
      "Freshly prepared hot coffee with a rich comforting flavour.",
    "Cold Coffee":
      "Chilled creamy coffee, smooth and refreshing.",
    "Soft Drink / Mineral Water":
      "A refreshing drink or chilled mineral water for your meal.",
  };

  return descriptions[item.name] || "Freshly prepared with love.";
}

function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const [customer, setCustomer] = useState({
    name: "",
    room: "",
    phone: "",
    note: "",
  });

  const [transactionId, setTransactionId] = useState("");

  const filteredItems = menuItems.filter((item) => {
    const categoryMatch =
      activeCategory === "All" || item.category === activeCategory;

    const searchMatch =
      item.name.toLowerCase().includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  const addToCart = (item) => {
    setCart((currentCart) => {
      const existing = currentCart.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existing) {
        return currentCart.map((cartItem) =>
          cartItem.id === item.id
            ? {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            }
            : cartItem
        );
      }

      return [
        ...currentCart,
        {
          ...item,
          quantity: 1,
        },
      ];
    });
  };

  const increaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? {
            ...item,
            quantity: item.quantity + 1,
          }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? {
              ...item,
              quantity: item.quantity - 1,
            }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToCheckout = () => {
    setCartOpen(false);

    setTimeout(() => {
      document.getElementById("checkout")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 150);
  };

  const sendWhatsAppOrder = () => {
    if (cart.length === 0) {
      alert("Please add something to your cart first.");
      return;
    }

    if (!/^[0-9]{10}$/.test(customer.phone)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (!customer.name || !customer.room || !customer.phone) {
      alert(
        "Please enter your name, room/location and phone number."
      );
      return;
    }

    // Prepare order items for Google Sheet
    const orderItems = cart
      .map(
        (item) =>
          `${item.name} × ${item.quantity} = ₹${item.price * item.quantity
          }`
      )
      .join(" | ");

    // Data to save in Google Sheet
    const orderData = {
      orderItems: orderItems,
      total: cartTotal,
      name: customer.name,
      room: customer.room,
      phone: customer.phone,
      note: customer.note || "",
      paymentStatus: transactionId.trim() ? "Paid" : "Pending",
      transactionId: transactionId.trim(),
    };

    // Send order to Google Sheet
    const formData = new URLSearchParams();

    formData.append(
      "payload",
      JSON.stringify(orderData)
    );

    fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      body: formData,
      mode: "no-cors",
    }).catch((error) => {
      console.error("Google Sheet error:", error);
    });

    // WhatsApp message
    let message = `🍽️ *JONNIE'S KAMPUS KITCHEN*\n\n`;

    message += `*NEW ORDER* 🛒\n`;
    message += `━━━━━━━━━━━━━━━━━━\n\n`;

    cart.forEach((item) => {
      message += `• ${item.name} × ${item.quantity} = ₹${item.price * item.quantity
        }\n`;
    });

    message += `\n━━━━━━━━━━━━━━━━━━\n`;
    message += `*TOTAL: ₹${cartTotal}*\n\n`;

    message += `👤 *CUSTOMER DETAILS*\n`;
    message += `Name: ${customer.name}\n`;
    message += `Room / Location: ${customer.room}\n`;
    message += `Phone: ${customer.phone}\n`;

    if (customer.note) {
      message += `Note: ${customer.note}\n`;
    }

    message += `\n💳 *PAYMENT DETAILS*\n`;

    if (transactionId.trim()) {
      message += `Payment Status: PAID\n`;
      message += `Transaction ID / UTR: ${transactionId.trim()}\n`;
    } else {
      message += `Payment Status: PENDING\n`;
      message += `Transaction ID / UTR: Not provided\n`;
    }

    message += `\nPlease confirm my order. 🙏`;

    const whatsappNumber = "918855884272";

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        message
      )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="app">

      {/* ================= HEADER ================= */}

      <header className="header">

        <a href="#" className="brand">
          <div className="brand-logo">👨‍🍳</div>

          <div className="brand-text">
            <h1>JONNIE'S</h1>
            <span>KAMPUS KITCHEN</span>
          </div>
        </a>

        <nav className="nav">
          <a href="#" className="active">Home</a>

          <button onClick={scrollToMenu}>
            Menu
          </button>

          <a href="#about">
            About
          </a>

          <a href="#contact">
            Contact
          </a>
        </nav>

        <button
          className="cart-button"
          onClick={() => setCartOpen(true)}
        >
          <span className="cart-icon">🛒</span>
          <span className="cart-text">Cart</span>

          {cartCount > 0 && (
            <span className="cart-count">
              {cartCount}
            </span>
          )}
        </button>

      </header>


      {/* ================= HERO ================= */}

      <section className="hero">

        {/* LEFT CONTENT */}

        <div className="hero-content">

          <div className="hero-kicker">
            🍜 JONNIE'S CAMPUS KITCHEN
          </div>

          <h2>
            Hungry?
            <br />
            <span>We've Got You.</span>
          </h2>

          <p className="hero-slogan">
            The mess that doesn't mess with the taste.
          </p>

          <p className="hero-description">
            Fresh, tasty & affordable food made for the
            <strong> NIT Srinagar campus.</strong>
          </p>

          <button
            className="hero-button"
            onClick={scrollToMenu}
          >
            Explore Menu
            <span>→</span>
          </button>


          {/* HERO FEATURES */}

          <div className="hero-features">

            <div className="feature">

              <div className="feature-icon">
                👨‍🍳
              </div>

              <div>
                <strong>Fresh</strong>
                <span>Ingredients</span>
              </div>

            </div>


            <div className="feature-line"></div>


            <div className="feature">

              <div className="feature-icon">
                ✓
              </div>

              <div>
                <strong>Hygienic</strong>
                <span>& Safe</span>
              </div>

            </div>


            <div className="feature-line"></div>


            <div className="feature">

              <div className="feature-icon">
                ♡
              </div>

              <div>
                <strong>Made</strong>
                <span>with Love</span>
              </div>

            </div>

          </div>

        </div>


        {/* RIGHT FOOD IMAGE */}

        <div className="hero-visual">

          <div className="hero-image-frame">

            <img
              src={heroImage}
              alt="Jonnie's Kampus Kitchen food"
              className="hero-image"
            />

          </div>

        </div>


        {/* DECORATIVE ELEMENTS */}

        <div className="hero-decoration hero-decoration-one">
          ✦
        </div>

        <div className="hero-decoration hero-decoration-two">
          •
        </div>

      </section>


      {/* ================= MENU ================= */}

      <section
        className="menu-section"
        id="menu"
      >

        <div className="section-heading">

          <div className="section-kicker">
            WHAT'S COOKING?
          </div>

          <h2>
            Our <span>Menu</span>
          </h2>

          <p>
            Something delicious for every campus craving.
          </p>

        </div>


        {/* SEARCH */}

        <div className="search-box">

          <span>⌕</span>

          <input
            type="text"
            placeholder="Search for food..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {search && (
            <button
              className="clear-search"
              onClick={() => setSearch("")}
            >
              ×
            </button>
          )}

        </div>


        {/* CATEGORIES */}

        <div className="categories">

          {categories.map((category) => (
            <button
              key={category}
              className={
                activeCategory === category
                  ? "category active"
                  : "category"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}

        </div>


        {/* FOOD GRID */}

        {filteredItems.length > 0 ? (

          <div className="food-grid">

            {filteredItems.map((item) => (

              <article
                className="food-card"
                key={item.id}
              >

                <div className="food-image">

                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="food-card-image"
                    />
                  ) : (
                    <div className="food-emoji">
                      {item.emoji}
                    </div>
                  )}

                  <div className="food-image-shape"></div>

                </div>


                <div className="food-info">

                  <div className="food-category">
                    {item.category}
                  </div>

                  <h3>{item.name}</h3>

                  <p>
                    {getDescription(item)}
                  </p>

                  <div className="food-bottom">

                    <strong>
                      {item.price === 0
                        ? "MRP"
                        : `₹${item.price}`}
                    </strong>

                    <button
                      onClick={() => addToCart(item)}
                    >
                      <span>+</span>
                      Add
                    </button>

                  </div>

                </div>

              </article>

            ))}

          </div>

        ) : (

          <div className="no-results">

            <div>🍽️</div>

            <h3>No food found</h3>

            <p>
              Try another search or category.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("All");
              }}
            >
              Show All Items
            </button>

          </div>

        )}

      </section>


      {/* ================= ABOUT ================= */}

      <section
        className="about-section"
        id="about"
      >

        <div className="about-inner">

          <div className="about-copy">

            <div className="section-kicker">
              MADE FOR THE CAMPUS
            </div>

            <h2>
              Good food,
              <br />
              <span>good people.</span>
            </h2>

            <p>
              Jonnie's Kampus Kitchen brings fresh,
              tasty and affordable food right to the
              NIT Srinagar community.
            </p>

            <p>
              From quick snacks and momos to noodles,
              Chinese favourites, pasta and Indian
              classics — there's something for everyone.
            </p>

          </div>

          <div className="about-card">

            <div className="about-card-icon">
              🍜
            </div>

            <h3>
              Freshly Prepared
            </h3>

            <p>
              Your favourite campus food,
              prepared fresh and served with love.
            </p>

          </div>

          <div className="about-card">

            <div className="about-card-icon">
              ❤️
            </div>

            <h3>
              Made With Love
            </h3>

            <p>
              Quality food, friendly vibes
              and prices made for students.
            </p>

          </div>

        </div>

      </section>


      {/* ================= CHECKOUT ================= */}

      <section
        className="checkout-section"
        id="checkout"
      >

        <div className="section-heading">

          <div className="section-kicker">
            READY TO ORDER?
          </div>

          <h2>
            Checkout
          </h2>

          <p>
            Add your details and send the order directly on WhatsApp.
          </p>

        </div>


        <div className="checkout-card">

          {/* ORDER SUMMARY */}

          <div className="checkout-summary">

            <div className="checkout-title">
              <span>YOUR ORDER</span>
              <h3>
                Order Summary
              </h3>
            </div>

            {cart.length === 0 ? (

              <div className="empty-summary">
                <div>🛒</div>

                <h4>
                  Your cart is empty
                </h4>

                <p>
                  Add some delicious food from the menu.
                </p>

                <button onClick={scrollToMenu}>
                  Explore Menu
                </button>
              </div>

            ) : (

              <>

                <div className="summary-items">

                  {cart.map((item) => (

                    <div
                      className="summary-item"
                      key={item.id}
                    >

                      <div>
                        <strong>
                          {item.name}
                        </strong>

                        <span>
                          ₹{item.price} × {item.quantity}
                        </span>
                      </div>

                      <b>
                        ₹{item.price * item.quantity}
                      </b>

                    </div>

                  ))}

                </div>

                <div className="summary-total">

                  <span>
                    Total
                  </span>

                  <strong>
                    ₹{cartTotal}
                  </strong>

                </div>

              </>

            )}

          </div>


          {/* CUSTOMER FORM */}

          <div className="checkout-form">

            <div className="checkout-title">
              <span>DELIVERY DETAILS</span>
              <h3>
                Your Details
              </h3>
            </div>


            <label>
              Your Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              value={customer.name}
              onChange={(e) =>
                setCustomer({
                  ...customer,
                  name: e.target.value,
                })
              }
            />


            <label>
              Room / Location
            </label>

            <input
              type="text"
              placeholder="e.g. Hostel / Room No."
              value={customer.room}
              onChange={(e) =>
                setCustomer({
                  ...customer,
                  room: e.target.value,
                })
              }
            />


            <label>
              Phone Number
            </label>

            <input
              type="tel"
              placeholder="10-digit Mobile Number"
              value={customer.phone}
              maxLength={10}
              inputMode="numeric"
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "").slice(0, 10);
                setCustomer({ ...customer, phone: value });
              }}
            />
            <div className="payment-section">
              <h3>💳 Pay for Your Order</h3>

              <p>
                Total Amount: <strong>₹{cartTotal}</strong>
              </p>

              <p>
                UPI ID: <strong>amitapnaidu378-1@okaxis</strong>
              </p>

              <div className="qr-container">
                <QRCodeSVG
                  value={`upi://pay?pa=amitapnaidu378-1@okaxis&pn=Jonnie%27s%20Kampus%20Kitchen&am=${cartTotal}&cu=INR`}
                  size={220}
                />
              </div>

              <p className="payment-instruction">
                Scan the QR code using any UPI app and complete the payment.
              </p>

              <input
                type="text"
                placeholder="Enter Transaction ID / UTR Number"
                value={transactionId}
                onChange={(e) => setTransactionId(e.target.value)}
              />
            </div>


            <label>
              Special Note
            </label>

            <textarea
              placeholder="Any special instructions?"
              value={customer.note}
              onChange={(e) =>
                setCustomer({
                  ...customer,
                  note: e.target.value,
                })
              }
            ></textarea>


            <button
              className="whatsapp-button"
              onClick={sendWhatsAppOrder}
            >
              <span>🟢</span>
              Send Order on WhatsApp
              <b>→</b>
            </button>

            <p className="whatsapp-note">
              Your order will open in WhatsApp for confirmation.
            </p>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer id="contact">

        <div className="footer-main">

          <div className="footer-brand">

            <div className="footer-logo">
              👨‍🍳
            </div>

            <div>
              <h2>
                JONNIE'S
              </h2>

              <span>
                KAMPUS KITCHEN
              </span>
            </div>

          </div>

          <p className="footer-tagline">
            Fresh, tasty & affordable food
            for the NIT Srinagar campus.
          </p>

        </div>


        <div className="footer-details">

          <div>
            <span>📍</span>

            <p>
              Opposite JK Bank,
              <br />
              Next to NIT Entrance Road,
              <br />
              Nigeen Bagh, Hazratbal
            </p>
          </div>

          <div>
            <span>📞</span>

            <p>
              855884472
              <br />
              9373449641
            </p>
          </div>

          <div>
            <span>💬</span>

            <p>
              WhatsApp Orders
              <br />
              8855884272
            </p>
          </div>

        </div>


        <div className="footer-bottom">

          <span>
            © 2026 Jonnie's Kampus Kitchen
          </span>

          <span>
            Made with ❤️ for the campus
          </span>

        </div>

      </footer>


      {/* ================= CART DRAWER ================= */}

      {cartOpen && (

        <div
          className="cart-overlay"
          onClick={() => setCartOpen(false)}
        >

          <aside
            className="cart-drawer"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="cart-header">

              <div>
                <span>
                  YOUR ORDER
                </span>

                <h2>
                  Cart
                </h2>
              </div>

              <button
                className="close-button"
                onClick={() => setCartOpen(false)}
              >
                ×
              </button>

            </div>


            {cart.length === 0 ? (

              <div className="drawer-empty">

                <div>
                  🛒
                </div>

                <h3>
                  Your cart is empty
                </h3>

                <p>
                  Add something delicious!
                </p>

                <button
                  onClick={() => {
                    setCartOpen(false);
                    scrollToMenu();
                  }}
                >
                  Explore Menu
                </button>

              </div>

            ) : (

              <>

                <div className="cart-items">

                  {cart.map((item) => (

                    <div
                      className="cart-item"
                      key={item.id}
                    >

                      <div className="cart-item-image">
                        {item.emoji}
                      </div>

                      <div className="cart-item-content">

                        <h3>
                          {item.name}
                        </h3>

                        <strong>
                          ₹{item.price}
                        </strong>

                        <div className="quantity">

                          <button
                            onClick={() =>
                              decreaseQuantity(item.id)
                            }
                          >
                            −
                          </button>

                          <span>
                            {item.quantity}
                          </span>

                          <button
                            onClick={() =>
                              increaseQuantity(item.id)
                            }
                          >
                            +
                          </button>

                        </div>

                      </div>

                    </div>

                  ))}

                </div>


                <div className="drawer-total">

                  <div>
                    <span>
                      Items
                    </span>

                    <strong>
                      {cartCount}
                    </strong>
                  </div>

                  <div>
                    <span>
                      Total
                    </span>

                    <strong>
                      ₹{cartTotal}
                    </strong>
                  </div>

                </div>


                <button
                  className="drawer-checkout"
                  onClick={scrollToCheckout}
                >
                  Proceed to Checkout
                  <span>→</span>
                </button>

              </>

            )}

          </aside>

        </div>

      )}

    </div>
  );
}

export default App;