import {useDispatch, useSelector} from "react-redux";
import data from "../../Data/Data";
import {decrement, increment, removeFromCart} from "../../Store/Reducers/CartSlice";

export const CartLeftSection = () => {

    const cart = useSelector((s) => s.cart);
    const dispatch = useDispatch();

    if(cart.length === 0){
        return (
            <div className='w-3/12 h-32 flex flex-col justify-center items-center'>
                <h1 className='text-[30px] font-bold text-gray-400'>Cart is Empty</h1>
            </div>
        )
    }

    return (
        <div className='w-9/12 border-r-2 p-4'>

            {
                cart.map((index, count) => (

                    <div className='w-full h-32 bg-gray-100 mb-3 flex justify-between items-center p-4' key={count}>
                        <img src={data[index.number].img} className='w-[100px]'/>
                        <h1 className='font-bold'>{data[index.number].brand}</h1>
                        <h1 className='text-gray-400 text-[12px]'>{data[index.number].model}</h1>

                        <div className='flex gap-3'>
                            <div className='h-7 w-7 rounded-full bg-white flex items-center justify-center cursor-pointer border-2'
                                onClick={() => {
                                    dispatch(decrement(count))
                                }}
                            >-</div>
                            <h1>{index.count}</h1>
                            <div className='h-7 w-7 rounded-full bg-white flex items-center justify-center cursor-pointer border-2'
                                 onClick={() => {
                                     dispatch(() => {
                                         dispatch(increment(count))
                                     })
                                 }}
                            >+</div>
                        </div>

                        <h1 className='font-bold'>{data[index.number].money * index.count}</h1>

                        <div className='flex items-center justify-center bg-black cursor-pointer'
                            onClick={() => {
                               dispatch(removeFromCart(count))
                            }}
                        >
                            <h1 className='text-white px-4 py-2'>Remove</h1>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}
