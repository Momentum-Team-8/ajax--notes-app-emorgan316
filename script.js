const url = 'http://localhost:3000/notes'
const form = 'http://localhost:3000/notes/'
const Notebook = document.querySelector('#notebook')

function listNotes() {
    fetch (url)
    .then ((response) => response.json())
    .then ((data) => console.log (data))
}
function deleteNote(id) {
    fetch (url + '/' +id, {method: 'delete'})
    .then ((response) => response.json())
    .then ((data) => console.log (data))
}

// {
//     "id": 1,
//     "title": "Confusion is my life",
//     "body": "This is the body of my note"
//   }
function addNote(json) {
    fetch (url, {method: 'post', body: JSON.stringify(json), headers:{'Content-type':'application/json; charset=UTF-8'}})
    .then ((response) => response.json())
    .then ((data) => console.log (data))
}