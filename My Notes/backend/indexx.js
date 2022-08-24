const http = require('http')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')


const cors = require('cors')

app.use(cors())

let notes = [
  {
    "title": "Portfolio",
    "details": "Add new projects ",
    "details2": "Change the theme of the page",
    "details3": "Make it useable on the phone",
    "details4": ":)",
    "category": "HTML/CSS",
    "id": 4
  },
  {
    "title": "Maukas dad website",
    "details": "Barebones",
    "details2": "5 pages",
    "details3": "",
    "details4": "",
    "category": "HTML/CSS",
    "id": 5
  },
  {
    "title": "Notes",
    "details": "Only add checkbox when needed.",
    "details2": "Search bar for finding notes",
    "details3": "Saving checked boxes on refresh",
    "details4": "",
    "category": "MUIIII12356666",
    "id": 6
  }
]

// app.get('/', (req, res) => {
//   res.send('<h1>Hello World!</h1>')
// })

app.get('/notes', (req, res) => {
  res.json(notes)
})

app.use(bodyParser.json())


app.get('/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  const note = notes.find(note => note.id === id )
  response.json(note)

  if ( note ) {
    response.json(note)
  } else {
    response.status(404).end()
  }
})

app.delete('/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter(note => note.id !== id)

  response.status(204).end()
})

const generateId = () => {
  const maxId = notes.length > 0 ? notes.map(n => n.id).sort((a,b) => a - b).reverse()[0] : 1
  return maxId + 1
}

app.post('/notes', (request, response) => {
  const body = request.body

  if (body.content === undefined) {
    return response.status(400).json({error: 'content missing'})
  }

  const note = {
    title: body.content,
    details: body.content,
    details2: body.content,
    details3: body.content,
    details4: body.content,
    date: new Date(),
    id: generateId()
  }

  notes = notes.concat(note)

  response.json(note)
})

// const app = http.createServer((request, response) => {
//   response.writeHead(200, { 'Content-Type': 'application/json' })
//   response.end(JSON.stringify(notes))
// })

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
