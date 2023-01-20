import logo from "../images/reactjs-icon.png";
import "../App.css";

function Header() {
	return (
		<div className="header">
			<div className="header__title">
				<img
					src={logo}
					alt="logo"
					width="48px"
					height="48px"
					className="header__img"
				/>
				<h1 className="header__h1">ReactFacts</h1>
			</div>
			<div>
				<p className="header__description">React Course - Project 1</p>
			</div>
		</div>
	);
}

export default Header;
