import * as vscode from 'vscode';

export async function checkBox() {
    // Obtain the active text editor
    const editor = vscode.window.activeTextEditor;
    if (!editor) { return; }

    // UI for Width and Height Input
    vscode.window.showInputBox({
        value: 'text false false',
        prompt: 'Type in the text to be displayed, and optionally, whether the checkbox is checked and whether it is inline, separated by a space.'
    }).then(input => {
        // When user provide any input
        if (input) {
            // split the input into text, optional checked, and optional inline
            const [text, checked, inline] = input.split(' ');

            // Prepare the fold block content
            const content = prepareCheckBox(text, checked, inline);

            // Inserting the content to the editor
            editor.edit(editBuilder => {
                editBuilder.insert(editor.selection.active, content);
            });
        }
    });
}

function prepareCheckBox(text: string | undefined, checked: string | undefined, inline: string | undefined): string {
    // Modify the fold block content with the specified text or checked or inline
    if (checked !== undefined && inline !== undefined) {
        console.log('Captured both checked and inline undefined');
        return `{% cb ${text}, ${checked}, ${inline} %}\n`;
    } else if (checked !== undefined) {
        return `{% cb ${text}, ${checked} %}\n`;
    } else {
        return `{% cb ${text} %}\n`;
    }
}