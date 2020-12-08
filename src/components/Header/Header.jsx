import React, {useRef, useState} from 'react';
import { Link } from "react-router-dom";


import './Header.css';

export default function Header(){
     return (
        <header className='header' id ='header'>
            <div className='header-info' >
                
                <nav>
                    <input type="checkbox" id="checkbox-menu"/>
                    <label for="checkbox-menu">
                        <ul className="menu touch" >
                            <li className="li-logo">
                                <Link  to='/'>
                                    <img src='../../../images/new-logo.jpg'/>
                                    <label>
                                        Профессионально
                                        <br></br>
                                        о здоровом питании
                                    </label>
                                </Link>
                               
                            </li>
                            <li>
                                <Link to="/">Главная</Link>
                            </li>
                            <li>
                                <a>Обучение
                                    <span className="">
                                        <img src="../../../images/arrow-bottom.png" alt=""/>
                                    </span>
                                    <ul className="dropdown" >
                                        <li className="">
                                            <Link  to="/seminary">Семинары</Link>
                                        </li>
                                    </ul>
                                </a>
                            </li>
                            <li  >
                                <a>Услуги
                                    <span className="">
                                        <img src="../../../images/arrow-bottom.png" alt=""/>
                                    </span>
                                    <ul className="dropdown">
                                    <li>
                                        <Link 
                                        to="/uslugi/sostavlenie-menyu">Составление меню</Link>
                                    </li>
                                </ul>
                                </a>
                               
                            </li>
                            <li  >
                                <a>Блог диетолога
                                    <span className="">
                                        <img src="../../../images/arrow-bottom.png" alt=""/>
                                    </span>
                                    <ul className="dropdown">
                                        <li>
                                            <Link
                                                to="/blog/novosti-dietologii">Новости диетологии</Link>
                                        </li>
                                    </ul>
                                </a>
                             
                            </li>
                            <li  >
                                <a>О нас
                                    <span className="">
                                        <img src="../../../images/arrow-bottom.png" alt=""/>
                                    </span>
                                    <ul className="dropdown">
                                        {/* <li>
                                            <Link 
                                                onClick={()=>{setHeaderMainTitle(false);setHeaderTitle('Часто задаваемые вопросы (FAQ)')}} 
                                                to="/o-nas/faq">Вопрос-ответ</Link>
                                        </li> */}
                                        <li className="nav-second-lvl-item single">
                                            <Link
                                                to="/o-nas/contact">Контакты</Link>
                                        </li>
                                    </ul>
                                </a>
                            </li>
                            <li className="li-social">
                                <div >
                                    <a href="">+375 (44) 738-53-85</a>
                                    <div>
                                        <a href="https://www.instagram.com/dietolog_drlapysh/"><img src="../../../../images/inst.png"/></a>
                                        <a href="https://vk.com/dr_olapysh"><img src="../../../../images/vk.png"/></a>
                                        <a href="mailto:o.lapysh@mail.ru"><img src="../../../../images/email.png"/></a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <span className="toggle">☰</span>
                    </label>
                </nav>
            </div>
        </header>
    )
}
