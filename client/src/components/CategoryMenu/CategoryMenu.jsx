import "./CategoryMenu.scss"
function CategoryMenu() {
//Menu with object buttons
    return (
        <ul className="ui-menu__categories">
            <li className="ui-menu__categories-wall"></li>
            <li className="ui-menu__categories-floor"></li>
            <li className="ui-menu__categories-window"></li>
            <li className="ui-menu__categories-bed"></li>
            <li className="ui-menu__categories-rug"></li>
            <li className="ui-menu__categories-more"></li>
          </ul>
    )
}

export default CategoryMenu;