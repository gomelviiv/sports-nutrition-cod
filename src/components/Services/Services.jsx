import React, {useRef} from 'react';
import { Link } from "react-router-dom";

import TitlePage from "../TitlePage/TitlePage.jsx"

import './Services.css';

export default function Services(){
  
    return (
        <section className='content-holder__wrap'>
              <TitlePage 
                propsH1="Составление меню"
            />
        <div>
            <div className='image-plus-text'>
                <p className='plus-text_heading'>
                    Составление, консультация и корректировка.
                </p>
                {/* <p className='plus-text_subheading'>
                    Разработка линейки здорового питания для вашего ресторана.
                </p> */}
            </div>
            <div className='short-content'>
            <p>

            Существует множество разнообразных программ питания, среди которых программы питания для похудения, для набора мышечной массы, для сушки. Какие-то программы питания регулируют потребление воды человеком. Так или иначе, все программы питания основываются на какой-либо теории питания.
            </p>
            
            <h3>
            Состав программы питания
                
            </h3>
            <p>

            1. Цели программы, её общая характеристика, преимущества и недостатки.
            </p>
            <p>
            2. Продукты питания, которые входят в эту программу и принципы, по которым они отбирались, а также факторы, которые могут повлиять на выбор пищи.
            </p>
            <p>
            3. Предполагаемые лечебные свойства.
            </p>
            <p>

            4. Конкретное меню на день, неделю, месяц, а также многое другое.
            </p>
            <p>
            <b>

            По сути, программа питания - это практическая разработка теоретических знаний, то есть конкретная система приёма пищи.
            </b>
            </p>

            <h3>
                
                Профессиональное составление программ питания - залог успеха
            </h3>
           
           <p>
                Конечно, разработать программу питания можно и самостоятельно, однако, недостатком таких действий является то, что не учитывается индивидуальность человека - состояние его здоровья, физическая активность, образ жизни и т.д. Именно поэтому лучшим вариантом при разработке программы питания станет обращение либо к врачу-диетологу, либо к квалифицированному фитнес-тренеру. В обязанности профессионального фитнес-инструктора входит знание различных программ питания и умение составить индивидуальную программу для каждого человека.
            </p> 
        <p>
            Правильное питание является одним из главных факторов, оказывающих влияние на эффективность тренировок. Поэтому записавшись в фитнес-клуб Опен Фит, где работают профессионалы своего дела, вы сможете добиться желаемых результатов в кратчайшие сроки.
        </p>
            </div>
            <div className='image-plus-form'>
                <span>
                Каждую неделю мы шлем дайджест новостей из нашего блога
                </span>
                <span>
                Подпишитесь на нашу рассылку, чтобы получать новости по здоровому питанию
                </span>
                <form className='form-inline' action="">
                    <div>
                        <input type="email" className='form-control-field' name="" id="" placeholder="Ваша почта"/>
                        <input type="text" className='form-control-btn' name="" id="" value="Подписаться"/>
                    </div>
                </form>
            </div>
        </div>
    </section>
    )
}
