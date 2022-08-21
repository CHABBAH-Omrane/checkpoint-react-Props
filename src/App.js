import './App.css';
import Profile from './Profile/Profile';

function App() {
	const text = `MERN Stack Developer , filled with energy, ready toinvest in new opportunities. self-trained and motivated to gain new knowledge.`;
	const click = () => {
		alert('Hello Omrane chabbah'); // I want to call the fullName
	};

	return (
		<div className="App">
			<Profile
				fullName=" CHABBAH Omrane"
				bio={text}
				profession="Seeking for internship opportunity"
				click={click}
			></Profile>
		</div>
	);
}

export default App;
