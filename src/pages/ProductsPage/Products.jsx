// COMPONENTS
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import Filter from "../../components/Filter/Filter";

// CUSTOM HOOK
import useFilters from "../../hooks/useFilters";

function Products() {

    const {filters, filteredProducts, setFilters} = useFilters()

    return (
        <>
            
            <ItemListContainer data={filteredProducts} isFeatured={false}>
                <Filter/>
            </ItemListContainer>
        </>
    );
}

export default Products