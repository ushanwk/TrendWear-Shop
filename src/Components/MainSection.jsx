import {LeftMainSection} from "./LeftMainSection";
import {RightMainSection} from "./RightMainSection";

export const MainSection = () => {
    return (
        <div className='w-full h-[610px] flex'>
            <LeftMainSection />
            <RightMainSection />
        </div>
    )
}
