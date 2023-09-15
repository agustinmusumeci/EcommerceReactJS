// CUSTOM HOOKS
import useFilters from "../../hooks/useFilters";

function Filter() {

    const {filters, setFilters} = useFilters()

    const handleChange = (event) => {
        setFilters(previousState => ({
            ...previousState, minPrice: event.target.value
        }))
    }

    return (
        <section className="filters">
            <div className="filter-container">
                <label htmlFor="price" className="filters-title">Min. price: </label>
                <input type="range" id="price" min="0" max="80" onChange={handleChange} className="filters-range" value={filters.minPrice}/>
                <span className="filters-minprice">{filters.minPrice}</span>
            </div>
        </section>
    );
}

export default Filter