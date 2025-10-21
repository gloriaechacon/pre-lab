export const Item = ({ name, price, description, imageUrl, children }) => {

    return (
        <article className="product-card">
            <img src={imageUrl} alt={name} />
            <h2 className="product-title">{name}</h2>
            <p>Price: ${price}</p>
            <p>Description: {description}</p>
            {children}
        </article>
    )
}