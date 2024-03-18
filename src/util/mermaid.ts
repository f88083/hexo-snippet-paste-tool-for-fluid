import * as vscode from 'vscode';

export async function mermaid() {
    // Obtain the active text editor
    const editor = vscode.window.activeTextEditor;
    if (!editor) { return; }

    // Directly paste the mermaid block
    editor.edit(editBuilder => {
        editBuilder.insert(editor.selection.active, `{% mermaid %}\n\n{% endmermaid %}\n`);
    });
}