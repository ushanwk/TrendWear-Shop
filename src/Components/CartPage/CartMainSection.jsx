import {CartRightSection} from "./CartRightSection";
import {CartLeftSection} from "./CartLeftSection";
import {useSelector} from "react-redux";

export const CartMainSection = () => {

    const cart = useSelector((s) => s.cart);

    if(cart.length === 0){
        return (
            <div className='border-t-2 flex justify-center items-center h-96'>
                <h1 className='text-[150px] font-bold text-gray-100'>Cart is Empty...</h1>
            </div>
        )
    }

    return (
        <div className='w-full border-t-2 border-b-2 flex'>
            <CartLeftSection />
            <CartRightSection />
        </div>
    )
}
