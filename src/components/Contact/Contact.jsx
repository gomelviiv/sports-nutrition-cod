import React from 'react';

import './Contact.css'
import TitlePage from "../TitlePage/TitlePage.jsx"
import { YMaps, Map, Placemark } from 'react-yandex-maps'

import RightMenu from '../Question/RightMenu/RightMenu.jsx'

const mapData = {
    center: [53.87100991835236,27.65704987168884],
    zoom:14,
  };
  
  const coordinates = [
    
    [53.87100991835236,27.65704987168884]
  ];

export default function Contact(){
    return (
       <div className="contacts">
           <TitlePage 
                propsH1="Наши Контакты"
            />
           <div>
               <div className="content-contact">
                    <div className="left-content-contacts">
                        <div>
                            <h3>Адрес:</h3>
                            <p>
                                <strong>Телефон: +375 (44) 738-53-85</strong>
                            </p>
                            <p>г. Минск ул. Котовского д. 11</p>
                           
                            <p>
                                E-mail <a href="mailto:o.lapysh@mail.ru">o.lapysh@mail.ru</a>
                            </p>
                           <YMaps>
                                <Map width='99%' height='30rem' defaultState={mapData}>
                                {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
                                </Map>
                            </YMaps>  
                        </div>
                        <h2>Вы можете связаться с нами любым из представленных способов или оставив сообщение в форме ниже</h2>
                        <form id="contact_form" action="https://formspree.io/f/xwkwlkwn" method="POST" className="form_class">
                            <div className="form-contacts">
                                <div>
                                    <div>
                                        <input name="name" type="text" required="required" placeholder="Имя"/>
                                    </div>
                                    <div>
                                        <input name="phone" type="text" required="required" placeholder="Телефон"/>
                                    </div>
                                </div>
        
                                <div>
                                    <input name="email" type="email" required="required" placeholder="E-mail"/>
                                </div>
                            </div>
                            <div>
                                <textarea placeholder="Ваше сообщение..." form="contact_form" name="message"></textarea>
                            </div>
                            <div >
                                <button id="form-submit">Отправить</button>
                            </div>
                        </form>
                    </div>
                    {/* <RightMenu/>        */}
                </div>
            </div>
       </div>
    )
}