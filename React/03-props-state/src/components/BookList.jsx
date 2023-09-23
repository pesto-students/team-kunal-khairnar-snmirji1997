import React,{ useState } from 'react'
import Book from "./Book"
import WithLogging from "./WithLogging";
import { Box, Button } from '@mui/material';



const BookList = () => {
    const [addNewBook,setAddNewBook] = useState(false);


    const books = [
        { title: "Book 1", author: "Author 1", year: 2020 },
        { title: "Book 2", author: "Author 2", year: 2018 },
        { title: "Book 3", author: "Author 3", year: 2022 },
        { title: "Book 4", author: "Author 4", year: 2023 },
      
      ];
  return (
    <Box>
        <Box>
            <Button>Add New Book</Button>
        </Box>
        <Box >
            {
                books.length > 0 ? (
               books.map((item,key)=>{
                return(
                    <Book key={key} book={item}/>
                )
               })
                ):(
                    <Box>
                        No Books !
                    </Box>
                )

            }
        </Box>
    </Box>

  )
}

export default WithLogging(BookList) 