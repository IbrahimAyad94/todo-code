import React from 'react'
import style from  './Footer.module.css'
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";

const footer =  () => {
    return (
        <div className={style.Footer}>
            <div className={style.FooterItem}>
            ©Ibrahim Shehta 2021
            </div>
            <div className={style.FooterItem}>
                <ul>
                    <li>
                        <a href="https://www.facebook.com/i.ayad66" target="_blanck">
                             <FaFacebookSquare 
                                size="25"
                                className={style.facebook}
                                /> 
                        </a>
                    </li>
                    <li>
                        <a href="https://google.com" target="_blanck"> 
                            <FaTwitterSquare 
                            color="" 
                            size="25"
                            className={style.twitter}
                            /> 
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/ibrahim-shehta-509ab7124/" target="_blanck"> 
                            <FaLinkedin 
                            color="" 
                            size="25"
                            className={style.linkedin}
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}


export default footer;