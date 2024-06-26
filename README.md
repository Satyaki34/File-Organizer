# File Organizer

This is a simple Node.js script for organizing files in a directory based on their file extensions. It categorizes files into separate folders according to their file types.

## How it works

The script reads all files in the current directory, excluding `main.js` and `package.json`, and organizes them into folders based on their file extensions. For example, all `.txt` files will be moved to a `txt` folder, all `.jpg` files to a `jpg` folder, and so on.

## Getting Started

1. Clone this repository to your local machine.
2. Make sure you have Node.js installed.
3. Navigate to the cloned directory in your terminal.
4. Run `npm install` to install the dependencies.
5. Run the script using `node main.js`.
6. Files will be organized into folders accordingly.

## Features

- **Dynamic Folder Creation**: The script dynamically creates folders for each unique file extension found in the directory.
- **Error Handling**: Error handling is implemented for file movement operations.
- **Feedback**: Provides feedback on successful file movements and when everything is already organized.

## Usage

You can use this script to quickly organize cluttered directories, making it easier to manage and find files based on their types.

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests if you have any suggestions for improvements or if you encounter any bugs.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

