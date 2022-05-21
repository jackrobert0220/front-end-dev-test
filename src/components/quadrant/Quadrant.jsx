import "./quadrant.scss";

export default function Quadrant() {
  return (
    <div className="quadrant">
        <div className="left">
            <div className="wrapper">
                <h1>LOREM IPSUM</h1>
                <h1>DOLOR SIT AMET</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
                <a href="https://www.jackglazer.com/">
                    <h2>&gt; Lorem Ipsum</h2>
                </a>
            </div>
        </div>
        <div className="right">
            <div className="quadOne">
            <a href="https://www.jackglazer.com" target="_blank" rel="noreferrer">
              <div className="circle">
                <img className="linkImage" src="./assets/home-expertise.svg" alt=""/>
              </div></a>
              <h1>LOREM</h1>
            </div>

            <div className="quadTwo">
              <div className="circle">
                <img className="linkImage" src="./assets/home-hygiene.svg" alt=""/>
              </div>
              <h1>LOREM IPSUM</h1>
            </div>

            <div className="quadThree">
              <div className="circle">
                <img className="linkImage" src="./assets/home-lab.svg" alt=""/>
              </div>
              <h1>LOREM IPSUM</h1>
            </div>

            <div className="quadFour">
              <div className="circle">
                <img className="linkImage" src="./assets/home-retention.svg" alt=""/>
              </div>
              <h1>LOREM</h1>
            </div>
          
        </div>

    </div>
  )
}
