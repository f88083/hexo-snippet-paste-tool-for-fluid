import * as vscode from 'vscode';

export async function foldBlock() {
    // Obtain the active text editor
    const editor = vscode.window.activeTextEditor;
    if (!editor) return;

    // UI for Width and Height Input
    vscode.window.showInputBox({
        value: 'info exampleTitle',
        prompt: 'Type in fold block type (e.g., primary, default, info, success, warning, danger) and the title, separate by space'
    }).then(input => {
        // When user provide any input
        if (input) {
            // Parse input to get the type and title
            const [type, title] = input.split(' ');
            // Prepare the fold block content
            const content = prepareFoldBlock(type, title);

            // Inserting the content to the editor
            editor.edit(editBuilder => {
                editBuilder.insert(editor.selection.active, content);
            });
        }
    });
}

// Prepare the fold block content
function prepareFoldBlock(type: string, title: string): string {
    // Modify the fold block content with the specified type and title
    return `{% fold ${type} @${title} %}\n\n{% endfold %}`;
}
