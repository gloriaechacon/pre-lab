import { Link } from "react-router-dom"

export const Nav = () => {
  return (
    <nav>
        <ul>
            <li>
              <Link to={"/"}>Home</Link>
              </li>
            <li>
              <Link>About</Link>
              </li>
            <li>
              <Link to={"/category/flowers"}>Flowers</Link>
            </li>
            <li>
              <Link to={"/category/balloons"}>Balloons</Link>
              </li>
            <li>
              <Link>Contact</Link>
            </li>
        </ul>
    </nav>
  )
}