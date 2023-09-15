// COMPONENTS
import ItemCard from "./ItemCard/ItemCard";

function ItemListContainer(props) {

    const children = props.children
    const isFeatured = props.isFeatured
    const data = props.data

    return (
        <section className="items-container" id="products">
            {children}
            <article className="items-list">
                {isFeatured ? 
                    data.map(
                        (product) => (
                            product.featured === "true" && <ItemCard key={product.id} product={product}/>
                            ))
                : 
                    data.map(
                    (product) => (
                            <ItemCard key={product.id} product={product}/>
                        ))
                }
                
            </article>
        </section>
    );
}

export default ItemListContainer