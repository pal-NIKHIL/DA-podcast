import "../../index.css"
import {LeftMainSection} from "./left";
import {RightMainSection} from "./right";
export const MainSection = ()=>{
    return <div className=" container header-section flex">
        <LeftMainSection/>
        <RightMainSection/>
    </div>
}