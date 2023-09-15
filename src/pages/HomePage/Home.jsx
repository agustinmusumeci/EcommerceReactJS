// COMPONENTS
import { Slide } from "@mui/material";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import SliderContainer from "../../components/SliderContainer/SliderContainer";

// CUSTOM HOOK
import useFetch from "../../hooks/useFetch.js";

function Home() {

    const products  = useFetch()

    return (
        <main className='main'>
            <SliderContainer/>
            
            <ItemListContainer data={ products } isFeatured={true}>
                <div className="items-heading">
                    <h2 className="h2">featured clothing.</h2>
                </div>
            </ItemListContainer>
        </main>
    );
}

export default Home