import React, {useRef, useState} from 'react';
import { Link } from "react-router-dom";

import './TitlePage.css';

export default function TitlePage(props){
    let [titleText, setTitleText] = useState(props)
    
    return (
        <div className="title-page">
            <div>
                <h1>
                    {titleText.propsH1}
                </h1>
                <p>
                    {titleText.ptopsP ? titleText.ptopsP : ''}
                </p>
            </div>
            
        </div>
    )
}
