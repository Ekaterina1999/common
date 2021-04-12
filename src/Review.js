import './App.css';
import db from './firebase.config';
import React, {useEffect, useState} from "react";

function REVIEW() {
    const [review, setReview] = useState([])
    const [namereview, setNamereview] = useState()

    async function fetchFaqs() {
      const snapshot = await db.collection('Review').get()
      console.log(snapshot.docs)
      snapshot.docs.map(item => {
        console.log(typeof item.data())
      })
      setReview(snapshot.docs)
      }

    useEffect(() => {
        fetchFaqs()
    }, [])

    return (
        <div>
            <h1 className = "title">Отзывы</h1>

            <div className = "cardContainer">
               
            {review.map(item => <div className = "card"> <h3>{item.data().Title}</h3> <p>{item.data().Text}</p></div>)}
            
            </div>

        </div>
    );
}


export default REVIEW;