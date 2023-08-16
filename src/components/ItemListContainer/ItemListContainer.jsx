// COMPONENTS
import ItemCard from "./ItemCard/ItemCard";

import { Link } from "react-router-dom";

// CUSTOM HOOK
import useFetch from "../../hooks/useFetch";

function ItemListContainer({children}) {
    
    const products = useFetch()

    return (
        <section className="items-container" id="products">
            {children}
            <article className="items-list">
                {products.map(
                (product) => (
                        <ItemCard key={product.id} product={product}/>
                            )
                )}
            </article>
        </section>
    );
}

export default ItemListContainer