import React, { useMemo, useState, useCallback } from 'react';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import { setLocalDocument, getLocalDocument } from './local-storage-utils';
import { CodeElement, DefaultElement, Leaf } from './Elements';
import FormatBar from './FormatBar';
import { toggleFormat, toggleBlockType } from './helpers';

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

	const handleKeyDown = (e, editor) => {
		if (!e.ctrlKey) return;

		switch (e.key) {
			case '`': {
				e.preventDefault()
				toggleBlockType(editor, 'code');
				break;
			}

			case 'b': {
				e.preventDefault();
				toggleFormat(editor, 'bold');
				break;
			}

			case 'i': {
				e.preventDefault();
				toggleFormat(editor, 'italic');
				break;
			}
		}
	};

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
				onKeyDown={e => handleKeyDown(e, editor)}
			/>

		</Slate>
	);
};

export default App;