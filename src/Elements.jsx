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
	return (
		<span
		{...attributes}
		style={{
			fontWeight: leaf.bold ? 'bold' : 'normal',
			fontStyle: leaf.italic ? 'italic' : 'normal' }}
		>
			{children}
		</span>
	)
}