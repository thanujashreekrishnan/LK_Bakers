const ItemsCard = (props) => {
    const {itemData} = props;
    const {
        title,
        sell_price,
        rating,
        total_reviews,
        images,
        full_desc,
        ribbon,
        eggless
    } = itemData;
    return (
        <div className="items-card">
            <img
                src={images[0].src}
                alt={title}
                className="item-image"
            />

            <h3>{title}</h3>

            <h4>⭐️ {rating}</h4>

            <p>₹ {sell_price}</p>

        </div>
    )
}

export default ItemsCard;