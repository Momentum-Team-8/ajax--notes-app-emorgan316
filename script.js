const url = 'http://localhost:3000/notes'
const form = 'http://localhost:3000/notes/'
const Notebook = document.querySelector('#notebook')

function listNotes() {
    fetch (url)
    .then ((response) => response.json())
    .then ((data) => {
        data.forEach(note => createNoteElement(note));
    })
}

function createNoteElement(note){
    // creating new div for the note
    let noteDiv =document.createElement('div');
    noteDiv.setAttribute('id',note.id);
    // console.log(note.id);
    noteDiv.innerHTML = `${note.title} <br />${note.body}<br /><button onclick='deleteNote(${note.id})'>delete</button><br />`;
    document.getElementById('notes').appendChild(noteDiv);
}

function deleteNote(id) {
    fetch (url + '/' +id, {method: 'delete'})
    .then ((response) => response.json())
    .then ((data) => {
        let note = document.getElementById(id);
        note.remove();
    })
}

function addNote() {
    var title = document.getElementById('addinputtitle').value;
    var body = document.getElementById('addinputbody').value;
    var json = {'title': title ,'body': body };
    fetch (url, {method: 'post', body: JSON.stringify(json), headers:{'Content-type':'application/json; charset=UTF-8'}})
    .then ((response) => response.json())
    .then ((data) => {
        json.id = data.id;
        createNoteElement(json)    
    });
}
// this is executing the function to list the notes
listNotes();