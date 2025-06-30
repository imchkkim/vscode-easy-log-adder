// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "vscode-easy-log-adder" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let addEmptyLogDisposable = vscode.commands.registerCommand('vscode-easy-log-adder.addEmptyLog', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			vscode.window.showInformationMessage('No active text editor found.');
			return;
		}

		const position = editor.selection.active;
		const currentLineNumber = position.line;

		// Check for single-line control statements (if, for, while, etc.)
		if (currentLineNumber > 0) {
			const currentLine = editor.document.lineAt(currentLineNumber);
			const previousLine = editor.document.lineAt(currentLineNumber - 1);
			const previousLineText = previousLine.text.trim();

			// Regex to match control statements like if(...) or for(...) or else
			const controlStatementRegex = /^(if|for|while|else if)\s*\(.*\)\s*$|^else\s*$/;

			if (controlStatementRegex.test(previousLineText) && !currentLine.text.trim().startsWith('{') && !currentLine.isEmptyOrWhitespace) {
				// Handle single-line statement case
				const statementLine = currentLine;
				const statementIndentation = statementLine.text.substring(0, statementLine.firstNonWhitespaceCharacterIndex);
				const controlLine = previousLine;
				const controlIndentation = controlLine.text.substring(0, controlLine.firstNonWhitespaceCharacterIndex);

				const logStatement = `${statementIndentation}console.log();\n`;

				editor.edit(editBuilder => {
					editBuilder.insert(controlLine.range.end, ' {');
					editBuilder.insert(statementLine.range.start, logStatement);
					editBuilder.insert(statementLine.range.end, `\n${controlIndentation}}`);
				}).then(() => {
					const logLineNumber = currentLineNumber;
					const newCursorPosition = new vscode.Position(logLineNumber, statementIndentation.length + 'console.log('.length);
					editor.selection = new vscode.Selection(newCursorPosition, newCursorPosition);
				});
				return;
			}
		}

		// Handle regular case (insert log on the line above)
		const line = editor.document.lineAt(currentLineNumber);
		const indentation = line.text.substring(0, line.firstNonWhitespaceCharacterIndex);
		const logStatement = `${indentation}console.log();\n`;

		editor.edit(editBuilder => {
			editBuilder.insert(line.range.start, logStatement);
		}).then(() => {
			const newPosition = new vscode.Position(currentLineNumber, indentation.length + 'console.log('.length);
			editor.selection = new vscode.Selection(newPosition, newPosition);
		});
	});

	context.subscriptions.push(addEmptyLogDisposable);
}

// this method is called when your extension is deactivated
export function deactivate() { }
