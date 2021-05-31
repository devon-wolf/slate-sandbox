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
	
	const checkDecoration = leaf => {
		if (leaf.underline && leaf.strikethrough) return 'underline line-through';
		if (leaf.underline) return 'underline';
		if (leaf.strikethrough) return 'line-through';
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