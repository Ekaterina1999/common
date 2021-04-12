
import './App.css';
import React, {useEffect, useState} from "react";
import db from './Contfirebase.config';


function ABOUT() {
  const [answers, setAnswers] = useState([])
  

  async function fetchFaqs() {
    const snapshot = await db.collection('About').get()
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
         
             
          {answers.map(item => <div className = "card"> <h3>{item.data().Title}</h3> <p>{item.data().Text}</p></div>)}
          
        
      </div>
  );
}

export default ABOUT;