import "/styles/selectPP.css"
import React from "react"
function SelectPP() {
    return ( 
        <>
            <div className="button-container">
                <button onclick="toggleColor(1)" className="button1">Pasteles</button>
                <button onclick="toggleColor(2)" className="button2">Postres</button>
            </div> <script src="script.js"></script>
        </>
    )
}
export default SelectPP;