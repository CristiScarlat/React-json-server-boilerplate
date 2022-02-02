import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Carusel from '../components/caruselComponent/caruselComponent';
import { getQuizData } from '../services/api';

const Home = () => {
    const [quizData, setQuizData] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const res = await getQuizData();
            if(res.status === 200)setQuizData(res.data);
            else {
                throw new Error('Something went wrong. please try again later.')
            }
        }
        try{
            fetchData()
        }
        catch(error){
            console.error(error);
        }

    }, [])

    console.log(quizData[0])

    return (
    <div>
        <Carusel />
    </div>
    )
}

export default Home;