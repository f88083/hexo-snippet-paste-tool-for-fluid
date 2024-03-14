import * as vscode from 'vscode';

export async function youtubeEmbedPaste() {
	// Obtain the active text editor
	const editor = vscode.window.activeTextEditor;
	if (!editor) {return;}

	// Obtain clipboard content
	const clipboard_content = await vscode.env.clipboard.readText();

	// console.log("Current clipboard contains: " + clipboard_content);

	// Check clipboard content for YouTube URL
	if (!clipboard_content.includes("www.youtube.com/embed/")) {
		vscode.window.showInformationMessage('No YouTube Embed URL found in clipboard');
		return;
	}

	// Extract URL and Title from clipboard content
	const { url, title } = extractUrlAndTitle(clipboard_content);

	// UI for Width and Height Input
	vscode.window.showInputBox({
		value: '100% 500',
		prompt: 'Enter width and height (e.g., "100% 500")'
	}).then(input => {
		if (input) {
			var [width, height] = input.split(' ');

			// Modifying the content
			const modifiedContent = prepareYouTubeEmbed(width, height, url, title);
			// Inserting the modified content
			editor.edit(editBuilder => {
				editBuilder.insert(editor.selection.active, modifiedContent);
			});
		}
	});
}

function extractUrlAndTitle(content: string): { url: string | null, title: string | null } {
	// Obtain url and title from clipboard content
	const urlRegex = /src="([^"]+)"/;
	const titleRegex = /title="([^"]+)"/;

	const urlMatch = content.match(urlRegex);
	const titleMatch = content.match(titleRegex);

	const url = urlMatch ? urlMatch[1] : null;
	const title = titleMatch ? titleMatch[1] : null;

	return { url, title };
}

function prepareYouTubeEmbed(width: string, height: string, url: string | null, title: string | null): string {
	// Modify the <iframe> tag with the specified width and height parameters
	return `<iframe width="${width}" height="${height}" src="${url}" title="${title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
}
