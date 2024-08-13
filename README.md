# Books API

Welcome to the Books API! This is a simple RESTful API built with Node.js, Express, and MongoDB that allows you to manage a collection of books. You can create, read, update, and delete book records.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Create**: Add new books to the collection.
- **Read**: Retrieve a list of all books or details of a specific book by ID.
- **Update**: Modify the details of an existing book.
- **Delete**: Remove a book from the collection.

## Installation

Follow these steps to set up the project locally:

1. **Clone the Repository**

    ```bash
    git clone https://github.com/AthulKM/booksAPI.git
    cd booksAPI
    ```

2. **Install Dependencies**

    Ensure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed. Install the required dependencies:

    ```bash
    npm install
    ```

3. **Set Up Environment Variables**

    Create a `.env` file in the root directory of the project and add your MongoDB URI:

    ```plaintext
    MONGO_URI=your_mongodb_connection_string
    PORT=3000
    ```

4. **Run the Application**

    Start the server:

    ```bash
    npm start
    ```

    The server will run on `http://localhost:3000` by default.

## Usage

Once the server is running, you can interact with the API using tools like [Postman](https://www.postman.com/) or `curl`. 

### Example Requests

- **Create a Book**

    ```bash
    curl -X POST http://localhost:3000/books -H "Content-Type: application/json" -d '{"title": "The Hobbit", "author": "J.R.R. Tolkien", "publishedYear": 1937, "genre": "Fantasy", "pages": 310}'
    ```

- **Get All Books**

    ```bash
    curl http://localhost:3000/books
    ```

- **Get a Book by ID**

    ```bash
    curl http://localhost:3000/books/<book_id>
    ```

- **Update a Book by ID**

    ```bash
    curl -X PUT http://localhost:3000/books/<book_id> -H "Content-Type: application/json" -d '{"title": "Updated Title"}'
    ```

- **Delete a Book by ID**

    ```bash
    curl -X DELETE http://localhost:3000/books/<book_id>
    ```

## API Endpoints

- **POST /books**: Create a new book.
- **GET /books**: Retrieve all books.
- **GET /books/:id**: Retrieve a book by ID.
- **PUT /books/:id**: Update a book by ID.
- **DELETE /books/:id**: Delete a book by ID.

## Technologies

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing book records.
- **Mongoose**: ODM library for MongoDB and Node.js.
- **dotenv**: Module to load environment variables from a `.env` file.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

1. Fork the repository.
2. Create a new branch for your changes.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Create a pull request describing your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---


Thank You ☺️ 