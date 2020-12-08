import React, {useRef} from 'react';
import { Link } from "react-router-dom";

import Modal from 'react-modal';
import SeminarModal from "../SeminarModal/SeminarModal.jsx"

import {urlBack} from '../../../static'

import './SeminaryInformation.css';
export default function SeminaryInformation(props){
    const data = props.location.value
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }
    
    function closeModal(){
        setIsOpen(false);
    }
    return (
        <section className='seminary-information'>
            <div>
                <div className='image-plus-text-1'>
                        <p className='plus-text_heading'>
                            {data.name}
                        </p>
                        <p className='plus-text_subheading'>
                            Спикер: {data.authors}
                        </p>
                </div>
                <div className="sem-information">
                    <div className="top-inf">
                        <div className="top-inf-img"> 
                            <img src={`${urlBack}/${data.img}`} alt=""/>
                        </div>
                        <table className="table-inf">
                            {
                                data.valuesTable ? data.valuesTable.map((value, index)=>(
                                    <tr key={index}>
                                        <td>
                                            {value.valueLeft}
                                        </td>
                                        <td>
                                            {value.valueRight}
                                        </td>
                                    </tr>
                                )) : ''
                            }
                            <button onClick={openModal}>Записаться</button>
                            <Modal
                                isOpen={modalIsOpen}
                                onRequestClose={closeModal}
                                className="modal-sem"
                            >
                                <SeminarModal data={data.name} buttonClose={closeModal}/>
                                
                            </Modal>
                        </table>
                    </div>
                   
                    <h2>
                        О чем семинар
                    </h2>
                    {
                        data.allArticles  ? data.allArticles.map((value,index)=>(
                            <div className="dis-each-sem">
                                <h3 key={index}>{value.article}</h3>
                                {
                                    data.allParagraph ? data.allParagraph.filter(el=>el.idArticle==value.id).map((paragraph,i)=>(
                                        <p key={i}>{paragraph.paragraph}</p>
                                    )) : ''
                                }
                            </div>
                        )) : ''
                    }
                    <button onClick={openModal}>Записаться</button>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        className="modal-sem"
                    >
            
                        <SeminarModal data={data.name} buttonClose={closeModal}/>
                        
                    </Modal>
                </div>
            </div>
        </section>
    )
}
