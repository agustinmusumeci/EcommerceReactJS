import { useParams } from "react-router-dom";

// COMPONENTS
import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer";

// CUSTOM HOOK
import useFetch from "../../hooks/useFetch";

function Detail() {

    let { name } = useParams();

    const products = useFetch()

    return (
        <>
            {products.map(
                (product) => (
                    name == product.name ? <ItemDetailContainer key={product.id} data={product}/> : console.log("a")
                )
            )}
        </>
    );
}

export default Detail