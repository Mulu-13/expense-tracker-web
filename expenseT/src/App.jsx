import Header from "./Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";

export default function App() {
  return (
    <main className="">
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
