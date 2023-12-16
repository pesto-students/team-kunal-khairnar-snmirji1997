import React from 'react'
import { Card, CardContent, CardHeader, Typography} from '@mui/material'

const Book = ({book}) => {
  return (
    <Card sx={{margin:5}}>
        <CardHeader title={book.title}/>
        <CardContent>
            <Typography>{book.author}</Typography>
            <Typography>{book.year}</Typography>
        </CardContent>
    </Card>
  )
}

export default Book