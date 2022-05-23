import "./welcome.scss";

export default function Welcome() {
  return (
    <div className="welcome">
        <div className="welcome__hero-image"></div>
        <div className="welcome__container">
        {/* Upper Left Logo */}
        <div className="welcome__logo">
            <img src="../../../assets/logo-white.svg" alt="" />
        </div>

        <div className="welcome__title">
          {/* make sure to use semantic tags */}
            <h2 className="welcome__title--line-one">WELCOME TO</h2>
            <h2 className="welcome__title--line-two">Rooster Grin</h2>
        </div>

        <div className="welcome__button-wrapper">
          {/* I prefer an href here. If you were linking within your site look into react-router */}
            <a
            className="welcome__button-content"
            href="https://www.jackglazer.com"
            target="_blank"
            rel="noopener noreferrer"
            >
            Button Button
            </a>
        </div>
        </div>
    </div>
    );
}