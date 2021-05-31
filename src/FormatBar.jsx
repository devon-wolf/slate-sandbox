import React from 'react'
import { toggleFormat, toggleBlockType } from './helpers';

const FormatBar = ({ editor }) => {
	const handleBlockTypeToggle = (e, type) => {
		e.preventDefault();
		toggleBlockType(editor, type);
	}

	const handleFormatToggle = (e, format) => {
		e.preventDefault();
		toggleFormat(editor, format);
	}

	return (
		<div aria-label="formatting tools" className="formatBar">

			<button
				aria-label="toggle bold"
				onMouseDown={e => handleFormatToggle(e, 'bold')}>
				<i title="bold" className="fas fa-bold"></i>
			</button>

			<button
				aria-label="toggle italic"
				onMouseDown={e => handleFormatToggle(e, 'italic')}>
				<i title="italic" className="fas fa-italic"></i>
			</button>

			<button
				aria-label="toggle underline"
				onMouseDown={e => handleFormatToggle(e, 'underline')}>
				<i title="underline" class="fas fa-underline"></i>
			</button>

			<button
				aria-label="toggle strikethrough"
				onMouseDown={e => handleFormatToggle(e, 'strikethrough')}>
				<i title="strikethrough" class="fas fa-strikethrough"></i>
			</button>

			<button
				aria-label="toggle code block"
				onMouseDown={e => handleBlockTypeToggle(e, 'code')}>
				<i title="code" className="fas fa-code"></i>
			</button>

		</div>
	)
};

export default FormatBar;
