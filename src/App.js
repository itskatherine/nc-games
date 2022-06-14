import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getAllCategories } from "./utils/api";

function App() {
  const [user] = useState("jessjelly");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories().then((allCategories) => {
      setCategories(allCategories);
    });
  }, []);

  // const categoryRoutes = categories.map((category) => {
  //   return (
  //     <Route
  //       path={`reviews/category/${category}`}
  //       element={<Home categories={category} />}
  //     />
  //   );
  // });

  return (
    <BrowserRouter>
      <div className="App">
        <Header user={user} />
        <NavBar categories={categories}></NavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reviews/categories/:category" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
