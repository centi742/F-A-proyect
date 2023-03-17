import React,{useState,useEffect} from "react";
import axios from "axios";
import Cards from "./cards";
import imgp from "./../img/imagendeprueba.png"
import "../css/cardcss.css";

const NewCars = ()=>{
    // const axios = require('axios');
     const baseURL = "https://jsonplaceholder.typicode.com/users";
    // const baseURL = "https://jsonplaceholder.typicode.com/posts";
    const [data,setData] = useState([]);

    useEffect(()=>{
        axios.get(baseURL).then((response)=>{
            setData(response.data)
        }).catch((err) => {
            console.log(err);
          });
    },[]);

   
    return(
        <>
            {/* <ul> */}
               
             {data.map((item) => ( 
          <Cards key={item.id} photo={imgp} title={item.name} descrip={item.body} className="targeta"/>
      ))} 
            {/* {data.map((item) => ( */}
        {/* <li key={item.id}>{item.name}</li> */}
      {/* ))} */}
            {/* </ul> */}
        </>
    )
}

export default NewCars;