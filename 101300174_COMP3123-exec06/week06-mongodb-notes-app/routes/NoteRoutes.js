const express = require("express")
const mongoose = require("mongoose")
const noteModel = require('../models/NotesModel.js');
const routes = express.Router()

//TODO - Create a new Note
routes.post("/notes", async (req, res) => {
     try {
         const newNote = new noteModel(req.body)
         const note = await newNote.save()
         res.status(200).send(note)
     }
     catch (error) {
         res.status(404).send(error)
     }
 })

//TODO - Retrieve all Notes
routes.get("/notes", async (req, res) => {
    try{
        const notes = await noteModel.find()
        res.status(200).send(notes)
    }catch(error){
        res.status(400).send(error)
    }
})

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
routes.get('/notes/:noteId', async(req, res) => {
    // Validate request
    try{
        const notes = await noteModel.findById(req.params.noteId)
        res.status(200).send(notes)
    }catch(error){
        res.status(400).send(error)
    }
    //TODO - Write your code here to return onlt one note using noteid
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
routes.put('/notes/:noteId', async(req, res) => {
    // Validate request
    try {
        const updatedNote = await noteModel.findByIdAndUpdate(req.params.noteId, req.body)
       // const book = await newBook.save()
        res.status(200).send(updatedNote);
    }
    catch (error) {
        res.status(404).send(error)
    }
    //TODO - Write your code here to update the note using noteid
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
routes.delete('/notes/:noteId',async (req, res) => {
    // Validate request
    try {
        const deleteNote = await noteModel.findByIdAndDelete(req.params.noteId, req.body)
        res.send({message: 'Note deleted successfully'})
       if(!deleteBook){
        res.status(200).send({message: 'Book not deleted'})
       }
    }
    catch (error) {
        res.status(404).send(error)
    }
    //TODO - Write your code here to delete the note using noteid
});

module.exports = routes