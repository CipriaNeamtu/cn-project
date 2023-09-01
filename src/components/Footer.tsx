import Typography from "./Typography";
import Input from "./Input";
import { useState } from "react";
import Button from "./Button";
import { FOOTER_LINKS } from "../utils/constants";
import logoSmall from "../images/logo/logo-small.png";
import facebookIcon from "../images/svg/social-media/facebook.svg";
import instagramIcon from "../images/svg/social-media/instagram.svg";
import twitterIcon from "../images/svg/social-media/twitter.svg";

const Footer = () => {
	const [inputValue, setInputValue] = useState<string>('');
	
	const handleInputChange = (newValue: string) => {
		setInputValue(newValue);
	}

	const subscribe = () => {
		console.log('%cCN', `font-weight: 900; background-color: #06856F; color: #FFFFFF; padding: 5px 15px; border-radius: 4px;`, 'Subscribe User Email:', inputValue);
	}

	return (
		<div className="footer">
			<section className="subscribe">
				<Typography mode="body" family="large_s_white">Subscribe</Typography>
				<Typography className="subtitle" mode="body" family="medium_xs_white">Subscribe to get exclusive news & offer</Typography>
				<div className="action">
					<Input value={inputValue} placeholder="Email address" onChange={handleInputChange}></Input>
					<Button type="small_s_white" onClick={subscribe}>Subscribe</Button>
				</div>
			</section>

			<section className="links">
				<div className="quick_links">
					<div className="media">
						<div className="logo">
							<img src={logoSmall}></img>
							<Typography mode="body" family="medium_xl_white">Gear</Typography>
						</div>
						<div className="social_media">
							<img src={facebookIcon}></img>
							<img src={instagramIcon}></img>
							<img src={twitterIcon}></img>
						</div>
					</div>

					{FOOTER_LINKS.map((linkGroup, index) => (
						<div key={index}>
							<Typography mode="body" family="medium_mm_white">{linkGroup.title}</Typography>
							{linkGroup.links.map((link, index) => (
								<Typography key={index} mode="body" family="small_m_white">{link.link}</Typography>
							))}
						</div>
					))}
				</div>
				<div className="site_info">
					<Typography mode="body" family="small_mm_white">Made With Love By Gear All Right Reserved</Typography>
				</div>
			</section>
		</div>
	)
};

export default Footer;
