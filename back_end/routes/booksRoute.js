import express from "express";
import { createBook,getAllBooks,getBookById,deleteBookById ,updateBookById} from "../controllers/bookController.js";
import validateBook from "../middlewares/validateBook.js";
const router= express.Router();
// Route for saving book to database
router.post('/',validateBook,createBook);
// Route for Get All Books from database
router.get("/",getAllBooks);
// Route for get one book
router.get("/:id",getBookById);
// Route for delete a book
router.delete("/:id",deleteBookById);
// Route for Update a Book
router.put("/:id",validateBook,updateBookById)
export default router;
