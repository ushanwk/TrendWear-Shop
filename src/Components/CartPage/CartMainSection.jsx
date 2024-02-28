import {CartRightSection} from "./CartRightSection";
import {CartLeftSection} from "./CartLeftSection";

export const CartMainSection = () => {

    return (
        <div className='w-full border-t-2 flex'>
            <CartLeftSection />
            <CartRightSection />
        </div>
    )
}
