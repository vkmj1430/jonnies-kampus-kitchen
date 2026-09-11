import { useState } from "react";
import "./App.css";

/* =========================================================
   MENU DATA
   ========================================================= */

const menuItems = [

  // ================= SANDWICHES =================

  {
    id: 1,
    name: "Veg Sandwich",
    price: 100,
    category: "Sandwiches",
    emoji: "🥪",
    description: "Fresh house veggies & tangy mayonnaise spread",
  },
  {
    id: 2,
    name: "Corn & Cheese Sandwich",
    price: 110,
    category: "Sandwiches",
    emoji: "🥪",
    description: "Char-grilled cheesy slices",
  },
  {
    id: 3,
    name: "Coleslaw Sandwich",
    price: 120,
    category: "Sandwiches",
    emoji: "🥪",
    description: "Creamy, crunchy classic cabbage & carrot blend",
  },
  {
    id: 4,
    name: "Paneer Tikka Sandwich",
    price: 120,
    category: "Sandwiches",
    emoji: "🥪",
    description: "Grilled cottage cheese spiced to perfection",
  },
  {
    id: 5,
    name: "Chicken Sandwich",
    price: 160,
    category: "Sandwiches",
    emoji: "🥪",
    description: "Shredded chicken in signature herbs",
  },
  {
    id: 6,
    name: "Chicken Coleslaw Sandwich",
    price: 180,
    category: "Sandwiches",
    emoji: "🥪",
    description: "Juicy chicken blended with cool coleslaw",
  },
  {
    id: 7,
    name: "Chicken Tikka Sandwich",
    price: 200,
    category: "Sandwiches",
    emoji: "🥪",
    description: "Char-grilled spicy chicken slices",
  },

  // ================= PAKODAS =================

  {
    id: 8,
    name: "Pyaz Pakoda",
    price: 80,
    category: "Pakodas / Snacks",
    emoji: "🧅",
    description: "Crispy golden onion fritters with mint chutney",
  },
  {
    id: 9,
    name: "Mix Veg Pakoda",
    price: 100,
    category: "Pakodas / Snacks",
    emoji: "🥗",
    description: "Assorted seasonal vegetable fritters",
  },
  {
    id: 10,
    name: "French Fries",
    price: 100,
    category: "Pakodas / Snacks",
    emoji: "🍟",
    description: "Classic salted golden potato fries",
  },
  {
    id: 11,
    name: "Peri Peri Crispy Corn",
    price: 120,
    category: "Pakodas / Snacks",
    emoji: "🌽",
    description: "Golden sweet corn with signature zest",
  },
  {
    id: 12,
    name: "Peri Peri Fries",
    price: 120,
    category: "Pakodas / Snacks",
    emoji: "🍟",
    description: "Tossed in fiery Peri Peri spice blend",
  },
  {
    id: 13,
    name: "Paneer Pakoda",
    price: 160,
    category: "Pakodas / Snacks",
    emoji: "🧀",
    description: "Soft cottage cheese fritters fried crisp",
  },

  // ================= BURGERS =================

  {
    id: 14,
    name: "Veg Burger",
    price: 120,
    category: "Burgers",
    emoji: "🍔",
    description: "Crispy patty with fresh lettuce & cream",
  },
  {
    id: 15,
    name: "Veg Cheese Burger",
    price: 130,
    category: "Burgers",
    emoji: "🍔",
    description: "Loaded with melt-in-mouth cheddar cheese",
  },
  {
    id: 16,
    name: "Paneer Burger",
    price: 140,
    category: "Burgers",
    emoji: "🍔",
    description: "Spiced paneer patty with house sauce",
  },
  {
    id: 17,
    name: "Paneer Cheese Burger",
    price: 150,
    category: "Burgers",
    emoji: "🍔",
    description: "Paneer patty topped with extra cheese",
  },
  {
    id: 18,
    name: "Double Tikki Burger",
    price: 180,
    category: "Burgers",
    emoji: "🍔",
    description: "Double crispy vegetable patties",
  },
  {
    id: 19,
    name: "Chicken Zinger Burger",
    price: 220,
    category: "Burgers",
    emoji: "🍔",
    description: "Extra crispy chicken breast fillet",
  },
  {
    id: 20,
    name: "Chicken Zinger Double Tikki",
    price: 250,
    category: "Burgers",
    emoji: "🍔",
    description: "Double Zinger fried chicken patties",
  },

  // ================= WRAPS =================

  {
    id: 21,
    name: "Veg Spring Roll",
    price: 120,
    category: "Wraps N Spring Rolls",
    emoji: "🌯",
    description: "Crispy rolled pastry with savory veg filling",
  },
  {
    id: 22,
    name: "Egg Roll",
    price: 120,
    category: "Wraps N Spring Rolls",
    emoji: "🌯",
    description: "Classic street style spiced egg wrap",
  },
  {
    id: 23,
    name: "Paneer Spring Roll",
    price: 140,
    category: "Wraps N Spring Rolls",
    emoji: "🌯",
    description: "Loaded with spiced paneer & vegetables",
  },
  {
    id: 24,
    name: "Veg Mac Roll",
    price: 150,
    category: "Wraps N Spring Rolls",
    emoji: "🌯",
    description: "Special cheesy macaroni roll",
  },
  {
    id: 25,
    name: "Paneer Tikka Roll",
    price: 150,
    category: "Wraps N Spring Rolls",
    emoji: "🌯",
    description: "Tandoori paneer rolled in flaky paratha",
  },
  {
    id: 26,
    name: "Chicken Tikka Roll",
    price: 180,
    category: "Wraps N Spring Rolls",
    emoji: "🌯",
    description: "Smokey chicken tikka wrapped in warm roll",
  },
  {
    id: 27,
    name: "Chicken Spring Roll",
    price: 180,
    category: "Wraps N Spring Rolls",
    emoji: "🌯",
    description: "Golden fried roll with spiced chicken",
  },
  {
    id: 28,
    name: "Chicken Mac Roll",
    price: 190,
    category: "Wraps N Spring Rolls",
    emoji: "🌯",
    description: "Savory mac & cheese with chicken wrap",
  },

  // ================= MOMOS =================

  {
    id: 29,
    name: "Veg Momo's (Steamed)",
    price: 80,
    category: "Momo's",
    emoji: "🥟",
    description: "Soft steamed dumplings stuffed with fresh veg",
  },
  {
    id: 30,
    name: "Veg Momo's (Fried)",
    price: 90,
    category: "Momo's",
    emoji: "🥟",
    description: "Crispy golden fried vegetable dumplings",
  },
  {
    id: 31,
    name: "Paneer Momo's (Steamed)",
    price: 100,
    category: "Momo's",
    emoji: "🥟",
    description: "Filled with spiced cottage cheese",
  },
  {
    id: 32,
    name: "Veg Momo's (Kurkure)",
    price: 110,
    category: "Momo's",
    emoji: "🥟",
    description: "Crunchy double-crusted fried momos",
  },
  {
    id: 33,
    name: "Veg Chilly Momo's",
    price: 120,
    category: "Momo's",
    emoji: "🥟",
    description: "Tossed in fiery Indo-Chinese chilli sauce",
  },
  {
    id: 34,
    name: "Paneer Chilly Momo's",
    price: 130,
    category: "Momo's",
    emoji: "🥟",
    description: "Tossed in fiery Indo-Chinese chilli sauce",
  },
  {
    id: 35,
    name: "Paneer Momo's (Kurkure)",
    price: 140,
    category: "Momo's",
    emoji: "🥟",
    description: "Crunchy double-crusted fried momos",
  },
  {
    id: 36,
    name: "Chicken Momo's (Steamed)",
    price: 120,
    category: "Momo's",
    emoji: "🥟",
    description: "Juicy minced chicken steamed to perfection",
  },
  {
    id: 37,
    name: "Chicken Momo's (Fried)",
    price: 130,
    category: "Momo's",
    emoji: "🥟",
    description: "Golden crispy minced chicken momos",
  },
  {
    id: 38,
    name: "Chicken Momo's (Kurkure)",
    price: 140,
    category: "Momo's",
    emoji: "🥟",
    description: "Crunchy double-crusted fried momos",
  },
  {
    id: 39,
    name: "Chicken Momo's (Chilly)",
    price: 150,
    category: "Momo's",
    emoji: "🥟",
    description: "Tossed in fiery Indo-Chinese chilli sauce",
  },

  // ================= PASTA =================

  {
    id: 40,
    name: "White Sauce Penne Pasta",
    price: 175,
    category: "Italian Pasta",
    emoji: "🍝",
    description: "Rich & creamy parmesan sauce with herbs",
  },
  {
    id: 41,
    name: "Red Sauce Penne Pasta",
    price: 165,
    category: "Italian Pasta",
    emoji: "🍝",
    description: "Tangy tomato basil garlic sauce",
  },
  {
    id: 42,
    name: "White Sauce Chicken Pasta",
    price: 200,
    category: "Italian Pasta",
    emoji: "🍝",
    description: "Creamy penne tossed with chicken pieces",
  },

  // ================= SOUPS =================

  {
    id: 43,
    name: "Veg Hot & Sour Soup",
    price: 120,
    category: "Soups",
    emoji: "🍲",
    description: "Classic tangy pepper vegetable broth",
  },
  {
    id: 44,
    name: "Veg Manchow Soup",
    price: 120,
    category: "Soups",
    emoji: "🍲",
    description: "Spicy Indo-Chinese soup with crispy noodles",
  },
  {
    id: 45,
    name: "Cream of Tomato Soup",
    price: 120,
    category: "Soups",
    emoji: "🍲",
    description: "Silky smooth fresh tomato soup with croutons",
  },
  {
    id: 46,
    name: "Chicken Hot & Sour Soup",
    price: 150,
    category: "Soups",
    emoji: "🍲",
    description: "Zesty chicken broth infused with chilli-vinegar",
  },
  {
    id: 47,
    name: "Chicken Manchow Soup",
    price: 160,
    category: "Soups",
    emoji: "🍲",
    description: "Hearty chicken soup topped with fried noodles",
  },

  // ================= NOODLES / RICE =================

  {
    id: 48,
    name: "Veg Noodles",
    price: 100,
    category: "Noodles / Rice",
    emoji: "🍜",
    description: "House specialty tossed in wok",
  },
  {
    id: 49,
    name: "Hakka Noodles",
    price: 120,
    category: "Noodles / Rice",
    emoji: "🍜",
    description: "House specialty tossed in wok",
  },
  {
    id: 50,
    name: "Chilly Garlic Noodles",
    price: 130,
    category: "Noodles / Rice",
    emoji: "🍜",
    description: "House specialty tossed in wok",
  },
  {
    id: 51,
    name: "Egg Noodles",
    price: 140,
    category: "Noodles / Rice",
    emoji: "🍜",
    description: "House specialty tossed in wok",
  },
  {
    id: 52,
    name: "Chicken Noodles",
    price: 180,
    category: "Noodles / Rice",
    emoji: "🍜",
    description: "House specialty tossed in wok",
  },
  {
    id: 53,
    name: "Steamed Rice",
    price: 100,
    category: "Noodles / Rice",
    emoji: "🍚",
    description: "House specialty tossed in wok",
  },
  {
    id: 54,
    name: "Veg Fried Rice",
    price: 120,
    category: "Noodles / Rice",
    emoji: "🍚",
    description: "House specialty tossed in wok",
  },
  {
    id: 55,
    name: "Schezwan Fried Rice",
    price: 130,
    category: "Noodles / Rice",
    emoji: "🍚",
    description: "House specialty tossed in wok",
  },
  {
    id: 56,
    name: "Egg Fried Rice",
    price: 140,
    category: "Noodles / Rice",
    emoji: "🍚",
    description: "House specialty tossed in wok",
  },
  {
    id: 57,
    name: "Paneer Fried Rice",
    price: 150,
    category: "Noodles / Rice",
    emoji: "🍚",
    description: "House specialty tossed in wok",
  },

  // ================= CHINESE =================

  {
    id: 58,
    name: "Veg Manchurian (Dry)",
    price: 130,
    category: "Chinese Starters",
    emoji: "🥢",
    description: "House specialty tossed in wok",
  },
  {
    id: 59,
    name: "Veg Manchurian (Gravy)",
    price: 140,
    category: "Chinese Starters",
    emoji: "🥢",
    description: "House specialty tossed in wok",
  },
  {
    id: 60,
    name: "Crispy Veg",
    price: 150,
    category: "Chinese Starters",
    emoji: "🥢",
    description: "House specialty tossed in wok",
  },
  {
    id: 61,
    name: "Honey Chilly Potato",
    price: 160,
    category: "Chinese Starters",
    emoji: "🥔",
    description: "House specialty tossed in wok",
  },
  {
    id: 62,
    name: "Paneer Manchurian (Dry)",
    price: 160,
    category: "Chinese Starters",
    emoji: "🥢",
    description: "House specialty tossed in wok",
  },
  {
    id: 63,
    name: "Paneer Manchurian (Gravy)",
    price: 170,
    category: "Chinese Starters",
    emoji: "🥢",
    description: "House specialty tossed in wok",
  },
  {
    id: 64,
    name: "Chilly Mushroom",
    price: 180,
    category: "Chinese Starters",
    emoji: "🍄",
    description: "House specialty tossed in wok",
  },
  {
    id: 65,
    name: "Chilly Paneer",
    price: 200,
    category: "Chinese Starters",
    emoji: "🧀",
    description: "House specialty tossed in wok",
  },
  {
    id: 66,
    name: "Chicken Manchurian (Dry)",
    price: 210,
    category: "Chinese Starters",
    emoji: "🍗",
    description: "House specialty tossed in wok",
  },
  {
    id: 67,
    name: "Chicken Manchurian (Gravy)",
    price: 220,
    category: "Chinese Starters",
    emoji: "🍗",
    description: "House specialty tossed in wok",
  },
  {
    id: 68,
    name: "Black Pepper Chicken",
    price: 180,
    category: "Chinese Starters",
    emoji: "🍗",
    description: "House specialty tossed in wok",
  },
  {
    id: 69,
    name: "Chilly Chicken",
    price: 200,
    category: "Chinese Starters",
    emoji: "🍗",
    description: "House specialty tossed in wok",
  },
  {
    id: 70,
    name: "Chicken 65",
    price: 220,
    category: "Chinese Starters",
    emoji: "🍗",
    description: "House specialty tossed in wok",
  },

  // ================= ROTI =================

  {
    id: 71,
    name: "Plain Tawa Roti",
    price: 15,
    category: "Roti",
    emoji: "🫓",
    description: "Freshly prepared tawa roti",
  },
  {
    id: 72,
    name: "Butter Tawa Roti",
    price: 20,
    category: "Roti",
    emoji: "🫓",
    description: "Fresh tawa roti with butter",
  },

  // ================= PARATHA =================

  {
    id: 73,
    name: "Plain Paratha",
    price: 40,
    category: "Paratha",
    emoji: "🫓",
    description: "Flaky Indian flatbread",
  },
  {
    id: 74,
    name: "Aloo Paratha",
    price: 70,
    category: "Paratha",
    emoji: "🫓",
    description: "Stuffed potato paratha",
  },
  {
    id: 75,
    name: "Aloo Pyaz Paratha",
    price: 80,
    category: "Paratha",
    emoji: "🫓",
    description: "Potato and onion stuffed paratha",
  },
  {
    id: 76,
    name: "Paneer Paratha",
    price: 90,
    category: "Paratha",
    emoji: "🫓",
    description: "Stuffed paneer paratha",
  },
  {
    id: 77,
    name: "Paneer Onion Paratha",
    price: 100,
    category: "Paratha",
    emoji: "🫓",
    description: "Paneer and onion stuffed paratha",
  },

  // ================= TEA / BEVERAGES =================

  {
    id: 78,
    name: "Special Masala Tea",
    price: 30,
    category: "Tea / Beverages",
    emoji: "☕",
    description: "Aromatic Indian spice tea",
  },
  {
    id: 79,
    name: "Lemon Tea",
    price: 40,
    category: "Tea / Beverages",
    emoji: "🍋",
    description: "Refreshing lemon-infused warm tea",
  },
  {
    id: 80,
    name: "Iced Tea",
    price: 60,
    category: "Tea / Beverages",
    emoji: "🧊",
    description: "Cool chilled peach & lemon tea",
  },
  {
    id: 81,
    name: "Hot Coffee",
    price: 50,
    category: "Tea / Beverages",
    emoji: "☕",
    description: "Rich freshly brewed hot coffee",
  },
  {
    id: 82,
    name: "Cold Coffee",
    price: 80,
    category: "Tea / Beverages",
    emoji: "🥤",
    description: "Chilled blended coffee with chocolate",
  },
  {
    id: 83,
    name: "Soft Drink / Mineral Water",
    price: 0,
    category: "Tea / Beverages",
    emoji: "🥤",
    description: "Price as per MRP",
  },

];


/* =========================================================
   APP
   ========================================================= */

function App() {

  const [selectedFood, setSelectedFood] = useState(menuItems[14]);

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


  /* =======================================================
     CATEGORIES
     ======================================================= */

  const categories = [
    "All",
    "Sandwiches",
    "Pakodas / Snacks",
    "Burgers",
    "Wraps N Spring Rolls",
    "Momo's",
    "Italian Pasta",
    "Soups",
    "Noodles / Rice",
    "Chinese Starters",
    "Roti",
    "Paratha",
    "Tea / Beverages",
  ];


  /* =======================================================
     FILTER MENU
     ======================================================= */

  const filteredItems = menuItems.filter((item) => {

    const categoryMatch =
      activeCategory === "All" ||
      item.category === activeCategory;

    const searchMatch =
      item.name
        .toLowerCase()
        .includes(search.toLowerCase());

    return categoryMatch && searchMatch;

  });


  /* =======================================================
     ADD TO CART
     ======================================================= */

  const addToCart = (item) => {

    // Hero item change
    setSelectedFood(item);

    setCart((currentCart) => {

      const existingItem = currentCart.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {

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


  /* =======================================================
     REMOVE / DECREASE
     ======================================================= */

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


  /* =======================================================
     INCREASE
     ======================================================= */

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


  /* =======================================================
     CART TOTAL
     ======================================================= */

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );


  /* =======================================================
     WHATSAPP ORDER
     ======================================================= */

  const sendWhatsAppOrder = () => {

    if (cart.length === 0) {
      alert("Please add something to your cart first.");
      return;
    }

    if (!customer.name || !customer.room || !customer.phone) {

      alert(
        "Please enter your name, room/location and phone number."
      );

      return;
    }


    let message =
      `🍽️ *JONNIE'S KAMPUS KITCHEN*\n\n`;

    message += `*NEW ORDER* 🛒\n`;
    message += `━━━━━━━━━━━━━━\n\n`;


    cart.forEach((item) => {

      message +=
        `• ${item.name} × ${item.quantity} = ₹${
          item.price * item.quantity
        }\n`;

    });


    message += `\n━━━━━━━━━━━━━━\n`;

    message += `*TOTAL: ₹${cartTotal}*\n\n`;

    message += `👤 *Customer Details*\n`;

    message += `Name: ${customer.name}\n`;

    message += `Room / Location: ${customer.room}\n`;

    message += `Phone: ${customer.phone}\n`;


    if (customer.note) {

      message +=
        `Note: ${customer.note}\n`;

    }


    message +=
      `\nPlease confirm my order. 🙏`;


    const whatsappNumber =
      "919149456316";


    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        message
      )}`;


    window.open(
      whatsappURL,
      "_blank"
    );

  };


  /* =======================================================
     JSX
     ======================================================= */

  return (

    <div className="app">


      {/* ===================================================
          HEADER
      =================================================== */}

      <header className="header">

        <div className="brand">

          <div className="brand-logo">
            🍴
          </div>

          <div>

            <h1>
              JONNIE'S
            </h1>

            <span>
              KAMPUS KITCHEN
            </span>

          </div>

        </div>


        <button
          className="cart-button"
          onClick={() => setCartOpen(true)}
        >

          🛒 Cart

          {cartCount > 0 && (
            <span>
              {cartCount}
            </span>
          )}

        </button>

      </header>



      {/* ===================================================
          HERO
      =================================================== */}

      <section className="hero">


        <div className="hero-content">

          <div className="hero-small">
            JONNIE'S KAMPUS KITCHEN
          </div>


          <h2>

            Good Food.

            <br />

            <span>
              Good Vibes.
            </span>

          </h2>


          <p className="hero-text">

            Fresh, tasty & affordable food
            made for the NIT Srinagar campus.

          </p>


          <button
            className="hero-button"
            onClick={() =>
              document
                .getElementById("menu")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
          >

            Explore Menu ↓

          </button>

        </div>



        {/* SELECTED FOOD */}

        <div className="hero-food-container">

          <div className="hero-food">

            <div className="hero-food-image">

              {selectedFood.image ? (

                <img
                  src={selectedFood.image}
                  alt={selectedFood.name}
                />

              ) : (

                <span>
                  {selectedFood.emoji}
                </span>

              )}

            </div>

          </div>


          <div className="selected-food-info">

            <span>
              {selectedFood.category}
            </span>

            <h3>
              {selectedFood.name}
            </h3>

            <strong>
              ₹{selectedFood.price}
            </strong>

          </div>

        </div>

      </section>



      {/* ===================================================
          MENU
      =================================================== */}

      <section
        className="menu-section"
        id="menu"
      >


        <div className="section-heading">

          <p>
            WHAT'S COOKING?
          </p>

          <h2>
            Our <span>Menu</span>
          </h2>

        </div>



        {/* SEARCH */}

        <div className="search-box">

          <span>
            🔍
          </span>

          <input
            type="text"
            placeholder="Search for food..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>



        {/* CATEGORIES */}

        <div className="categories">

          {categories.map((category) => (

            <button
              key={category}
              className={`category ${
                activeCategory === category
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setActiveCategory(category)
              }
            >

              {category}

            </button>

          ))}

        </div>



        {/* FOOD GRID */}

        {filteredItems.length > 0 ? (

          <div className="food-grid">

            {filteredItems.map((item) => (

              <div
                className="food-card"
                key={item.id}
              >


                {/* IMAGE */}

                <div className="food-image">

                  {item.image ? (

                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />

                  ) : (

                    item.emoji

                  )}

                </div>


                {/* INFO */}

                <div className="food-info">


                  <div className="food-top">

                    <span className="food-category">
                      {item.category}
                    </span>

                  </div>


                  <h3>
                    {item.name}
                  </h3>


                  <p>
                    {item.description}
                  </p>


                  <div className="food-bottom">

                    <strong>
                      {item.price === 0
                        ? "MRP"
                        : `₹${item.price}`}
                    </strong>


                    <button
                      onClick={() => {
                        addToCart(item);
                      }}
                    >

                      + Add

                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        ) : (

          <div className="no-results">

            <div>
              🔍
            </div>

            <h3>
              No food found
            </h3>

            <p>
              Try another search or category.
            </p>

          </div>

        )}

      </section>



      {/* ===================================================
          CHECKOUT
      =================================================== */}

      <section className="checkout-section">

        <div className="section-heading">

          <p>
            READY TO ORDER?
          </p>

          <h2>
            Checkout
          </h2>

        </div>


        <div className="checkout-card">


          {/* ORDER SUMMARY */}

          <div className="checkout-summary">

            <h3>
              Your Order
            </h3>


            {cart.length === 0 ? (

              <p className="no-items">
                Your cart is empty.
              </p>

            ) : (

              <>

                {cart.map((item) => (

                  <div
                    className="summary-item"
                    key={item.id}
                  >

                    <span>
                      {item.name} × {item.quantity}
                    </span>

                    <strong>
                      ₹{item.price * item.quantity}
                    </strong>

                  </div>

                ))}


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

            <h3>
              Delivery Details
            </h3>


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
              placeholder="Enter phone number"
              value={customer.phone}
              onChange={(e) =>
                setCustomer({
                  ...customer,
                  phone: e.target.value,
                })
              }
            />


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
            />


            <button
              className="whatsapp-button"
              onClick={sendWhatsAppOrder}
            >

              🟢 Send Order on WhatsApp

            </button>


            <p className="whatsapp-note">

              Your order will open in WhatsApp
              for confirmation.

            </p>

          </div>

        </div>

      </section>



      {/* ===================================================
          CART DRAWER
      =================================================== */}

      {cartOpen && (

        <div
          className="cart-overlay"
          onClick={() => setCartOpen(false)}
        >


          <div
            className="cart-drawer"
            onClick={(e) =>
              e.stopPropagation()
            }
          >


            <div className="cart-header">

              <div>

                <p>
                  YOUR ORDER
                </p>

                <h2>
                  Cart
                </h2>

              </div>


              <button
                className="close-button"
                onClick={() =>
                  setCartOpen(false)
                }
              >

                ✕

              </button>

            </div>



            {cart.length === 0 ? (

              <div className="empty-cart">

                <div>
                  🛒
                </div>

                <h3>
                  Your cart is empty
                </h3>

                <p>
                  Add some delicious food!
                </p>

                <button
                  onClick={() =>
                    setCartOpen(false)
                  }
                >
                  Explore Menu
                </button>

              </div>

            ) : (

              <>


                {/* CART ITEMS */}

                <div className="cart-items">

                  {cart.map((item) => (

                    <div
                      className="cart-item"
                      key={item.id}
                    >


                      <div className="cart-item-image">

                        {item.emoji}

                      </div>


                      <div className="cart-item-info">

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



                {/* TOTAL */}

                <div className="cart-total">

                  <div>

                    <span>
                      Items
                    </span>

                    <span>
                      {cartCount}
                    </span>

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
                  className="checkout-button"
                  onClick={() => {

                    setCartOpen(false);

                    setTimeout(() => {

                      document
                        .querySelector(
                          ".checkout-section"
                        )
                        ?.scrollIntoView({
                          behavior: "smooth",
                        });

                    }, 100);

                  }}
                >

                  Proceed to Checkout →

                </button>

              </>

            )}

          </div>

        </div>

      )}



      {/* ===================================================
          FOOTER
      =================================================== */}

      <footer>

        <h2>
          JONNIE'S KAMPUS KITCHEN
        </h2>

        <p>
          Fresh, tasty & affordable food
          for the NIT Srinagar campus.
        </p>

        <p className="footer-contact">
          📍 Opposite JK Bank, Next to NIT Entrance Road
          <br />
          Nigeen Bagh, Hazratbal
        </p>

        <p>
          📞 855884472
          <br />
          📞 9373449641
        </p>

        <small>
          © 2026 Jonnie's Kampus Kitchen.
          All rights reserved.
        </small>

      </footer>

    </div>

  );

}

export default App;