import { useParams } from "react-router-dom";

// COMPONENTS
import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer";

// HOOKS
import { useId } from "react";

// CUSTOM HOOK
import useFetch from "../../hooks/useFetch";


function Detail() {

    const boxId = useId()

    let { name } = useParams();

    const products = useFetch()

    return (
        <>
            {products.map(
                (product) => (
                    product.name === name
                    &&
                    <ItemDetailContainer key={product.id} data={product}/> 
            ))}
        </>
    );
}

export default Detail