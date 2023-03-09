import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import data from "./data";

import Menu from "./components/menu/Menu";
import Categories from "./components/categories/Categories";

const allCategories = ["all", ...new Set(data.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(data);
      return;
    }
    const newItems = data.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
          <Categories filterItems={filterItems} categories={categories} />
          <Menu items={menuItems} />
        </div>
      </section>
    </main>
  );
}

export default App;
