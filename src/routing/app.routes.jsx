import { Routes, Route } from "react-router-dom";

import Home from "../page/home.jsx";
import About from "../page/about.jsx";
import Contact from "../page/contact.jsx";


export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    )
}