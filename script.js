const url = 'http://localhost:3000/notes'
const form = 'http://localhost:3000/notes/'
const Notepad = document.querySelector('#notepad')

{
fetch (url)
.then ((Response) = response.json())
.then ((data) => console.log (data))
}
