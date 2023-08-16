// CUSTOM HOOK
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import useFetch from "../../hooks/useFetch";

function Products() {

    const products = useFetch()

    return (
        <>
            <ItemListContainer/>
        </>
    );
}

export default Products