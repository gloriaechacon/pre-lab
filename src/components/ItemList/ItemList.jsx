import { Link } from "react-router-dom"
import { Item } from "../Item/Item"

export const ItemList = ({ list }) => {
    return (
       <>
       {list.length ? 
       list.map((item) => 
       <Link to={`/detail/${item.id}`} key={item.id}>
        <Item {...item} />
       </Link>
       ) : (
       <p>No products</p>
       )}
       </>
    )
}