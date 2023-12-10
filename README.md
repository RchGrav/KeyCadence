# README.md for QWERTY Typing Speed Simulator Data

## Overview

This repository contains the data files for the QWERTY Typing Speed Simulator, a tool designed to simulate and analyze typing speed on a standard QWERTY keyboard. The data files include predefined speeds for each key based on their commonness and position on the keyboard, as well as information on adjacent keys and error rates.

## Files Description

### `typingSpeed` Object

- **Purpose**: Contains speed values for each key on the QWERTY keyboard.
- **Details**: Speed values are based on the commonness of the letter in English and the key's position on the keyboard. For example, common letters like 'e' and 't' have lower values, indicating faster typing speed, while less common letters and punctuation marks have higher values.

### `adjacentKeys` Object

- **Purpose**: Maps each key to its adjacent keys on the keyboard.
- **Use Case**: Useful for simulating typing patterns and understanding common finger movements.

### `errorProne` Object

- **Purpose**: Contains error rates for each key, along with their adjacent keys.
- **Functionality**: Helps simulate typing errors based on key position and difficulty of reach.

## Usage

- The data can be integrated into typing simulation software to model realistic typing speeds and error patterns.
- It's useful for developers creating typing tutor software, ergonomic studies of keyboard layouts, or for enthusiasts interested in keyboard mechanics.

## Contribution

- Contributions are welcome to enhance the accuracy of typing speeds and error rates.
- Please submit pull requests with proposed changes and a brief description of your updates.

## License

- This project is open-sourced under MIT License.

## Contact

- For questions or suggestions, please open an issue in the repository.

---
Please note that this README assumes a standard open-source project setup. Adjust the sections according to the specific needs and structure of your project.
