import OptionsMenu from "../OptionsMenu/OptionsMenu";
import CategoryMenu from "../CategoryMenu/CategoryMenu";
import ObjectMenu from "../ObjectMenu/ObjectMenu";
import "./Ui.scss"
function Ui() {
  const handlerMenuClick = (nam) =>{

  }
    return (
        <section className="ui-container">
            <section className="ui-menu">
          <CategoryMenu handlerMenuClick={handlerMenuClick}/>
          <ObjectMenu />
          <OptionsMenu />
        </section> 
        </section>
       
    )
}

export default Ui;
