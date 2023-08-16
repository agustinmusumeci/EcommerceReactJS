import { Link } from "react-router-dom";

// COMPONENTS
import ItemCount from "../../ItemCount/ItemCount";

function ItemCard({product}) {
    
    return (
        <div className="card">

                <Link to={`../detail/${product.name}`}>
                    <img src={product.img} className="card-img" alt={product.name}/>
                </Link>
                <div className="card-body">
                    <h5 className="card-title">{product.name} {product.category}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-price">$ {product.price}</p>
                    <ItemCount max={product.stock}/>
                </div>
        </div>
    );
}

export default ItemCard