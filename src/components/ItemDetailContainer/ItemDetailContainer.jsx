import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch("/data/products.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Not found");
                }
                return response.json();
            })
            .then((data) => {
                const found = data.find((item) => item.id === id);
                if (found) {
                    setDetail(found);
                }
                else{
                     throw new Error("Not found");
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id])

    return (
        <main>
            {Object.keys(detail).length ? (
                <ItemDetail detail={detail} />
            ) : (
                <p>Loading...</p>
            )}
        </main>
    )
}