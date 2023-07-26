
type ListProps<T> = {
	items: T[]
}

export const List = <T extends {name: string, accomplishment: string}>({ items }: ListProps<T>) => {
  return (
	<>
		<div>List of Items</div>
		{items.map((item, index) => {
			return (
				<div key={index}>
					<h2>{item.name}</h2>
					<p>{item.accomplishment}</p>
				</div>
			)
		})}
	</>
  )
}
