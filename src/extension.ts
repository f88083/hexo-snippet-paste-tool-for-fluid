import * as vscode from 'vscode';
import { youtubeEmbedPaste } from './util/youtubeEmbed';
import { foldBlock } from './util/foldBlock';
import { note } from './util/note';
import { label } from './util/label';
import { checkBox } from './util/checkBox';

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

	let labelCommand = vscode.commands.registerCommand('hexo-snippet-paste-tool-for-fluid.pasteLabel', () => {
		label();
	});

	let checkBoxCommand = vscode.commands.registerCommand('hexo-snippet-paste-tool-for-fluid.pasteCheckBox', () => {
		checkBox();
	});

	// Add the commands to the context
	context.subscriptions.push(youtubeEmbedCommand);
	context.subscriptions.push(foldBlockCommand);
	context.subscriptions.push(noteCommand);
	context.subscriptions.push(labelCommand);
	context.subscriptions.push(checkBoxCommand);
}

// This method is called when your extension is deactivated
export function deactivate() { }