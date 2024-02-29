import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
// import notesDb from "../notes.json"

export function NoteItem(){

}


export default function Note(){

  const params = useParams()

  const [ note, setNote ] = useState()

  // In the JSON file, find the note which has an _id equal to the 
  // id in the URL
  async function getNote(){
    const foundNote = await fetch(`/api/note/${params.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    setNote(foundNote)
  }
  
  useEffect(() => {
    getNote()
  },[])

  if( !note ) return <>No note could be found.</>
  return (
    <>
      <h1>{note?.title}</h1>
    </>
  )
}