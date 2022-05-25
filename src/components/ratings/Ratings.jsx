import "./ratings.scss";
import { useState } from "react";

export default function Ratings() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
        id: 1,
        title: "John Doe 08/08/2019",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
        rating: "⭐️⭐️⭐️",
    },
    {
        id: 2,
        title: "Jane Doe 09/16/2020",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
        rating: "⭐️⭐️⭐️⭐️",
    },
    {
        id: 3,
        title: "Johnny Doe 10/23/2021",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
        rating: "⭐️⭐️⭐️⭐️",
    },
];

    const handleClick = (way) => {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) :
        setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
      };

  return (
    <div className="ratings">
        <div className="ratings__left">
            <div className="ratings__wrapper">
                <h1>LOREM IPSUM</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
                <a href="https://www.jackglazer.com/">
                    <h2>&gt; Lorem Ipsum</h2>
                </a>
            </div>
        </div>

        <div className="ratings__right">
            <div className="ratings__slider" 
            style={{ transform:`translateX(-${currentSlide * 100}vw)` }}>
            {data.map(d => (
                <div>
            <div className="ratings__container">
                    <h3>{d.title}</h3>
                    <p>{d.desc}</p>
                    <span>{d.rating}</span>
            </div></div>))}
            </div>
            <img src="assets/arrow.png" className="arrow left" alt="" onClick={() => handleClick("left")} />
        <img src="assets/arrow.png" className="arrow right" alt="" onClick={() => handleClick("right")} />
        </div>
    </div>
  )
};
