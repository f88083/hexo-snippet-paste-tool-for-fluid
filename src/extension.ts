import * as vscode from 'vscode';
import { youtubeEmbedPaste } from './util/youtubeEmbed';

export function activate(context: vscode.ExtensionContext) {
	// Register the command
	let disposable = vscode.commands.registerCommand('hexo-syntax-paste-tool-for-fluid.pasteYoutubeEmbed', () => {
		youtubeEmbedPaste();
	});

	// Add the command to the context
	context.subscriptions.push(disposable);
}


// This method is called when your extension is deactivated
export function deactivate() { }