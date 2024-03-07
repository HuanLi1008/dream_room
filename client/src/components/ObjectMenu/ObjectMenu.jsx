import "./ObjectMenu.scss"

function ObjectMenu({objects, setUserChoice, userChoice}) {
  if(!objects.length){
    return ;
  }
  const handleChoice = (object) =>{
    const newchoice = userChoice.filter((item) => item.category !== object.category).push(object);
    setUserChoice(newchoice);
  }

  return (
    <section className="object-menu">
      {objects.map((object)=>{
        return <img className="object-menu__item" alt={object.name} src={object.image} onClick={() =>{handleChoice(object)}}></img>
      })}
      
    </section>
  );
}

export default ObjectMenu;