import { People } from "../before-server/peopleList"

type ListProps<T> = {
	items: T[];
}

export const List = <T extends People>({ items }: ListProps<T>) => {
	return (
		<>
			<div>List of Items</div>
			<div>
				{items.map((item, index) => {
					return (
						<div key={index}>
							<h2>{item.name}</h2>
							<p>{item.accomplishment}</p>
							<p>{item.profession}</p>
						</div>
					)
				})}
			</div>
		</>
	)
}