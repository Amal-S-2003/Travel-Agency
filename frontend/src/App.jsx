import { Route, Routes } from "react-router";
import "./App.css";
import ViewFlights from "./pages/ViewFlights";
import AddFlight from "./pages/AddFlight";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<ViewFlights/>}/>
      <Route path="/flight-add" element={<AddFlight/>} />
    </Routes>
    </>
  );
}

export default App;
