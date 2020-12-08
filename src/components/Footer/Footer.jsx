import React, {useRef} from 'react';
import { Link } from "react-router-dom";

import './Footer.css';

export default function Header(){
  
    return (
       <footer className='footer'>
           <div>
                <div className='social'>
                    <a href="#"><img src="../../../../images/inst.png"/></a>
                    <a href="#"><img src="../../../../images/vk.png"/></a>
                    <a href="#"><img src="../../../../images/email.png"/></a>
                    <a href="mailto:o.lapysh@mail.ru">o.lapysh@mail.ru</a>
                </div>
                {/* <div className="hotoffer">
                    <a href="#">© Hotoffer, Все права защищены.</a>
                </div> */}
           </div>
       </footer>
    )
}
