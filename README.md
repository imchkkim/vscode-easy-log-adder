# VS Code Easy Log Adder

This extension provides a convenient way to add `console.log()` statements for quick debugging, inspired by a common feature in JetBrains IDEs.

## Features

-   **Add Empty `console.log()`**: Quickly inserts an empty `console.log();` on the line above your cursor.
-   **Smart Wrapping for Single-Line Statements**: If you're on a single-line statement following a control block (like `if`, `for`, `while`), the extension will automatically wrap the statement in curly braces `{}` and then insert the `console.log();`.
-   **Automatic Cursor Positioning**: After inserting the log statement, your cursor is automatically placed inside the parentheses `()` so you can immediately start typing what you want to log.

## How to Use

You can add a `console.log()` statement in two ways:

1.  **Keyboard Shortcut**: Press `Alt+L` (`Cmd+L` on macOS).
2.  **Context Menu**: Right-click in the editor and select "Add Empty console.log".

### Demo

**Standard Usage:**

 <!-- TODO: Replace with actual GIF -->

**Single-Line Statement Usage:**

 <!-- TODO: Replace with actual GIF -->

## Installation

You can install this extension from the Visual Studio Code Marketplace.

1.  Open **Extensions** view (`Ctrl+Shift+X`).
2.  Search for "Easy Log Adder".
3.  Click **Install**.

## Contributing

Feel free to open issues or submit pull requests on [GitHub](https://https://github.com/imchkkim/vscode-easy-log-adder).

## License

This project is licensed under the MIT License

---
