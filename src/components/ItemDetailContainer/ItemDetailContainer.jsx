function ItemDetailContainer({data}) {
    return (
        <section className="item-detail-container">
            <div>
                <img src={"../" + data.img} alt="imagen" className="detail-img"/>
                <div className="detail-body">
                    <h2 className="detail-name"> {data.name} </h2>
                    <h4 className="detail-price"> $ {data.price} </h4>
                    <p className="detail-text">{data.description}</p>
                </div>
            </div>
        </section>
    );
}

export default ItemDetailContainer