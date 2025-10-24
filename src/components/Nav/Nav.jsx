import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext/useCartContext";

export const Nav = () => {
const {getTotalItems} = useCartContext();

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
            <li>
              <Link>Cart</Link>
              {getTotalItems () > 0 &&(
                <span className="in-cart">{getTotalItems()}</span>
              )}
            </li>
        </ul>
    </nav>
  )
}