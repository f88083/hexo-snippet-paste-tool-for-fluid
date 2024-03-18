import * as vscode from 'vscode';

export async function label() {
    // Obtain the active text editor
    const editor = vscode.window.activeTextEditor;
    if (!editor) { return; }

    // UI for Width and Height Input
    vscode.window.showInputBox({
        value: 'info text',
        prompt: 'Type in the type of the label (e.g., primary, default, info, success, warning, danger), and the text to be displayed (e.g., "info This is an info label") separated by a space.'
    }).then(input => {
        // When user provide any input
        if (input) {
            // split the input into type and text
            const [type, text] = input.split(' ');

            // Prepare the fold block content
            const content = prepareLabel(type, text);

            // Inserting the content to the editor
            editor.edit(editBuilder => {
                editBuilder.insert(editor.selection.active, content);
            });
        }
    });
}

function prepareLabel(type: string, text: string): string {
    // Modify the fold block content with the specified type and title
    return `{% label ${type} @${text} %}\n`;
}