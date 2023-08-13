import { useState } from "react";
import "./App.css";

function App() {
	const [base, setBase] = useState("Malinowa");
	const [fruit, setFruit] = useState("Truskawka");

	function handleBaseChange(e: any) {
		setBase(e.target.value);
	}

	function handleFruitChange(e: any) {
		setFruit(e.target.value);
	}

	function handleOrder() {
		alert("Teraz sobie możesz taki upiec :P");
	}

	return (
		<div>
			<h1 className='MainHeading'>Stwórz swój własny tort!</h1>
			<div className='Wrapper'>
				<div className='Cake'>
					<img src={`${base}.png`}></img>
					<img
						className='Fruit'
						src={`${fruit}.png`}
					></img>
				</div>
				<div className='Maker'>
					<h2>Baza</h2>
					<select
						onChange={handleBaseChange}
						className='Select'
						placeholder='Wybierz baze'
					>
						<option>Malinowa</option>
						<option>Czekoladowa</option>
					</select>
					<h2>Owoc</h2>
					<select
						onChange={handleFruitChange}
						className='Select'
						placeholder='Wybierz owoc'
					>
						<option>Truskawka</option>
						<option>Jagoda</option>
					</select>
				</div>
			</div>
			<button
				onClick={handleOrder}
				className='ReadyButton'
			>
				Gotowe
			</button>
		</div>
	);
}

export default App;
