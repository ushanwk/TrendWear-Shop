export const UpperSection = () => {
    return (
        <div className='w-full h-40 flex'>
            <div className='w-[500px] h-full flex items-center justify-center'>
                <h1 className='text-[13px] text-gray-400'>Home > <span className='text-black'>Sneakers</span></h1>
            </div>

            <div className='w-full h-40 flex items-center'>
                <h1 className='text-[60px] font-bold text-gray-300 tracking-[2px]'>Search for Items...</h1>
            </div>
        </div>
    )
}
