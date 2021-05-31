import { Transforms, Editor, Text } from 'slate';

export const isBoldMarkActive = editor => {
	const [match] = Editor.nodes(editor, {
		match: n => n.bold === true,
		universal: true
	});
	return !!match;
}

export const isItalActive = editor => {
	const [match] = Editor.nodes(editor, {
		match: n => n.italic === true,
		universal: true
	});
	return !!match;
}

export const isUnderlineActive = editor => {
	const [match] = Editor.nodes(editor, {
		match: n => n.underline === true,
		universal: true
	});
	return !!match;
}

export const isStrikethroughActive = editor => {
	const [match] = Editor.nodes(editor, {
		match: n => n.strikethrough === true,
		universal: true
	});
	return !!match;
}

export const isCodeBlockActive = editor => {
	const [match] = Editor.nodes(editor, {
		match: n => n.type === 'code'
	});
	return !! match;
}

export const toggleBoldMark = editor => {
	const isActive = isBoldMarkActive(editor);
	Transforms.setNodes(
		editor,
		{ bold: isActive ? null : true },
		{ match: n => Text.isText(n), split: true }
	);
}

export const toggleItal = editor => {
	const isActive = isItalActive(editor);
	Transforms.setNodes(
		editor,
		{ italic: isActive ? null : true },
		{ match: n => Text.isText(n), split: true }
	);
}

export const toggleUnderline = editor => {
	const isActive = isUnderlineActive(editor);
	Transforms.setNodes(
		editor,
		{ underline: isActive ? null : true },
		{ match: n => Text.isText(n), split: true }
	);
}

export const toggleStrikethrough = editor => {
	const isActive = isStrikethroughActive(editor);
	Transforms.setNodes(
		editor,
		{ strikethrough: isActive ? null : true },
		{ match: n => Text.isText(n), split: true }
	);
}

export const toggleCodeBlock = editor => {
	const isActive = isCodeBlockActive(editor);
	Transforms.setNodes(
		editor,
		{ type: isActive ? null : 'code' },
		{ match: n => Editor.isBlock(editor, n) }
	)
}