import React, {useRef, useState, useEffect} from 'react';
import { Link } from "react-router-dom";

import './EachBlog.css';

import Connection from '../Сonnection/Connection.jsx'
import {urlBack} from '../../../static'

export default function EachBlog(props){
    const data = props.location.value
    const styleImg  = {
        backgroundImage: `url(${urlBack}/${data.value.authorsImages})`
    }

    return (
        <div className='container-fluid'>
            <div className="container">
                <div className="row">
                    {/* <Connection/> */}
                    <div className="news-left">
                        <div className="hot-article">
                            <div className="hot-article_content">
                                <h2>{data.value.title}</h2>
                                <div className="hot-article_footer">
                                    <div className="hot-article_footer__date">{`${data.value.dateDay}.${data.value.dateMonth}.${data.value.dateYear} ${data.value.dateHours}:${data.value.dateMinutes}:${data.value.dateSeconds}`}</div>
                                </div>
                            </div>
                            <img src={`${urlBack}/${data.value.bigImages}`}/>
                        </div>
                        <div className="content__container-wrap">     
                            <div className="article-author">
                                <div className="article-title">Автор публикации:</div>
                                <div className="author-img"
                                     style={styleImg}
                                    >

                                </div>
                                <div className="author-content">
                                    <div className="author-content_name">{data.value.author}</div>
                                    <div className="author-content_decs">{data.value.specialization}</div>
                                </div>
                            </div>
                            {
                                    data.value.allArticles.map( (article, index) =>(
                                        
                                        <div key={index} >
                                            <div>
                                                <label>{article.article}</label> 
                                            
                                            </div>
                                            <div>
                                                {
                                                data.value.allParagraph.map( (paragraph, i)=>(
                                                    <div key={i}>
                                                        {
                                                            article.id === paragraph.idArticle ?
                                                            <div className="artirle-paragraph">
                                                                <br/>
                                                                <p className='text-in-blog'>
                                                                    {paragraph.paragraph}
                                                                </p>
                                                            </div>
                                                            :
                                                            ""
                                                        }
                                                    </div>
                                                ))
                                                }
                                            </div>
                                        </div>
                                    ))
                                }          
                             
                            </div>
                    </div>
                </div>
            </div>
        </div>

        
    )
}
