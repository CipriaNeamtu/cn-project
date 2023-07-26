import { List } from "./components/List";
import Nav from "./components/Nav";

function App() {
	const myNumber = 100;
	const people = [{
		id: 0, // Used in JSX as a key
		name: 'Creola Katherine Johnson',
		profession: 'mathematician',
		accomplishment: 'spaceflight calculations',
		imageId: 'MK3eW3A'
		}, {
		id: 1, // Used in JSX as a key
		name: 'Mario José Molina-Pasquel Henríquez',
		profession: 'chemist',
		accomplishment: 'discovery of Arctic ozone hole',
		imageId: 'mynHUSa'
		}, {
		id: 2, // Used in JSX as a key
		name: 'Mohammad Abdus Salam',
		profession: 'physicist',
		accomplishment: 'electromagnetism theory',
		imageId: 'bE7W1ji'
		}, {
		id: 3, // Used in JSX as a key
		name: 'Percy Lavon Julian',
		profession: 'chemist',
		accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
		imageId: 'IOjWm71'
		}, {
		id: 4, // Used in JSX as a key
		name: 'Subrahmanyan Chandrasekhar',
		profession: 'astrophysicist',
		accomplishment: 'white dwarf star mass calculations',
		imageId: 'lrWQx8l'
		}];
	
	return (
		<>
			<Nav title="My Title" test={myNumber} cipri="Neamtu"></Nav>
			<div className="page">CN Project</div>
			<List items={people} />
		</>
	)
}

export default App
