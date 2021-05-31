import { Transforms, Editor, Text } from 'slate';

const isFormatActive = (editor, format) => {
	const [match] = Editor.nodes(editor, {
		match: n => n[format] === true,
		universal: true
	});
	return !!match;
}
// matches bold, ital, underline, and strikethrough functionality

const isBlockTypeActive = (editor, type) => {
	const [match] = Editor.nodes(editor, {
		match: n => n.type === type
	});
	return !!match;
}

export const toggleBoldMark = editor => {
	const isActive = isFormatActive(editor, 'bold');
	Transforms.setNodes(
		editor,
		{ bold: isActive ? null : true },
		{ match: n => Text.isText(n), split: true }
	);
}

export const toggleItal = editor => {
	const isActive = isFormatActive(editor, 'italic');
	Transforms.setNodes(
		editor,
		{ italic: isActive ? null : true },
		{ match: n => Text.isText(n), split: true }
	);
}

export const toggleUnderline = editor => {
	const isActive = isFormatActive(editor, 'underline');
	Transforms.setNodes(
		editor,
		{ underline: isActive ? null : true },
		{ match: n => Text.isText(n), split: true }
	);
}

export const toggleStrikethrough = editor => {
	const isActive = isFormatActive(editor, 'strikethrough');
	Transforms.setNodes(
		editor,
		{ strikethrough: isActive ? null : true },
		{ match: n => Text.isText(n), split: true }
	);
}

export const toggleCodeBlock = editor => {
	const isActive = isBlockTypeActive(editor, 'code');
	Transforms.setNodes(
		editor,
		{ type: isActive ? null : 'code' },
		{ match: n => Editor.isBlock(editor, n) }
	)
}