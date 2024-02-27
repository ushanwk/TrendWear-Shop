import {LeftMainSection} from "./LeftMainSection";
import {RightMainSection} from "./RightMainSection";
import {useState} from "react";
export const MainSection = () => {

    const [tabs, setTabs] = useState('TSasdaHIRT');

    return (
        <div className='w-full h-[610px] flex'>
            <LeftMainSection set={setTabs} />
            <RightMainSection tab={tabs} />
        </div>
    )
}
