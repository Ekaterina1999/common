import "./App.css";
import db from "./Contfirebase.config";
import React, { useEffect, useState } from "react";

function CONTACTS() {
  const [aboutCt, setAboutCt] = useState([]);
  //const [NameCt, setNameCt] = useState()

  async function fetchFaqs() {
    const snapshot = await db.collection("Contacts").get();
    console.log(snapshot.docs);
    snapshot.docs.map((item) => {
      console.log(typeof item.data());
    });
    setAboutCt(snapshot.docs);
  }

  useEffect(() => {
    fetchFaqs();
  }, []);

  return (
    <div>
      <h1 className="title">Contacts</h1>

      <div className="cardContainer">
        
        {aboutCt.map((item) => (
          <div className="card">
            <h3>{item.data().NameCt}</h3> 
            <p>{item.data().AboutCt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CONTACTS;
