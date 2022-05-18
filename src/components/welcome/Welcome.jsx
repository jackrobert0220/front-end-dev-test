import "./welcome.scss";

export default function Welcome() {
    return (
        <div className="welcome">
                {/* Upper Left Logo */}
                <div className="logo">
                    <img src="../../../assets/logo-white.svg" alt=""/>
                </div>

                <div className="title">
                    <p className="lineOne">WELCOME TO</p>      
                    <p className="lineTwo">Rooster Grin</p>
                </div>

                <div className="buttonWrap">
                    <button className="buttonOne">Button Button</button>
                </div>
        </div>
    )
};
