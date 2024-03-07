import OptionsMenu from "../OptionsMenu/OptionsMenu";
import CategoryMenu from "../CategoryMenu/CategoryMenu";
import ObjectMenu from "../ObjectMenu/ObjectMenu";
import "./Ui.scss"
import axios from 'axios';
import { useState } from "react";
function Ui({userChoice, setUserChoice}) {
  const [objects, setObjects] = useState([]);
  const handlerMenuClick = (name) =>{
    console.log("I am running");
    const api_url = 'http://localhost:8080/';
    
    const fetchdata = async()=>{
        try {
          const response = await axios.get(api_url + name);
          console.log(response.data);
          setObjects(response.data);
        } catch (error) {
          console.error(error);
        }
    }
    fetchdata();
  }
    return (
        <section className="ui-container">
            <section className="ui-menu">
          <CategoryMenu handlerMenuClick={handlerMenuClick}/>
          <ObjectMenu objects={objects} setUserChoice={setUserChoice} userChoice={userChoice}/>
          <OptionsMenu />
        </section> 
        </section>
       
    )
}

export default Ui;
