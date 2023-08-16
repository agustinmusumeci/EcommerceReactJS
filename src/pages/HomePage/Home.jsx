import { Slide } from "@mui/material";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import SliderContainer from "../../components/SliderContainer/SliderContainer";

function Home() {
    return (
        <main className='main'>
            <SliderContainer/>
            
            <ItemListContainer>
                <div className="items-heading">
                    <h2 className="h2">featured clothing.</h2>
                </div>
            </ItemListContainer>
        </main>
    );
}

export default Home