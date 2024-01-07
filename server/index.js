import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"book_crud_node_schema"
})

app.use(express.json())
app.use(cors())

app.get("/", (req,res)=>{
    res.json("Welcome to the backend")
})

app.get("/books", (req,res) =>{
    const q = "SELECT * FROM books"
    db.query(q,(err,data)=>{
        if (err) throw err
        return res.json(data)
    })
})

app.post("/books", (req, res) =>{
    const q = "INSERT INTO books(`title`, `description`, `cover`) VALUES (?)"
    const values = [
        req.body.title,
        req.body.description,
        req.body.cover,
    ]
    db.query(q,[values], (err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
});

app.delete("/books/:id", (req, res)=> {
    const bookId = req.params.id;
    const q = "DELETE FROM books WHERE id= ?";
    db.query(q, [bookId], (err,data) =>{
        if(err) return res.json(err);
        return res.json("book has been delete")
    })
});

app.put("/books/:id", (req, res)=> {
    const bookId = req.params.id;
    const q = "UPDATE books SET `title`= ?, `description` =?, `cover` =? WHERE id =?";
    const values = [
        req.body.title,
        req.body.description,
        req.body.cover,
    ]
    db.query(q, [...values,bookId], (err,data) =>{
        if(err) return res.json(err);
        return res.json("book has been updated")
    })
});

app.listen(8800, () => {
    console.log('connected successfully listening in port 8800')
})
