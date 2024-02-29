const Note = require('../models/Note');


async function getAllNotes(){
    try {
      return await Note.find({});
    } catch(err){
      console.log(err.message)
      throw new Error(err)
    }
  }
  
  
  async function getNoteById(id){
    try {
      return await Note.findById(id);
    } catch(err){
      console.log(err.message)
      throw new Error(err)
    }
  }


  async function createNote(data){
    try {
      console.log(data)
      return await Note.create(data);
    } catch(err){
      console.log(err.message)
      throw new Error(err)
    }
  }

  async function updateNoteById(id, data){
    try {
      return await Note.findByIdAndUpdate(id, data, { new: true });
    } catch(err){
      console.log(err.message)
      throw new Error(err)
    }
  }

  async function deleteNoteById(id){
    try {
      return await Note.findByIdAndDelete(id);
    } catch(err){
      console.log(err.message)
      throw new Error(err)
    }
  }

  module.exports = {
    getAllNotes,
    getNoteById,
    createNote,
    updateNoteById,
    deleteNoteById
  }