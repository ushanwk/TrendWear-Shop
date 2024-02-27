import DownArrow from "../Images/DownArrow.png";

export const LeftMainSection = () => {
    return (
        <div className='w-[350px] h-full border-[2px]'>
            <div className='w-full h-[160px] flex-col px-16 py-14'>
                <h1 className='font-bold text-[18px] mb-1'>Sort</h1>
                <div className='w-40 justify-between items-center flex'>
                    <h1 className='text-gray-500 text-[13px]'>What's New</h1>
                    <img src={DownArrow} className='w-3 h-3 opacity-50'/>
                </div>
            </div>

            <div className='w-full h-[447px] flex-col px-16 py-14 bg-gray-100'>
                <h1 className='font-bold text-[18px] mb-5'>Item Categories</h1>

                <div className='w-full h-10 px-4 bg-white border-[1px] mb-3 flex items-center justify-between'>
                    <h1 className='text-[13px] font-semibold text-gray-500'>Sneakers</h1>
                    <img src={DownArrow} className='w-3 h-3 opacity-50 rotate-[-90deg]'/>
                </div>

                <div className='w-full h-10 px-4 bg-white border-[1px] mb-3 flex items-center justify-between'>
                    <h1 className='text-[13px] font-semibold text-gray-500'>T-shirts</h1>
                    <img src={DownArrow} className='w-3 h-3 opacity-50 rotate-[-90deg]'/>
                </div>

                <div className='w-full h-10 px-4 bg-white border-[1px] mb-3 flex items-center justify-between'>
                    <h1 className='text-[13px] font-semibold text-gray-500'>Watches</h1>
                    <img src={DownArrow} className='w-3 h-3 opacity-50 rotate-[-90deg]'/>
                </div>

            </div>
        </div>

    )
}
