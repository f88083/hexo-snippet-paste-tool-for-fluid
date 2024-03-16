import * as vscode from 'vscode';
import { youtubeEmbedPaste } from './util/youtubeEmbed';
import { foldBlock } from './util/foldBlock';
import { note } from './util/note';

export function activate(context: vscode.ExtensionContext) {

	// Register multiple commands
	let youtubeEmbedCommand = vscode.commands.registerCommand('hexo-snippet-paste-tool-for-fluid.pasteYoutubeEmbed', () => {
		youtubeEmbedPaste();
	});

	let foldBlockCommand = vscode.commands.registerCommand('hexo-snippet-paste-tool-for-fluid.pasteFoldBlock', () => {
		foldBlock();
	});

	let noteCommand = vscode.commands.registerCommand('hexo-snippet-paste-tool-for-fluid.pasteNote', () => {
		note();
	});
	

	// Add the commands to the context
	context.subscriptions.push(youtubeEmbedCommand);
	context.subscriptions.push(foldBlockCommand);
	context.subscriptions.push(noteCommand);
}

// This method is called when your extension is deactivated
export function deactivate() { }