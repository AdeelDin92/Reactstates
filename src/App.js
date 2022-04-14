
import './App.css';
import Subscribe from "./components/Subscribe.js"
import {useState} from "react"
import Searchitem from './Searchitem';



function App() {
  const [data,setData] = useState({});

  const updateData = (searchParam) => {
    setData(searchParam);
  }

  return (
    <div className="App">
      <h1 style={{color:"teal" , fontFamily:"sans-serif" , fontWeight:"bolder"}}>Welcome to Tiba Sweets</h1>
      <Subscribe />
      <Changeme />
      <Searchitem callback={updateData}/>
      <p>Name: {"name" in data ? data["name"] : "No Data"}</p> 
      <p>Price: {"price" in data ? data["price"] : "No Data"}</p> 
      <p>Type: {"type" in data ? data["type"] : "No Data"}</p> 
      <p>Brand: {"brand" in data ? data["brand"] : "No Data"}</p>  
    </div>
  );
}

function Changeme(){
  const [message, setMessage] = useState("Please click subscribe button");
  const [sub , setSubscribe] = useState("Subscribe")
  
  const updateSubscriber = () => {
    setMessage("Hit the bell icon")
    setSubscribe("Subscribed")
  } 

  return(
    <div>
      <h3>{message}</h3>
      <button onClick={updateSubscriber}>{sub}</button>      
    </div>
  )
  
}

export default App;
