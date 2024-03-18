import * as vscode from 'vscode';

export async function groupImages() {
    // Obtain the active text editor
    const editor = vscode.window.activeTextEditor;
    if (!editor) { return; }

    // UI for Width and Height Input
    vscode.window.showInputBox({
        value: 'total n1-n2-...',
        prompt: 'Type in the total number of images and the range of the images, separated by a space. (eg: {% gi 5 3-2 %} means 5 images in total, 3 in the first row and 2 in the second row.)'
    }).then(input => {
        // When user provide any input
        if (input) {
            // split the input into total and range
            const [total, range] = input.split(' ');

            // Prepare the fold block content
            const content = prepareGroupImages(total, range);

            // Inserting the content to the editor
            editor.edit(editBuilder => {
                editBuilder.insert(editor.selection.active, content);
            });
        }
    });
}

function prepareGroupImages(total: string | undefined, range: string | undefined): string {
    // Modify the fold block content with the specified total and range
    return `{% gi ${total} ${range} %}\n![](url)\n![](url)\n![](url)\n![](url)\n![](url)\n{% endgi %}\n`;
}