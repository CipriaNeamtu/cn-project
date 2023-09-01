import Button from "../components/Button";
import Typography from "../components/Typography";
import gearImg from "../images/gear.png";
import InfoCards from "../components/InfoCards";
import { HOME_INFO_CARDS, HOME_CARDS } from "../utils/constants";
import Cards from "../components/Cards";
import Alert from "../components/Alert";
import { useState } from "react";

const Home = () => {
	const [showAlert, setShowAlert] = useState<boolean>(false);

	const inProgressAlert = () => {
		setShowAlert(true);
	}

	const closeInProgressAlert = () => {
		setShowAlert(false);
	}

	return (
		<div className="home">
			<section className="home_hero_wrapper">
				<div className="home_hero">
					<div className="hero_left">
						<div className="left_wrapper">
							<Typography mode="body" family="large_white">Tools for Designer, Developer, and Business Owner</Typography>
							<Typography className="description" mode="body" family="medium_s_white">Information about the latest and most popular design and developer tools around the world.</Typography>
							<Button onClick={inProgressAlert}>Explore now</Button>
						</div>
					</div>
					<div className="hero_right">
						<img src={gearImg}></img>
					</div>
				</div>

				{ showAlert ? <Alert title="In Progress..." text='This module is in progress, it will be updated soon!' onClose={closeInProgressAlert}/> : null }
			</section>

			<section className="content">
				<InfoCards cards={HOME_INFO_CARDS}></InfoCards>
				<Cards cards={HOME_CARDS}></Cards>
			</section>
		</div>
	)
}

export default Home;