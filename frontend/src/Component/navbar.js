import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="register" style={{display:"none"}}> 
        Registration
      </Link>
    </nav>
  )
}