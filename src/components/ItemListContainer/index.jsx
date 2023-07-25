import "./styles.css"

function ItemListContainer(props) {

    return (
        <section className="item-list-container">
            <div className="item-list-container-heading">
                <h2 className="h2">{props.greeting}</h2>
            </div>
        </section>
        
    );
}

export default ItemListContainer