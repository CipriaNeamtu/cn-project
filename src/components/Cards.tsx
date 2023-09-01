import { cardsProps } from "../utils/constants"
import Button from "./Button";
import Typography from "./Typography";

type CardsProps<T> = {
	cards: T[];
}

const Cards = <T extends cardsProps>({cards}: CardsProps<T>) => {
	return (
		<div className="cards">
			{cards.map((card, index) => (
				<div className="card" key={index}>
					<div className="image_wrapper">
						<img src={card.image}></img>
					</div>
					<div className="title">
						<Typography mode="body" family="medium_xl">{card.title}</Typography>
						<Typography mode="card" family={card.info_color}>{card.info}</Typography>
					</div>
					<Typography className="description" mode="body" family="small_l">{card.description}</Typography>
					<div className="card_buttons">
						<Button type="small_blue">{card.button_1}</Button>
						<Button type="small_blue">{card.button_2}</Button>
					</div>
				</div>
			))}
		</div>
	)
}

export default Cards;