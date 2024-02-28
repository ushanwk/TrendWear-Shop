import Data from "../../Data/Data";
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../../Store/Reducers/CartSlice";

export const RightMainSection = ({tab}) => {

    let index = 0;

    if(tab === 'SNEAKER'){
        index = 0;
    }else if(tab === 'TSHIRT'){
        index = 3;
    }else{
        index = 6;
    }

    const cart = useSelector((s) => s.cart);
    const dispatch = useDispatch();

    console.log(cart)

    return (
        <div className='w-[1350px] h-full border-[2px] border-l-0'>

            <div className='h-[480px] w-full flex'>
                <div className="w-[450px] h-full border-b border-r px-12 py-10">
                    <h1 className='font-bold text-[35px]'>{Data[index].brand}</h1>
                    <h1 className='font-bold text-[15px] text-gray-400'>{Data[index].model}</h1>

                    <img src={Data[index].img} className='pt-7' />

                    <div className='w-full flex justify-between pt-10'>
                        <h1 className='font-bold text-[25px]'>{Data[index].price}</h1>

                        <div className='w-32 h-10 bg-black flex justify-center items-center cursor-pointer'
                             onClick={() => dispatch(addToCart(index))
                        }
                        >
                            <h1 className='text-white'>Add to Cart</h1>
                        </div>
                    </div>
                </div>


                <div className='w-[450px] h-full border-b border-r px-12 py-10'>
                    <h1 className='font-bold text-[35px]'>{Data[(index+1)].brand}</h1>
                    <h1 className='font-bold text-[15px] text-gray-400'>{Data[(index+1)].model}</h1>

                    <img src={Data[(index+1)].img} className='pt-7 transform scale-x-[-1]'/>

                    <div className='w-full flex justify-between pt-10'>
                        <h1 className='font-bold text-[25px]'>{Data[(index+1)].price}</h1>

                        <div className='w-32 h-10 bg-black flex justify-center items-center cursor-pointer'
                             onClick={() => dispatch(addToCart(index+1))}
                        >
                            <h1 className='text-white'>Add to Cart</h1>
                        </div>
                    </div>
                </div>


                <div className='w-[450px] h-full border-b px-12 py-10'>
                    <h1 className='font-bold text-[35px]'>{Data[index+2].brand}</h1>
                    <h1 className='font-bold text-[15px] text-gray-400'>{Data[index+2].model}</h1>

                    <img src={Data[(index+2)].img} className='pt-7'/>

                    <div className='w-full flex justify-between pt-10'>
                        <h1 className='font-bold text-[25px]'>{Data[index+2].price}</h1>

                        <div className='w-32 h-10 bg-black flex justify-center items-center cursor-pointer'
                            onClick={() => dispatch(addToCart(index+2))}
                        >
                            <h1 className='text-white'>Add to Cart</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className='h-32 w-full flex'>
                <div className='w-[450px] h-full border-r'>

                </div>
                <div className='w-[450px] h-full border-r'>

                </div>
                <div className='w-[450px] h-full'>

                </div>
            </div>

        </div>
    )
}
