function Ui() {

    return (
        <section className="ui-menu">
          <CategoryMenu />
        <section className="ui-menu__options">
          <div className="ui-menu__options-start"></div>
          <div className="ui-menu__options-end"></div>
          <div className="ui-menu__options-reset"></div>
          <div className="ui-menu__options-download"></div>
        </section>
      </section>
    )
}

export default Ui;