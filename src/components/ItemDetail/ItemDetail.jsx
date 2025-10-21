import { Item } from "../Item/Item"

export const ItemDetail = ({ detail }) => {
    return (
        <Item {...detail}>
            <button onClick={() => addItem(detail)}>Add to Cart</button>
        </Item>
    )
}