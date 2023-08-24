import Button from "../components/Button";
import Typography from "../components/Typography";
import gearImg from "../images/gear.png";
import InfoCards from "../components/InfoCards";
import { HOME_INFO_CARDS } from "../utils/constants";

const Home = () => {
	return (
		<div className="home">
			<section className="home_hero_wrapper">
				<div className="home_hero">
					<div className="hero_left">
						<div className="left_wrapper">
							<Typography mode="body" family="large_white">Tools for Designer, Developer, and Business Owner</Typography>
							<Typography className="description" mode="body" family="medium_s_white">Information about the latest and most popular design and developer tools around the world.</Typography>
							<Button>Explore now</Button>
						</div>
					</div>
					<div className="hero_right">
						<img src={gearImg}></img>
					</div>
				</div>
			</section>

			<section className="content">
				<InfoCards cards={HOME_INFO_CARDS}></InfoCards>
			</section>
		</div>
	)
}

export default Home;