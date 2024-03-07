import OptionsMenu from "../OptionsMenu/OptionsMenu";
import CategoryMenu from "../CategoryMenu/CategoryMenu";
import ObjectMenu from "../ObjectMenu/ObjectMenu";
function Ui() {
  const handlerMenuClick = (nam) =>{

  }
    return (
        <section className="ui-menu">
          <CategoryMenu handlerMenuClick={handlerMenuClick}/>
          <ObjectMenu />
          <OptionsMenu />
        </section>
    )
}

export default Ui;
