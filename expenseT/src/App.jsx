import { BrowserRouter, Route, Routes } from "react-router-dom";
import Expense from "./Components/Expense";

export default function App() {
  return (
    <main className="">
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Expense />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
