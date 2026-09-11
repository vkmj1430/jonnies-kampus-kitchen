import { useState } from "react";
import "./App.css";
import heroImage from "./assets/hero.png";

const menuItems = [
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

function getDescription(item) {
  const descriptions = {
    "Sandwiches": "Freshly prepared with delicious fillings and sauces.",
    "Pakodas / Snacks": "Crispy, hot and perfect for a quick campus bite.",
    "Burgers": "Loaded, juicy and freshly assembled for you.",
    "Wraps N Spring Rolls": "Freshly prepared rolls packed with tasty fillings.",
    "Momo's": "Soft, flavourful momos served hot and fresh.",
    "Italian Pasta": "Creamy and flavourful pasta made fresh.",
    "Soups": "Warm, comforting and freshly prepared soup.",
    "Noodles / Rice": "Hot, wok-tossed and full of flavour.",
    "Chinese Starters": "Indo-Chinese favourites prepared fresh.",
    "Roti": "Freshly cooked tawa roti, served hot.",
    "Paratha": "Fresh, filling and cooked on the tawa.",
    "Tea / Beverages": "Refreshing drinks and beverages for your day.",
  };

  return descriptions[item.category] || "Freshly prepared with love.";
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

    if (!customer.name || !customer.room || !customer.phone) {
      alert(
        "Please enter your name, room/location and phone number."
      );
      return;
    }

    let message = `🍽️ *JONNIE'S KAMPUS KITCHEN*\n\n`;

    message += `*NEW ORDER* 🛒\n`;
    message += `━━━━━━━━━━━━━━━━━━\n\n`;

    cart.forEach((item) => {
      message += `• ${item.name} × ${item.quantity} = ₹${
        item.price * item.quantity
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

    message += `\nPlease confirm my order. 🙏`;

    const whatsappNumber = "919149456316";

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

        <div className="hero-content">

          <div className="hero-kicker">
            JONNIE'S KAMPUS KITCHEN
          </div>

          <h2>
            Good Food.
            <br />
            <span>Good Vibes.</span>
          </h2>

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

          <div className="hero-features">

            <div className="feature">
              <div className="feature-icon">👨‍🍳</div>
              <div>
                <strong>Fresh</strong>
                <span>Ingredients</span>
              </div>
            </div>

            <div className="feature-line"></div>

            <div className="feature">
              <div className="feature-icon">✓</div>
              <div>
                <strong>Hygienic</strong>
                <span>& Safe</span>
              </div>
            </div>

            <div className="feature-line"></div>

            <div className="feature">
              <div className="feature-icon">♡</div>
              <div>
                <strong>Made</strong>
                <span>with Love</span>
              </div>
            </div>

          </div>

        </div>


        {/* HERO IMAGE */}

        <div className="hero-visual">

          <div className="hero-image-frame">
            <img
              src={heroImage}
              alt="Jonnie's Kampus Kitchen chefs"
              className="hero-image"
            />
          </div>

          <div className="hero-sticker">
            <span>Good Food</span>
            <strong>Better Days!</strong>
          </div>

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

                  <div className="food-emoji">
                    {item.emoji}
                  </div>

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
              9149456316
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