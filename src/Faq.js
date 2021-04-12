import './App.css';

import db from './Contfirebase.config';
import React, {useEffect, useState} from "react";

function FAQ() {
    const [answers, setAnswers] = useState([])
    const [questions, setQuestions] = useState()

    async function fetchFaqs() {
      const snapshot = await db.collection('Faq').get()
      console.log(snapshot.docs)
      snapshot.docs.map(item => {
        console.log(typeof item.data())
      })
      setAnswers(snapshot.docs)
      }

    useEffect(() => {
        fetchFaqs()
    }, [])

    return (
        <div>
            <h1 className = "title">FAQ</h1>

            <div className = "cardContainer">
               
            {answers.map(item => <div className = "card"> <h3>{item.data().Question}</h3> <p>{item.data().Answer}</p></div>)}
            
            </div>

        </div>
    );
}


export default FAQ;