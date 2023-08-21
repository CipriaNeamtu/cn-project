import { mainNavProps } from "../utils/constants";

type NavProps<T> = {
	items: T[];
}

const Nav = <T extends mainNavProps>({ items } : NavProps<T>) => {
	const goToHomePage = (item: T) => {
		console.log('%cCN', `font-weight: 900; background-color: #06856F; color: #FFFFFF; padding: 5px 15px; border-radius: 4px;`, ' ~ file: Nav.tsx:11 ~ goToHomePage ~ goToHomePage:', 'Page info:', item);
	}
	
	return (
		<div className="nav_component">
			<div className="nav_buttons">
				{items.map((item, index) => {
					return (
						<div className="nav_button" key={index} onClick={() => goToHomePage(item)}>{item.name}</div>
					)
				})}
			</div>
		</div>
	)
}

export default Nav;