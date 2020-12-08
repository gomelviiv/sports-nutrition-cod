import React, { useEffect, useState } from "react";

import Blog from './Blog.jsx'

import { getNews } from '../../fetch/fetchNews'

export default function BlogContainer(props){
    const [allArticles, setAllArticles] = useState([])

    const fetchGETNews = () =>{
        getNews().then(data => setAllArticles(data))
    }
    useEffect(()=>(
        fetchGETNews()
    ),[])
    return (
        <Blog
            allArticles={allArticles}
        />
    )
}
