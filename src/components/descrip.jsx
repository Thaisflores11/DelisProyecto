import React from "react"
import {pasteles} from '../assets/pasteles.js'
import "../../styles/menu.css"
function Descrip() {
    const Name1=pasteles[0].name; 
    const Precio1=pasteles[0].precio;
    const FotoP1=pasteles[0].fotoP;

    const Name2=pasteles[1].name; 
    const Precio2=pasteles[1].precio;
    const FotoP2=pasteles[1].fotoP;

    const Name3=pasteles[2].name; 
    const Precio3=pasteles[2].precio;
    const FotoP3=pasteles[2].fotoP;

    const Name4=pasteles[3].name; 
    const Precio4=pasteles[3].precio;
    const FotoP4=pasteles[3].fotoP;

    const Name5=pasteles[4].name; 
    const Precio5=pasteles[4].precio;
    const FotoP5=pasteles[4].fotoP;
    return (
        <>
        <div className="scroll-content">
                <div className="scroll-item">
                <div className="item-image"><img src={FotoP1}/></div>
                <div className="item-details">
                    <div className="item-title">{Name1}</div>
                    <div className="item-price">{Precio1}</div>
                </div>
                </div>
                
            </div>
        <div className="scroll-content">
                <div className="scroll-item">
                <div className="item-image"><img src={FotoP2}/></div>
                <div className="item-details">
                    <div className="item-title">{Name2}</div>
                    <div className="item-price">{Precio2}</div>
                </div>
                </div>
                
            </div>
            <div className="scroll-content">
                <div className="scroll-item">
                <div className="item-image"><img src={FotoP3}/></div>
                <div className="item-details">
                    <div className="item-title">{Name3}</div>
                    <div className="item-price">{Precio3}</div>
                </div>
                </div>
                
            </div>
            <div className="scroll-content">
                <div className="scroll-item">
                <div className="item-image"><img src={FotoP4}/></div>
                <div className="item-details">
                    <div className="item-title">{Name4}</div>
                    <div className="item-price">{Precio4}</div>
                </div>
                </div>
                
            </div>
            <div className="scroll-content">
                <div className="scroll-item">
                <div className="item-image"><img src={FotoP5}/></div>
                <div className="item-details">
                    <div className="item-title">{Name5}</div>
                    <div className="item-price">{Precio5}</div>
                </div>
                </div>
                
            </div>
        </>
    )
    }
export default Descrip;
