import {LeftMainSection} from "./LeftMainSection";
import {RightMainSection} from "./RightMainSection";
import {useState} from "react";
export const MainSection = ({tabs, setTabs}) => {

    return (
        <div className='w-full h-[610px] flex items-center justify-center'>
            <LeftMainSection set={setTabs} />
            <RightMainSection tab={tabs} />
        </div>
    )
}
