import DownArrow from "../Images/DownArrow.png";

export const LeftMainSection = () => {
    return (
        <div className='w-[350px] h-full border-[2px]'>
            <div className='w-full h-[160px] flex-col px-24 py-14'>
                <h1 className='font-bold text-[18px] mb-1'>Sort</h1>
                <div className='w-40 justify-between items-center flex'>
                    <h1 className='text-gray-500 text-[13px]'>What's New</h1>
                    <img src={DownArrow} className='w-3 h-3 opacity-50'/>
                </div>
            </div>

            <div className='w-full h-[447px] flex-col px-24 py-14 bg-gray-100'>
                <h1 className='font-bold text-[18px] mb-1'>Item Categories</h1>
            </div>
        </div>

    )
}
