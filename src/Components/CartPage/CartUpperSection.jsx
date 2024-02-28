export const CartUpperSection = ({tabs}) => {
    return (
        <div className='w-full h-40 flex'>
            <div className='w-[350px] h-full flex items-center'>
                <h1 className='text-[13px] text-gray-400 px-24'>Home > <span className='text-black'>Cart</span></h1>
            </div>

            <div className='h-40 flex items-center'>
                <h1 className='text-[60px] font-bold text-gray-300 tracking-[2px]'>Find your Cart Items...</h1>
            </div>
        </div>
    )
}
