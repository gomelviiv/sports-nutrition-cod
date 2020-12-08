import React from 'react';
import { Link } from "react-router-dom";
import TitlePage from "../TitlePage/TitlePage.jsx"


import './Home.css';

export default function Header(){
    const diplom = [
        {
            img: '../../../../images/d1.png',
            specialty: 'кинезиотерапия'
        },
        // {
        //     img: '../../../../images/d2.jpg',
        //     specialty: 'Диплом 1-й степени'
        // },
        // {
        //     img: '../../../../images/d3.jpg',
        //     specialty: 'Диплом 1-й степени'
        // },
        // {
        //     img: '../../../../images/d4.jpg',
        //     specialty: 'Диплом 1-й степени'
        // },
        // {
        //     img: '../../../../images/d5.jpg',
        //     specialty: 'Диплом 1-й степени'
        // },
    ]
    const sertif = [
        {
            img: '../../../../images/s1.png'
        },
        {
            img: '../../../../images/s2.png'
        },
        {
            img: '../../../../images/s3.jpg'
        },
        {
            img: '../../../../images/s4.jpg'
        },
 
        {
            img: '../../../../images/s6.jpg'
        },
        {
            img: '../../../../images/s7.jpg'
        },
    ]
    return (
        <section className="home">
            <TitlePage 
                propsH1="Обучение специалистов по спортивной нутрициологии и диетологии"
                ptopsP="Готовим настоящих профессионалов"
            />
            <div className='invite'>
                <div>
                    <div className='invite-teacher'>
                        <div>
                            <img src='../../../../images/IrishkinO-small.jpg'/>
                        </div>
                        <div>
                            Приглашаю Вас принять участие в сертификационном курсе. Будет интересно и познавательно.
                        </div>
                    </div>
                    <div className='invite-teacher_title'>
                        <p>
                            Курсы по подготовке специалистов в области диетологии и спортивной нутрициологии. Обучение диетологии и спортивной нутрициологии проводит доктор Ольга Лапыш.
                      
                            Этот курс будет полезен и понятен не только людям, имеющим медицинское образование! Программа курса предусматривает введение в такую интересную область, как диетология, то есть начнем с азов. 
                            Структура занятий и манера подачи материала позволят освоить профессию нутрициолога всем желающим. Главное неподдельный интерес к теме питания и желание учиться чему-то новому.
                        </p>
                    </div>
                    <div className='invite-teacher_advantage'>
                         <div>
                            <img src="../../../../images/advantage-4.png" alt=""/>
                            <div>Документы о прохождении<br/> обучения государственного<br/> образца</div>
                        </div>
                        <div>
                            <img src="../../../../images/advantage-3.png" alt=""/>
                            <div>Модульный принцип<br/> обучения</div>
                        </div>
                        <div>
                            <img src="../../../../images/advantage-2.png" alt=""/>
                            <div>Учиться можно из любой<br/> точки мира</div>
                        </div>
                        <div>
                            <img src="../../../../images/advantage-1.png" alt=""/>
                            <div>Профессиональное обучение<br/> специалистов-нутрициологов</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='whatdo'>
                <div>
                    <h1>Чем же мы занимаемся?</h1>
                    <div className="learn">
                        <div>
                            <h2>Обучаем диетологии и нутрициологии</h2>
                            <p>Программа обучения подходит для врачей-диетологов, нутрициологов и сторонников здорового образа жизни.</p>
                            <Link to="/seminary">Подробнее</Link>
                        </div>
                        <div>
                            <h2>Составляем программы питания</h2>
                            <p>Мы создаём рацион питания по результатам ваших анализов.</p>
                            <br/>
                            <Link to="/uslugi/sostavlenie-menyu">Подробнее</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='command'>
                <div>
                    <h1>Наша команда</h1>
                    <div>
                        <div className='command-leader'>
                            <div>
                                <img src='../../../../images/lead.jpg'/>
                            </div>
                            <div>
                                <span>Руководитель проекта</span>
                                <h4>Ольга Михайловна<br/> Лапыш</h4>
                                <p>
                                    Врач спортивной медицины, врач-диетолог.
                                </p>
                            </div>
                        </div>
                        <div className='other'>
                            <div className='command-other_description'>
                                <p>
                                Мы научим вас грамотно составлять сбалансированный рацион питания,а также корректировать режим приема пищи. С помощью знаний, полученных на нашем курсе, вы сможете помогать другим людям наращивать мышечную массу и уменьшать жировую.
                                </p>
                            </div>
                            <div className='advantage'>
                                    {diplom.map((value, index ) => (
                                        <div key={index}>
                                            <div className="advantage-img">
                                                <img src={value.img} alt=""/>
                                            </div>
                                            <div className="advantage-text">
                                                <span>{value.specialty}</span>
                                            </div>
                                        </div>
                                        ))
                                    }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='license'>
                <div>
                    <h1>Разрешительная документация</h1>
                    <div className="license-img">
                        {
                            sertif.map(value =>(
                                
                                    <img src={value.img} alt=""/>
                                
                            ))
                        }
                    </div>
                </div>
                
            </div> */}
        </section>
    )
}

