import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import "./index.css";
import SignUp from "./pages/SignUp"; // 👈 ye import karna mat bhoolna


// Pages
import Home from "./pages/Home";
import Error from "./pages/Error";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import SignIn from "./pages/SignIn";
import Success from "./pages/Success";
import Resell from "./pages/resell"; // ✅ Added Resell page

const App = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/menu" element={<Menu />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/signIn" element={<SignIn />} />
            <Route exact path="/*" element={<Error />} />
            <Route
               exact
               path="/success"
               element={<ProtectedRoute element={<Success />} />}
            />
            <Route
               exact
               path="/resell"
               element={<ProtectedRoute element={<Resell />} />} // ✅ Added Resell route
            />
            <Route exact path="/signUp" element={<SignUp />} />

         </Routes>
      </BrowserRouter>
   );
};

export default App;