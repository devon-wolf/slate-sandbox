export const CodeElement = ({ attributes, children }) => {
	return (
		<pre {...attributes}>
			<code>{children}</code>
		</pre>
	);
};

export const DefaultElement = ({ attributes, children }) => {
	return <p {...attributes}>{children}</p>;
};

export const Leaf = ({ attributes, children, leaf }) => {
	
	const checkDecoration = ({ underline, strikethrough }) => {
		if (underline && strikethrough) return 'underline line-through';
		if (underline) return 'underline';
		if (strikethrough) return 'line-through';
		else return 'none';
	};

	return (
		<span
		{...attributes}
		style={{
			fontWeight: leaf.bold ? 'bold' : 'normal',
			fontStyle: leaf.italic ? 'italic' : 'normal',
			textDecoration: checkDecoration(leaf)
		}}
		>
			{children}
		</span>
	);
};