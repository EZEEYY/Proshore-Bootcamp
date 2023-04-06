import React from "react";
import { useGlobalContext } from "../Data";

function DarkMode(){
    const {mode,modeup,Mode} = useGlobalContext()
    return(
        <div>
            <button onClick={Mode}>Mode</button>
        </div>
    )
}
export default DarkMode;