
import Book from "../models/Book.js";

export const createBook = async (req, res) => {
    try {

        const existingBook = await Book.findOne({ title: req.body.title });
        if (existingBook) {
            return res.status(400).json({ message: 'Book already exists' });
        }
        const book = new Book(req.body);
        await book.save();
        return res.status(201).json({ message: "Book has been successfully added to the database", data: book, error: false, status: "Success" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getAllBooks = async (req, res) => {
    try {

        const books = await Book.find();
        return res.status(200).json({ message: 'Existing books :', error: false, status: "Success", data: books });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getBookById = async (req, res) => {
    const { id } = req.params;
    try {
        const book = await Book.findById(id);
        if (!book) {
            res.status(404).json({ message: 'Book not found' });
        }
        return res.status(200).json({ message: "Book has been found", data: book, error: false, status: "Success" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const updateBook = async (req, res) => {
    const { id } = req.params;
    try {
        // Update the book and return the updated document
        const book = await Book.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

        if (!book) {
            return res.status(404).json({
                message: 'Book not found',
                data: null
            });
        }

        return res.status(200).json({
            message: 'Successfully updated',
            data: book,
            error: false,
            status: "Success"
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message,
            data: null
        });
    }
};


export const deleteBook = async (req, res) => {
    const { id } = req.params;
    try {
        const book = await Book.findByIdAndDelete(id);
        if (!book) {
            return res.status(404).json({ message: 'Book Not Found' });
        }
        return res.status(200).json({
            message: 'Book deleted successfully , deleted book was :',
            data: book,
            error: false,
            status: "Success"
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
