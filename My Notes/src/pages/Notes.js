import React, { useState } from 'react'
import { useEffect } from 'react';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/system';
import NoteCard from '../components/NoteCard'


export default function Notes() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/notes')
      .then(res => res.json())
      .then(data => setNotes(data))
  }, []) // [] tells the serever to run it once

  const handleDelete = async (id) => {
    await fetch('http://localhost:8000/notes/' + id, { // 200
      method: 'DELETE'
    })

    const newNotes = notes.filter(note => note.id != id)
    setNotes(newNotes)
  }


  return (
<Container>

    <Grid container spacing={10}>
      {notes.map(note => (
        <Grid item key={note.id} xs={12} sm={8} md={6} lg={4} >
          <NoteCard note={note} handleDelete={handleDelete} />
        </Grid>
      ))}
      </Grid>
      </Container>
    
    
  )
}
