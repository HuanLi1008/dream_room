import "./ObjectMenu.scss"

function ObjectMenu({objects}) {
  if(!objects.length){
    return ;
  }
  console.log(objects);
  return (
    <section className="object-menu">
      {objects.map((object)=>{
        return <img className="object-menu__item" alt={object.name} src={object.image}></img>
      })}
      
    </section>
  );
}

export default ObjectMenu;