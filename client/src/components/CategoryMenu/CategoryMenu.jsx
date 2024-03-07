import wall_button from '../../assets/UI/wall-button.png';
import floor_button from '../../assets/UI/floor-button.png';
import window_button from '../../assets/UI/window-button.png';
import bed_button from '../../assets/UI/bed-button.png';
import rug_button from '../../assets/UI/rug-button.png';
import more_button from '../../assets/UI/more-button.png';
import "./CategoryMenu.scss";
function CategoryMenu({handlerMenuClick}) {
//Menu with object buttons

    const categories = [
        {name:'wall', image: wall_button}, 
        {name:'floor', image:floor_button},
        {name: 'bed', image: bed_button}, 
        {name: 'window', image: window_button},
        {name:'rug', image: rug_button}, 
        {name:'more', image: more_button}
        ];
    return (
        <ul className="ui-menu__categories">
            {categories.map((category) =>{
                return <li className={`ui-menu__categories-${category.name}`} onClick={() => {handlerMenuClick(category.name)}}>
                    <img src={category.image} alt={`${category.name} button`}></img>
                </li>
            })}
            
          </ul>
    )
}

export default CategoryMenu;