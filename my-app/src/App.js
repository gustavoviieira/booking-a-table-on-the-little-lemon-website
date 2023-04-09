import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Booking from "./components/Booking";
import BookingConfirmation from "./components/BookingConfirmation";
import { useFormContext } from "./components/FormContext";
import "./App.css";

function App() {
  const { form } = useFormContext();

  const formProps = {
    name: form.name,
    date: form.date,
    time: form.time,
    guests: form.numberOfGuests,
    occasion: form.occasion,
    table: form.tablePreference,
    request: form.message,
  };

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route
          path="/booking-confirmation"
          element={<BookingConfirmation {...formProps} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;