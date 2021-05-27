const url = 'http://localhost:3000/notes'
const form = 'http://localhost:3000/notes/'
const Notebook = document.querySelector('#notebook')

{
fetch (url)
.then ((Response) = response.json())
.then ((data) => console.log (data))
}
