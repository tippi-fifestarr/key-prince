# Key Prince Demo

## Overview
Key Prince is an interactive game demo where a wizard prince embarks on a quest to collect magical keys. Each key represents one of the Chainlink Key Principles: True Ownership, Prioritized Focus, and Constructive Dialogue. This project integrates Chainlink services to ensure verifiable randomness and secure interactions, embodying these principles in its design and gameplay.

## About the Developer
Tippi is a seasoned developer in the blockchain (hackathon) space, a promising (self-taught computer) science student, and a (psychology & cross-cultural UX) researcher with an interest in consensus, game theory, zero knowledge, and cryptography.

## Key Principles

1. **True Ownership**: The game leverages Chainlink's decentralized oracle networks to ensure that each key collected is a unique, verifiably random asset, giving players true ownership of their in-game items.
2. **Prioritized Focus**: The development of Key Prince focuses on integrating essential features first, such as secure random key generation and player authentication, to create a reliable and enjoyable gaming experience.
3. **Constructive Dialogue**: The project encourages feedback and collaboration from the developer community, promoting an open dialogue to enhance game features and user experience.

## Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/tippi-fifestarr/key-prince.git
    cd key-prince
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Install Playwright browsers:
    ```bash
    npx playwright install
    ```

### Running the Server

1. Start the server:
    ```bash
    node server.js
    ```

2. Open your browser and navigate to:
    ```
    http://localhost:3000
    ```

### Running Tests

1. Run the automated tests:
    ```bash
    npm test
    ```

### Project Structure

- `server.js`: Sets up the Express server.
- `public/index.html`: The main game interface.
- `public/game.js`: Contains the game logic.
- `tests/key-collection.test.js`: Playwright test for automated testing.

## Contributing

We welcome contributions to improve Key Prince. Please fork the repository and submit pull requests.

## License

This project is licensed under the MIT License.

---

This project is the first checkpoint in deepening my learning, inspired by Mayra de Luna's workshop. By integrating performance testing, Playwright automation, and Chainlink services, I aim to create a simple gaming experience in less than a weekend.
