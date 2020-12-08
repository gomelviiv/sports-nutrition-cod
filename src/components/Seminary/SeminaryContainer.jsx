import React, {useRef} from 'react';
import { useState, useEffect } from 'react';

import Seminary from './Seminary.jsx'
import { getSeminars } from '../../fetch/fetchSeminar'

export default function SeminaryContainer(props){
    const [allSeminars, setAllSeminars] = useState([])

    const fetchGETSeminars = () =>{
        getSeminars().then( data=>setAllSeminars(data))
    }
    useEffect(()=>(
        fetchGETSeminars()
    ),[])
    return (
        <Seminary
            allSeminars={allSeminars}
        />
    )
}
