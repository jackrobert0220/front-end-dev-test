import "./about.scss";

export default function About() {
  return (
    <div className="about">
        <div className="about__left">
            <div className="about__wrapper">
                <h1>LOREM IPSUM</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
                <a href="https://www.jackglazer.com/">
                    <h2>&gt; Lorem Ipsum</h2>
                </a>
            </div>
        </div>

        <div className="about__right">
            <img className="about__cimbers" src="./assets/img-1.jpg" alt="" />
        </div>
    </div>
  )
};
