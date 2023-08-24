import Nav from "./components/Nav";
import Home from "./pages/Home";

import { mainNav } from "./utils/constants";

function App() {
	return (
		<>
			<Nav items={mainNav}></Nav>
			<Home />
		</>
	)
}

export default App;
