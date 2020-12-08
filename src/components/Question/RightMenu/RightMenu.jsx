import React from 'react';

export default function RightMenu(){
    return (
        <div className='right-content'>
                        <div className="about-menu__right">
                            <div className="about-menu__head">
                                О нас
                            </div>
                            <ul className="left-menu">
                                <li><a href="/o-nas/faq/" className="selected">Вопрос-ответ</a></li>
                                <li><a href="/o-nas/contact/">Контакты</a></li>
                            </ul>
                        </div>
                        <div className="is_stuck" id="stick-in-parent">
                            <div className="ask-form">
                                <div className="ask-form__heading">Уважаемый посетитель!</div>
                                <p className="ask-form__text">Если у Вас еще остались вопросы, можете задать их через форму обратной связи.<br/>Мы ответим на указанный e-mail.</p>
                                <form className="form_appeal_JQ" id="appeal_form" method="post" action="/ajax/form-call-me-please-handler.php">
                                    <input className="form-control" type="text" name="name" placeholder="Ваше имя *" maxlength="20" required=""/>
                                    <input className="form-control" type="email" name="email" placeholder="Ваш e-mail *" maxlength="30" required=""/>
                                    <input type="tel" name="phone" placeholder="Ваш телефон" maxlength="16"/>
                                    <textarea className="form-control" name="QUESTION" onkeyup="count_keyup()" form="appeal_form" placeholder="Опишите свой вопрос:" rows="4" cols="40" required="" maxlength="2000"></textarea>

                                    <label className="privacy-box">
                                        <input className="form-control" type="checkbox" required="" checked=""/>
                                        <p>Я согласен на обработку <a href="/privacy/" data-modal="#privacy_block" target="_blank">персональных данных</a></p>
                                    </label>
                                    <button id="form-submit" type="submit">Отправить</button>
                                    
                                    <input id="count" type="hidden" name="countme" value="0"/>
                                </form>
                            </div>
                        </div>
                    </div>
    )
}