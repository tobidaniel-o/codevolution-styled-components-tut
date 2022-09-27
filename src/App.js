import StyledButton, {
	FancyButton,
	SubmitButton,
} from "./components/Button/Button";
import "./App.css";

function App() {
	return (
		<div className="App">
			<StyledButton type="submit">Styled Button</StyledButton>
			<div>
				<br />
			</div>
			<StyledButton variant="outline">Styled Button</StyledButton>
			<div>
				<br />
			</div>
			<FancyButton as="a">Fancy Button</FancyButton>
			<div>
				<br />
			</div>
			<SubmitButton> Submit</SubmitButton>
		</div>
	);
}

export default App;
