import { mainNavProps } from "../utils/constants";
import logoSmall from "../images/logo/logo-small.png";
import LoginButton from "./Button";

type NavProps<T> = {
	items: T[];
}

const Nav = <T extends mainNavProps>({ items } : NavProps<T>) => {
	const goToHomePage = (item: T) => {
		console.log('%cCN', `font-weight: 900; background-color: #06856F; color: #FFFFFF; padding: 5px 15px; border-radius: 4px;`, ' ~ file: Nav.tsx:11 ~ goToHomePage ~ goToHomePage:', 'Page info:', item);
	}
	
	return (
		<div className="nav">
			<div className="nav_wrapper">
				<img className="logo_small" src={logoSmall}></img>
				<div className="nav_buttons">
					{items.map((item, index) => {
						return (
							<div className="nav_button" key={index} onClick={() => goToHomePage(item)}>{item.name}</div>
						)
					})}
				</div>
				<LoginButton type="small_white">Login</LoginButton>
			</div>
		</div>
	)
}

export default Nav;