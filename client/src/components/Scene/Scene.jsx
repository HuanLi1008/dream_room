import "./Scene.scss";
function Scene({userChoice}) {
  return (
    <section className="scene">
      
      {userChoice[0] && <img className="scene__wall" src={userChoice[0].image} alt="wall"></img>}
      {userChoice[1] && <img className="scene__floor" src={userChoice[1].image} alt="floor"></img>}
      {userChoice[2] && <img className="scene__bed" src={userChoice[2].image} alt="bed"></img>}
      {userChoice[3] && <img className="scene__window" src={userChoice[3].image} alt="window"></img>}
      {userChoice[4] && <img className="scene__rug" src={userChoice[4].image} alt="rug"></img>  }    
      {userChoice[5] && <img className="scene__more" src={userChoice[5].image} alt="more"></img>}
    </section>
  );
}

export default Scene;