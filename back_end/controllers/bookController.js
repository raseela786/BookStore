import { Book } from "../models/bookmodel.js" 

export const createBook = async (req, res) => {
    try{
  
        const newBook = {
          title:req.body.title,
          author:req.body.author,
          publishYear:req.body.publishYear
        } ;
        const book= await Book.create(newBook);//create a new book details to db
        return res.status(201).send(book);//creating time 201
      }
    
    catch(error)
    {
      console.log(error.message)
      res.status(500).send({message:error.message})
    }
  }
  //get all books from db
  export const getAllBooks = async (req,res)=>
  {
    try{
 const books = await Book.find({});
 res.status(200).send(books)
    }
    catch{
        console.log(error.message)
        res.status(500).send({message:error.message})
    }
  }
//  get a book by id
        export const getBookById = async (req, res) => {
          try {
            const  id  = req.params.id; // Extract the ID from request parameters
            const book = await Book.findById(id); // Query the database
        
            if (!book) {
              // If no book is found with the given ID
              return res.status(404).send({ message: 'Book not found' });
            }
        
            // If the book is found
            res.status(200).send(book);//successfull 
          } 
    
    catch{
        console.log(error.message)
        res.status(500).send({message:error.message})
    }

}
//delete a book by id 
export const deleteBookById = async (req, res) => {
    try {
      const  id  = req.params.id; // Extract the ID from request parameters
      const result = await Book.findByIdAndDelete(id);

      if (!result) {
        // If no book is found with the given ID
        return res.status(404).send({ message: 'Book not found' });
      }
  
      // If the book is successfully deleted
      res.status(200).send({ message: 'Book deleted successfully' });
    }
catch{
  console.log(error.message)
  res.status(500).send({message:error.message})
}

}
//update a book by id
export const updateBookById= async (req, res) => {
    try {
      const id = req.params.id;
      const updates = req.body;
  
     const updatedBook = await Book.findByIdAndUpdate(id,updates)
     if(!updatedBook)
     {
      return res.status(404).send({ message: 'Book not found' });
     }
     else
     {res.status(200).send({message:"updated"});}
      
    } 
    catch (error) {
      console.error('Error updating book:', error.message);
      res.status(500).send({ message: 'Internal Server Error' });
    }
  }
  