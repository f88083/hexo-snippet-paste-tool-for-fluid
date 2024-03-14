import * as vscode from 'vscode';
import { youtubeEmbedPaste } from './util/youtubeEmbed';
import { foldBlock } from './util/foldBlock';

export function activate(context: vscode.ExtensionContext) {
	// Register multiple commands
	let youtubeEmbedCommand = vscode.commands.registerCommand('hexo-syntax-paste-tool-for-fluid.pasteYoutubeEmbed', () => {
		youtubeEmbedPaste();
	});

	let foldBlockCommand = vscode.commands.registerCommand('hexo-syntax-paste-tool-for-fluid.pasteFoldBlock', () => {
		foldBlock();
	});
	

	// Add the command to the context
	context.subscriptions.push(youtubeEmbedCommand);
	context.subscriptions.push(foldBlockCommand);
}

// Show all the paste options
// async function showOptions() {
// 	vscode.window.showInputBox({
// }


// This method is called when your extension is deactivated
export function deactivate() { }