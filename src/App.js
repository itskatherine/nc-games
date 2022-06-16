import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getAllCategories } from "./utils/api";
import BurgerMenu from "./components/BurgerMenu";
import useScreenSize from "./hooks/useScreenSize";
import ReviewPage from "./components/ReviewPage";
import ErrorPage from "./components/ErrorPage";

function App() {
  const [user] = useState("jessjelly");
  const [categories, setCategories] = useState([]);
  const { isMobile } = useScreenSize();

  useEffect(() => {
    getAllCategories().then((allCategories) => {
      setCategories(allCategories);
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header user={user} />
        {!isMobile ? <NavBar categories={categories} /> : null}
        {isMobile ? <BurgerMenu categories={categories} /> : null}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reviews/categories/:category" element={<Home />} />
          <Route
            path="/reviews/:review_id"
            element={<ReviewPage user={user} />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
