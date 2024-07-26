import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	const [mode, setMode] = useState("light");
	const [redMode, setRedMode] = useState("light");

	const [alert, setAlert] = useState(null);

	const displayAlert = (message, type) => {
		setAlert({
			msg: message,
			type: type,
		});
		setTimeout(() => {
			setAlert(null);
		}, 1500);
	};

	const toggleMode = () => {
		if (mode === "light") {
			setMode("dark");
			document.body.style.backgroundColor = "#042743";
			displayAlert("Dark Mode Enabled", "success");
			// document.title = "Dark Mode"         How to change title of component
		} else {
			setMode("light");
			document.body.style.backgroundColor = "white";
			displayAlert("Dark Mode Disabled", "success");
		}
	};

	const toggleRedMode = () => {
		if (mode === "light") {
			setRedMode("red");
			document.body.style.backgroundColor = "pink";
			displayAlert("Red Mode Enabled", "success");
		} else {
			setRedMode("light");
			document.body.style.backgroundColor = "pink";
			displayAlert("Red Mode Disabled", "success");
		}
	};

	return (
		<>
			<Router>
				<Navbar
					title="TextUtils"
					about="About"
					mode={mode}
					redMode={redMode}
					toggleMode={toggleMode}
					toggleRedMode={toggleRedMode}
				/>

				<Alert alert={alert} />
				<div className="container my-3">
					<Routes>  {/*instead of switch*/}
						<Route exact path="/about" element={<About />} />
						<Route
							exact
							path="/"
							element={
								<TextForm
									displayAlert={displayAlert}
									heading="Enter the text below to analyze."
									mode={mode}
									redMode={redMode}
								/>
							}
						/>
					</Routes>
				</div>
			</Router>
		</>
	);
}

export default App;
