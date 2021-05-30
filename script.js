const url = 'http://localhost:3000/notes'
const form = 'http://localhost:3000/notes/'
const Notebook = document.querySelector('#notebook')

function listNotes() {

fetch (url)
.then ((response) => response.json())
.then ((data) => console.log (data))
}
