import React from 'react'
import { CustomEditor } from './helpers';

const { toggleCodeBlock, toggleBoldMark, toggleItal, toggleUnderline, toggleStrikethrough } = CustomEditor;

const FormatBar = ({ editor }) => {

	const handleToggle = (e, callback) => {
		e.preventDefault();
		callback(editor);
	};

	return (
		<div aria-label="formatting tools" className="formatBar">

			<button
				aria-label="toggle bold"
				onMouseDown={e => handleToggle(e, toggleBoldMark)}>
				<i title="bold" className="fas fa-bold"></i>
			</button>

			<button
				aria-label="toggle italic"
				onMouseDown={e => handleToggle(e, toggleItal)}>
				<i title="italic" className="fas fa-italic"></i>
			</button>

			<button
				aria-label="toggle underline"
				onMouseDown={e => handleToggle(e, toggleUnderline)}>
				<i title="underline" class="fas fa-underline"></i>
			</button>

			<button
				aria-label="toggle strikethrough"
				onMouseDown={e => handleToggle(e, toggleStrikethrough)}>
				<i title="strikethrough" class="fas fa-strikethrough"></i>
			</button>

			<button
				aria-label="toggle code block"
				onMouseDown={e => handleToggle(e, toggleCodeBlock)}>
				<i title="code" className="fas fa-code"></i>
			</button>

		</div>
	)
};

export default FormatBar;
