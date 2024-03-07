import OptionsMenu from "../OptionsMenu/OptionsMenu";
import CategoryMenu from "../CategoryMenu/CategoryMenu";
import "../Ui/Ui.scss";

function Ui() {
  return (
    <>
      <section className="ui-container">
        <section className="ui-menu"></section>
      </section>
      <CategoryMenu />
      <OptionsMenu />
    </>
  );
}

export default Ui;
