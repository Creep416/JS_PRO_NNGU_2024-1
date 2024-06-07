import { MyButton } from "./components/MyButton/MyButton";
import { Profile } from "./components/Profile/Profile.tsx";


function App() {
	return (
		<>
			<link rel="stylesheet" href="/style.css"/>
			<MyButton/>
			<div>Data about you: {Profile("Иван", "Воронин", "/userImg.jpg")}</div>
		</>
		)
}

export default App