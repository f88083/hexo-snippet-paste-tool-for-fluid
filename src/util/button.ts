import * as vscode from 'vscode';

// {% btn url, text, title %}

export async function button() {
    // Obtain the active text editor
    const editor = vscode.window.activeTextEditor;
    if (!editor) { return; }

    // UI for Width and Height Input
    vscode.window.showInputBox({
        value: 'url text title',
        prompt: 'Type in the url, text to be displayed, and the title of the button, separated by a space.'
    }).then(input => {
        // When user provide any input
        if (input) {
            // split the input into url, text, and title
            const [url, text, title] = input.split(' ');

            // Prepare the fold block content
            const content = prepareButton(url, text, title);

            // Inserting the content to the editor
            editor.edit(editBuilder => {
                editBuilder.insert(editor.selection.active, content);
            });
        }
    });
}

function prepareButton(url: string | undefined, text: string | undefined, title: string | undefined): string {
    // Modify the fold block content with the specified url, text, and title
    return `{% btn ${url}, ${text}, ${title} %}\n`;

}