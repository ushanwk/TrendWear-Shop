import Menu from "../Images/Menu.png"
import Cart from "../Images/Cart.png"

export const Header = () => {
    return (
        <header className='w-full h-20 flex justify-between'>
            <div className='flex gap-10 items-center'>
                <div className='w-20 h-full bg-black flex items-center justify-center'>
                    <img src={Menu} className='w-8'/>
                </div>

                <h1 className='text-[30px] font-bold'>TrendWear.</h1>
            </div>

            <div className='w-32 h-full bg-black flex gap-3 items-center justify-center'>
                <img src={Cart} className='w-6 h-6'/>
                <h1 className='text-white text-[12px]'><span className='font-bold text-[18px]'>2</span> in Bag</h1>
            </div>
        </header>
    )
}
