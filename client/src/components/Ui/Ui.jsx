import OptionsMenu from "../OptionsMenu/OptionsMenu";
import CategoryMenu from "../CategoryMenu/CategoryMenu";
import ObjectMenu from "../ObjectMenu/ObjectMenu";
import "./Ui.scss"
import axios from 'axios';
import { useEffect, useState } from "react";
function Ui() {
  const [objects, setObjects] = useState([]);
  const handlerMenuClick = (name) =>{
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
          <ObjectMenu objects={objects}/>
          <OptionsMenu />
        </section> 
        </section>
       
    )
}

export default Ui;
