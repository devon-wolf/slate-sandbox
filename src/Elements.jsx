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

const checkDecoration = leaf => {
	if (leaf.underline && leaf.strikethrough) return 'underline line-through';
	if (leaf.underline) return 'underline';
	if (leaf.strikethrough) return 'line-through';
	else return 'none';
}

export const Leaf = ({ attributes, children, leaf }) => {
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
	)
}