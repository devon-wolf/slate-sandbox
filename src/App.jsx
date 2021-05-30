import React, { useMemo, useState, useCallback } from 'react';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import { setLocalDocument, getLocalDocument } from './local-storage-utils';
import { CodeElement, DefaultElement, Leaf } from './Elements';
import FormatBar from './FormatBar';
import { CustomEditor } from './helpers';
const { toggleBoldMark, toggleItal, toggleCodeBlock } = CustomEditor;



const App = () => {
	const editor = useMemo(() => withReact(createEditor()), []);

	const [value, setValue] = useState(getLocalDocument() || [
		{
			type: 'paragraph',
			children: [{ text: 'A line of text in a paragraph' }]
		}
	]);

	const renderElement = useCallback(props => {
		switch (props.element.type) {
			case 'code':
				return <CodeElement {...props} />
			default:
				return <DefaultElement {...props} />
		};
	}, []);

	const renderLeaf = useCallback(props => {
		return <Leaf {...props} />
	}, []);

	return (
		<Slate
			editor={editor}
			value={value}
			onChange={newValue => {
				setValue(newValue);
				setLocalDocument(newValue);
		}}>

			<FormatBar 
				editor={editor}
			/>
			
			<Editable
				renderElement={renderElement}
				renderLeaf={renderLeaf}
				onKeyDown={event => {
					if (!event.ctrlKey) return;
					switch (event.key) {
						case '`': {
							event.preventDefault()
							toggleCodeBlock(editor);
							break;
						}

						case 'b': {
							event.preventDefault();
							toggleBoldMark(editor);
							break;
						}

						case 'i': {
							event.preventDefault();
							toggleItal(editor);
							break;
						}
					}
				}}
			/>

		</Slate>
	);
};

export default App;