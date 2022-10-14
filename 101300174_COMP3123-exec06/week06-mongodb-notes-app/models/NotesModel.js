const mongoose = require('mongoose');

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated
//define schema
const noteSchema =mongoose.Schema({
    noteTitle: String,
    noteDescription: String,
    priority:{
        type: 'String',
        validate: {
          validator: value => value === "HIGH" || value === "LOW" || value === "MEDIUM",
          message: props => `${props.value} is invalid for priority`,
        },
      },
    dateAdded: Date,
    dateUpdated: Date  
})
//creating model from schema
module.exports = mongoose.model("notes", noteSchema)