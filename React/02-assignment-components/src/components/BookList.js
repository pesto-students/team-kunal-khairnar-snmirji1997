import React,{ Component} from "react";
import Book from "./Book"
import WithLogging from "./WithLogging";
const books = [
    { title: "Book 1", author: "Author 1", year: 2020 },
    { title: "Book 2", author: "Author 2", year: 2018 },
    { title: "Book 3", author: "Author 3", year: 2022 },
    { title: "Book 4", author: "Author 4", year: 2023 },
  
  ];

class BookList extends Component {
  


    render(){
        return(
            <div>
                <h1>Book List</h1>
                {
                   books.map((item,key)=>{
                    return (
                        <Book book={item} key={key}/>
                    )
                   })
                }

            </div>
        )
    }
}

export default WithLogging(BookList);