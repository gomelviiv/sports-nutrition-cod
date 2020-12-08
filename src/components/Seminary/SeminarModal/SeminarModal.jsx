import React, {useRef} from 'react';
import { useState, useEffect } from 'react';

import './SeminarModal.css';

export default function SeminarModal(props){
    return (
        <form className='seminar-modal' action="https://formspree.io/f/xwkwlkwn" method="POST">
            <h2>
                Заказать обратный звонок
            </h2>
            <input type="text" name="kurs" value={props.data} readonly />
            <input type="text" name="name" placeholder="Введите ваше имя:"/>
            <input type="text" name="phone" placeholder="Введите ваш телефон:"/>
            <button>Отправить</button>
        </form>
    )
}
