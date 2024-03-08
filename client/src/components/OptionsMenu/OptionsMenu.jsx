import { useState } from "react";
import start_button from "../../assets/UI/start-button.png";
import end_button from "../../assets/UI/end-button.png";
import reset_button from "../../assets/UI/reset-button.png";
import download_button from "../../assets/UI/download-button.png";
import "./OptionsMenu.scss"
function OptionsMenu() {
  const [start, setStart] = useState(false);
  const toggleButton = ()=>{
    setStart(!start);
  }
    return (
        <section className="ui-menu__options">
          {start && <img className="ui-menu__options-start" src={start_button} onClick={toggleButton} alt=""></img>}
          {!start && <img className="ui-menu__options-end" src={end_button} onClick={toggleButton} alt=""></img>}
          <img className="ui-menu__options-reset" src={reset_button} alt=""></img>
          <img className="ui-menu__options-download" src={download_button} alt=""></img>
        </section>
    )
}
export default OptionsMenu;