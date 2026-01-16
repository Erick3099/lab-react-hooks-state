import { useState } from "react";
import ProductList from "./components/ProductList";
import DarkModeToggle from "./components/DarkModeToggle";
import Cart from "./components/Cart";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("All");

  function handleAddToCart(product) {
    setCart([...cart, product]);
  }

  return (
    <div className={darkMode ? "dark" : "light"}>
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

     <select
  value={category}
  onChange={(e) => setCategory(e.target.value)}
  data-testid="category-filter"
>
  <option value="All">All</option>
  <option value="Dairy">Dairy</option>
  <option value="Fruits">Fruits</option>
</select>


      <ProductList
        category={category}
        onAddToCart={handleAddToCart}
      />

      <Cart cart={cart} />
    </div>
  );
}

export default App;

