import { Dialog } from '@mui/material'
import React from 'react'

const AddNewBook = ({addNewBook,setAddNewBook,setBooks,books}) => {
  return (
    <Dialog open onClose={()=>{setAddNewBook(false)}}>

    </Dialog>
  )
}

export default AddNewBook