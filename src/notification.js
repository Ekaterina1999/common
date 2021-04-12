import React, {useEffect, useState} from "react";
import axios from "axios";
import './App.css';
// import styles from "./Notification.module.css";

// api: http://pposzabgu.ru/api/notifications/
function Notification() {
const [data, setData] = useState([]);

const getData = async () => {
const res = await axios.get(`/api/notifications/`)
const data = res.data;
const postData = data.map(pd =>
<div className = "card" >
<h3>{pd.title}</h3>
<h4>{pd.subtitle}</h4>
<div
dangerouslySetInnerHTML={{
__html: pd.text
}}>
</div>
</div>
)
setData(postData)
}

useEffect(() => {
getData()
}, [])

return (
<div className = "cardContainer">
{data}
</div>
)
}

export default Notification;