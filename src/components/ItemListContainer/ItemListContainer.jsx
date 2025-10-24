import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        fetch("/data/products.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Not found");
                }
                return response.json();
            })
            .then((data) => {
                if (categoryId) {
                    const filteredProducts = data.filter(product => product.category === categoryId);
                    setProducts(filteredProducts);
                } else {
                    setProducts(data);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [categoryId])

    const getPageTitle = () => {
        if (categoryId === 'flowers') return 'Flowers';
        if (categoryId === 'balloons') return 'Balloons';
        return 'Welcome';
    }

    return (
        <section className="item-list-container">
            <h1>{getPageTitle()}</h1>
            <ItemList list={products} />
        </section>
    )
}