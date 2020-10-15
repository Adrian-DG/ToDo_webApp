// ToDo list DOM variable
const noteList = document.getElementById('todo-list')
// Note form DOM variables 
const noteTitle = document.getElementById('title-control')
const noteBody = document.getElementById('body-control')
const noteTag = document.getElementById('tag-control')
const noteDate = document.getElementById('date-control')
const noteSubmitBtn = document.getElementById('noteBtn')

// Update To-Do list when one note is remove 
function updateNoteList(notes){
    noteList.innerHTML = ''
    notes.forEach(element => {
        console.log(element)
        noteList.appendChild(element)
    });
}

// Remove the click note form To-Do list
function eraseBtn(event){
    const listItems = Array.from(document.getElementById('todo-list').childNodes)
    const item = event.target.parentNode.parentNode.parentNode
    const noteIndex = listItems.indexOf(item)
    listItems.splice(noteIndex,1)

    updateNoteList(listItems)


}

// Submit note form data on click
noteSubmitBtn.addEventListener('click', function () {
    const note = {
        title: noteTitle.value,
        body: noteBody.value,
        tag: noteTag.value,
        date: noteDate.value.toString()
    }

    to_html(note)
    // console.log(Title: ${note.title}\nDate: ${note.date}`)
    clearForm()
})

// Reset the note form fields on click
function clearForm() {
    noteTitle.value = ''
    noteBody.value = ''
    noteDate.value = ''
    noteTag.value = ''
}

// Structure the note data to HTML tags 
function to_html(note) {
    const card = `  
        <div class="card">
            <div class="card-head">
                <div class="title">
                    <p>${note.title}</p>
                </div>
                <input type="button" id="eraseBtn" value="x" onclick="eraseBtn(event)">
            </div>
            <div class="body">
                <p>${note.body}</p>
            </div>
            <div class="row">
                <div class="date">
                    <small>${note.date}</small>
                </div>
                <div class="tag">
                    <small>${note.tag}</small>
                </div>
            </div>
        </div>
    `
    render_html(card)
}

// Create List element and append to To-Do list 
function render_html(card) {
    const item = document.createElement('LI')
    item.classList.add('listItem')
    item.innerHTML = card
    document.getElementById('todo-list').appendChild(item)
    get_notes()
}

// Get the actual number of note on To-Do list 
function get_notes() {
    const numOfNotes = document.getElementById('todo-list').childNodes.length
    document.getElementById('stats').innerHTML = ` <p><strong>Num. of notes: </strong>${numOfNotes}</p>`
}

get_notes()