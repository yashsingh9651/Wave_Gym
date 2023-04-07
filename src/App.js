import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Bg } from "./components/Bg";
import { Home } from "./Home";
import { Contact } from "./Contact";
import { Price } from "./Price";
function App() {
  return (
    <>
    <Navbar/>
    <Bg/>
    <BrowserRouter basename="/Wave_Gym">
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/contact" element={<Contact/>}/>
      <Route exact path="/price" element={<Price/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;