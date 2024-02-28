import {useSelector} from "react-redux";

export const CartRightSection = () => {

    const subTotal = useSelector((s) => s.subTotal);

    return (
        <div className='w-3/12 h-32 p-4'>

            <div className='flex gap-3 mt-3'>
                <h1 className='text-[20px] font-semibold text-gray-400 mt-[4px]'>Sub Total :</h1>
                <h1 className='text-[25px] font-semibold'>Rs. {subTotal.total}.00</h1>
            </div>

            <div className='bg-black flex items-center justify-center mt-5'>
                <h1 className='text-white py-2'>Proceed to Checkout</h1>
            </div>

        </div>
    )
}
