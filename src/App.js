import React, { Component } from "react";
import './App.css'
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
  Router
} from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";
import SeminaryContainer from "./components/Seminary/SeminaryContainer.jsx";
import Services from "./components/Services/Services.jsx";
import BlogContainer from "./components/Blog/BlogContainer.jsx";
import EachBlog from "./components/Blog/EachBlog/EachBlog.jsx";
import Question from "./components/Question/Question.jsx";
import Contact from "./components/Contact/Contact.jsx";
import ButtonQuestion from "./components/ButtonQuestion/ButtonQuestion.jsx";
import SeminaryInformation from "./components/Seminary/SeminaryInformation/SeminaryInformation.jsx";


export default function App(){
    return (
        <BrowserRouter>
           
            <main>
            <Header/>
            <ButtonQuestion/>
            <Route exact path='/' component={Home}/>
            <Route exact path='/seminary' component={SeminaryContainer}/>
            <Route exact path='/seminary/:id' component={SeminaryInformation}/>
            <Route exact path='/uslugi/sostavlenie-menyu' component={Services}/>
            <Route exact path='/blog/novosti-dietologii' component={BlogContainer}/>
            <Route path='/blog/novosti-dietologii/:_id' component={EachBlog}/>
            <Route path='/o-nas/faq' component={Question}/>
            <Route path='/o-nas/contact' component={Contact}/>
            </main>
            <Footer/>
           
        </BrowserRouter>
    );
}
