import * as vscode from 'vscode';

export async function note() {
    // Obtain the active text editor
    const editor = vscode.window.activeTextEditor;
    if (!editor) {return;}

    // UI for Width and Height Input
    vscode.window.showInputBox({
        value: 'info',
        prompt: 'Type in the type of the note (e.g., primary, default, info, success, warning, danger)'
    }).then(input => {
        // When user provide any input
        if (input) {

            // Prepare the fold block content
            const content = prepareNote(input);

            // Inserting the content to the editor
            editor.edit(editBuilder => {
                editBuilder.insert(editor.selection.active, content);
            });
        }
    });
}

function prepareNote(type: string): string {
    // Modify the fold block content with the specified type and title
    return `{% note ${type} %}\n\n{% endnote %}`;
}