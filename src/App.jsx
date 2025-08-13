import { BrowserRouter as Router, Link } from "react-router-dom";
import AppRouteres from "./routing/app.routes.jsx";

export default function App() {
  return(
    <Router>
      <nav className="bg-gray-800 text-white p-4 flex justify-around">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link> 
        <Link to="/contact">Contact</Link>
      </nav>
      
      <AppRouteres/>
    </Router>
  )
}

