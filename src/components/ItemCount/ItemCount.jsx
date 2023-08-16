import { Unstable_NumberInput as NumberInput } from '@mui/base/Unstable_NumberInput';

function ItemCount(max) {  

    return (
        <div className='item-counter'>
            <button href="#" className="btn btn-primary">Add</button>
            <NumberInput min={0} max={parseInt(max.max)} step={1}
            slotProps={{
                incrementButton: { children: "+" },
                decrementButton: { children: "-" },
            }}
            />
        </div>
    );
}

export default ItemCount