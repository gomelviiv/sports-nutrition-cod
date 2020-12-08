import React, {useRef, useState} from 'react';
import { Link } from "react-router-dom";


import './ButtonQuestion.css';

export default function ButtonQuestion(){
    return (
       <section className="q-button">
           <button>
                 <Link to="/o-nas/contact"> Вопрос <br/> диетологу</Link>
           </button>
       </section>
    )
}
