import { Transforms, Editor, Text } from 'slate';

export const CustomEditor = {
	isBoldMarkActive(editor) {
		const [match] = Editor.nodes(editor, {
			match: n => n.bold === true,
			universal: true
		});
		return !!match;
	},

	isItalActive(editor) {
		const [match] = Editor.nodes(editor, {
			match: n => n.italic === true,
			universal: true
		});
		return !!match;
	},

	isUnderlineActive(editor) {
		const [match] = Editor.nodes(editor, {
			match: n => n.underline === true,
			universal: true
		});
		return !!match;
	},

	isStrikethroughActive(editor) {
		const [match] = Editor.nodes(editor, {
			match: n => n.strikethrough === true,
			universal: true
		});
		return !!match;
	},

	isCodeBlockActive(editor) {
		const [match] = Editor.nodes(editor, {
			match: n => n.type === 'code'
		});
		return !! match;
	},

	toggleBoldMark(editor) {
		const isActive = CustomEditor.isBoldMarkActive(editor);
		Transforms.setNodes(
			editor,
			{ bold: isActive ? null : true },
			{ match: n => Text.isText(n), split: true }
		);
	},

	toggleItal(editor) {
		const isActive = CustomEditor.isItalActive(editor);
		Transforms.setNodes(
			editor,
			{ italic: isActive ? null : true },
			{ match: n => Text.isText(n), split: true }
		);
	},

	toggleUnderline(editor) {
		const isActive = CustomEditor.isUnderlineActive(editor);
		Transforms.setNodes(
			editor,
			{ underline: isActive ? null : true },
			{ match: n => Text.isText(n), split: true }
		);
	},
	
	toggleStrikethrough(editor) {
		const isActive = CustomEditor.isStrikethroughActive(editor);
		Transforms.setNodes(
			editor,
			{ strikethrough: isActive ? null : true },
			{ match: n => Text.isText(n), split: true }
		);
	},

	toggleCodeBlock(editor) {
		const isActive = CustomEditor.isCodeBlockActive(editor);
		Transforms.setNodes(
			editor,
			{ type: isActive ? null : 'code' },
			{ match: n => Editor.isBlock(editor, n) }
		)
	}
}