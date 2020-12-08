import React, {useRef, useEffect, useState} from 'react';
import { Link } from "react-router-dom";

import Modal from 'react-modal';
import './Connection.css';

import ModalPersonalData from '../ModalPersonalData/ModalPersonalData.jsx'


export default function Connection(){
    let [checkboxBlog, setCheckboxBlog] = useState(true)
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
      document.style.backgro
    }

   
    function closeModal(){
      setIsOpen(false);
    }
   
      
    return (
        <div className="col-12 col-lg-4 stick order-first order-lg-last">
            <div className="news">
                <div className="bx_sitemap">   
                    <div className="news-rubricator">
                        <div className="news-rubricator_title">Рубрикатор</div>
                        <ul id="rubricator">
                            <li className=""><a href="/blog/">Все</a></li>
                            <li><a href="/blog/poleznie-statiy/">Полезные статьи </a></li>			  
                            <li><a href="/blog/novosti-dietologii/">Новости Диетологии</a></li>			  
                            <li><a href="/blog/recepti-zdorovogo-pitaniya/">Рецепты здорового питания</a></li>			  
                        </ul>
                        <button className="news-rubricator_btn d-lg-none"><i className="fa fa-bars" aria-hidden="true"></i></button>
                    </div>
                </div>
                <div className="news-sticky sticky">
                    <div className="news-subscribe">
                        <div className="tags-title">
                            Подпишитесь на нашу рассылку!
                        </div>
                        <form className="subcribe-wrap " id="form_getresp_subscribe" action="/bitrix/tools/getresp_snta_blog.php">
                            <input name="email" className="form-control" required="" type="email" placeholder="Ваша почта"/> 
                            <label className="privacy-box"> 
                                <input className="form-control" onClick={()=>setCheckboxBlog(!checkboxBlog)} required="" type="checkbox" checked={checkboxBlog}/>
                                <p>
                                    Я согласен на обработку <a onClick={openModal} data-modal="#privacy_block" data-toggle="modal">персональных данных</a>
                                </p>
                                <Modal
                                    isOpen={modalIsOpen}
                                    onRequestClose={closeModal}
                                    // style={customStyles}    
                                    contentLabel="Example Modal"
                                    className="modalPersData"
                                >
                                    <div className="modal-head">
                                        <button onClick={closeModal}>Закрыть</button>
                                    </div>

                                    <ModalPersonalData/>
                                   
                                </Modal>
                            </label>
                            <button className="form-submit form_submit" type="submit">Подписаться</button>
                        </form>
                    </div>
                    <div className="news-subscribe">
                        <div className="tags-title">
                            У Вас есть вопрос?
                        </div>
                        <p>
                            Каждую неделю мы публикуем статьи с ответами на самые разные вопросы наших посетителей!
                        </p>
                        <a className="form-submit" href="" data-modal="#ask">Задать вопрос</a>
                    </div>
                </div>   
            </div>
        </div>
                    

        
    )
}
