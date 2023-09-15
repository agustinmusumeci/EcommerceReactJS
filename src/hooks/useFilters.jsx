import useFetch from "./useFetch";
import { useContext} from "react";
import { FiltersContext } from "../contexts/filtersContext";

function useFilters() {

    const products = useFetch()

    const {filters, setFilters} = useContext(FiltersContext)

    const filterProducts = (products) => {
        return (products.filter(product => {
            return (
                parseInt(product.price) >= filters.minPrice && (
                filters.category === "all" || product.category === filters.category
            )
            )
        })); 
    }

    const filteredProducts = filterProducts(products)

    return {filters, filteredProducts, setFilters}
}

export default useFilters
