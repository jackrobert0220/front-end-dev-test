import "./scream.scss";

export default function Scream() {
  return (
    <div className="scream">
        <div className="wrapper">
        <h1>LOREM IPSUM</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
            <button onClick={() => {
                window.open(
        "https://www.jackglazer.com",
        "_blank");
    }}>Button Button</button>
        </div>
    </div>
  )
}
