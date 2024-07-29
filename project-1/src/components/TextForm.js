import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
	const handleUpperCase = () => {
		setText(text.toUpperCase());
		props.displayAlert("Converted to Upper Case", "success");
	};

	const handleLowerCase = () => {
		setText(text.toLowerCase());
		props.displayAlert("Converted to Lower Case", "success");
	};

	const handleCopyText = () => {
		navigator.clipboard.writeText(text);
		document.getSelection().removeAllRanges();
		props.displayAlert("Text copied to clipboard", "success");
	};

	const handleExtraSpaces = () => {
		let newText = text.split(/\s+/).filter(Boolean).join(" ");
		setText(newText);
		props.displayAlert("Extra spaces removed", "success");
	};

	const handleResetField = () => {
		setText("");
		props.displayAlert("Field has been rested", "success");
	};

	const handleOnChange = (e) => {
		setText(e.target.value);
	};

	const countWords = (text) => {
		return text.split(/\s+/).filter((word) => {
			return word.length !== 0;
		}).length;
	};

	const [text, setText] = useState("");

	return (
		<>
			<div
				className="form-floating my-3"
				style={{ color: props.mode === "dark" ? "white" : "black" }}>
				<h1 className="mb-2">{props.heading}</h1>
				<textarea
					className="form-control my-5 h-auto"
					id="textBox"
					rows="8"
					value={text}
					onChange={handleOnChange}
					style={{
						backgroundColor: props.mode === "dark" ? "#13466e" : "white",
						color: props.mode === "dark" ? "white" : "#042743",
					}}></textarea>
				<div className="d-flex flex-wrap">
					<button
						disabled={text.length === 0}
						className="btn btn-primary m-2"
						style={{ color: props.redMode === "red" ? "orange" : "white" }}
						onClick={handleUpperCase}>
						Convert to UpperCase
					</button>
					<button
						disabled={text.length === 0}
						className="btn btn-primary m-2"
						onClick={handleLowerCase}>
						Convert to LowerCase
					</button>
					<button
						disabled={text.length === 0}
						className="btn btn-primary m-2"
						onClick={handleCopyText}>
						Copy Text
					</button>
					<button
						disabled={text.length === 0}
						className="btn btn-primary m-2"
						onClick={handleExtraSpaces}>
						Remove Extra Spaces
					</button>
					<button
						disabled={text.length === 0}
						className="btn btn-primary m-2"
						onClick={handleResetField}>
						Clear field
					</button>
				</div>
			</div>
			<div
				className="container my-4"
				style={{ color: props.mode === "dark" ? "white" : "black" }}>
				<h2>Your text summary</h2>
				<p>
					{countWords(text)} words and {text.length} characters.
				</p>
				<p>{0.008 * countWords(text)} minutes to read.</p>
				<h3>Preview</h3>
				<p>{text.length > 0 ? text : "Nothing to preview !!"}</p>
			</div>
		</>
	);
}

// PropTypes
TextForm.propTypes = {
	heading: PropTypes.string.isRequired,
	mode: PropTypes.string.isRequired,
};
