import React from 'react'
import { CustomEditor } from './helpers';

const { toggleCodeBlock, toggleBoldMark, toggleItal, toggleUnderline, toggleStrikethrough } = CustomEditor;

const FormatBar = ({ editor }) => {
	return (
		<div aria-label="formatting tools" className="formatBar">

			<button
				aria-label="toggle bold"
				onMouseDown={event => {
					event.preventDefault();
					toggleBoldMark(editor);
			}}>
				<i title="bold" className="fas fa-bold"></i>
			</button>

			<button
				aria-label="toggle italic"
				onMouseDown={event => {
					event.preventDefault();
					toggleItal(editor);
			}}>
				<i title="italic" className="fas fa-italic"></i>
			</button>

			<button
				aria-label="toggle underline"
				onMouseDown={event => {
					event.preventDefault();
					toggleUnderline(editor);
			}}>
				<i title="underline" class="fas fa-underline"></i>
			</button>

			<button
				aria-label="toggle strikethrough"
				onMouseDown={event => {
					event.preventDefault();
					toggleStrikethrough(editor);
			}}>
				<i title="strikethrough" class="fas fa-strikethrough"></i>
			</button>

			<button
				aria-label="toggle code block"
				onMouseDown={event => {
					event.preventDefault();
					toggleCodeBlock(editor);
			}}>
				<i title="code" className="fas fa-code"></i>
			</button>

		</div>
	)
};

export default FormatBar;
