import "./App.scss";

// React Routers
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages
import { Home, MealDetails, Error, Category } from "./pages/index";
import SideBar from "./components/SideBar/SideBar";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <SideBar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/meal/:id" element={<MealDetails />} />

        <Route path="/meal/category/:name" element={<Category />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
