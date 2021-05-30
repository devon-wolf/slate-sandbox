import React from 'react'
import { CustomEditor } from './helpers';

const { toggleCodeBlock, toggleBoldMark } = CustomEditor;

const FormatBar = ({ editor }) => {
	return (
		<div aria-label="formatting tools" className="formatBar">
			<button
				aria-label="toggle bold"
				onMouseDown={event => {
					event.preventDefault();
					toggleBoldMark(editor);
			}}>
				<i title="bold" class="fas fa-bold"></i>
			</button>

			<button
				aria-label="toggle code block"
				onMouseDown={event => {
					event.preventDefault();
					toggleCodeBlock(editor);
				}}
			>
				<i title="code" class="fas fa-code"></i>
			</button>
		</div>
	)
};

export default FormatBar;
