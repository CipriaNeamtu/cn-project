import Nav from "./components/Nav";
import { mainNav } from "./utils/constants";

function App() {
	return (
		<>
			<Nav items={mainNav}></Nav>
			<div className="page">CN Project</div>
		</>
	)
}

export default App
