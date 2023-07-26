import { List } from "./components/List";
import Nav from "./components/Nav";
import { peopleList } from "./before-server/peopleList";

function App() {
	const myNumber = 100;
	
	
	return (
		<>
			<Nav title="My Title" test={myNumber} cipri="Neamtu"></Nav>
			<div className="page">CN Project</div>
			<List items={peopleList} />
		</>
	)
}

export default App
