// DOM variables 
const noteTitle = document.getElementById('title-control')
const noteBody = document.getElementById('body-control')
const noteTag = document.getElementById('tag-control')
const noteDate = document.getElementById('date-control')

const noteSubmitBtn = document.getElementById('noteBtn')
const noteEraseBtn = document.getElementById('eraseBtn')

const listItems = document.getElementsByClassName('listItem')

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

function clearForm() {
    noteTitle.value = ''
    noteBody.value = ''
    noteDate.value = ''
    noteTag.value = ''
}

function to_html(note) {
    const card = `  
        <div class="card">
            <div class="card-head">
                <div class="title">
                    <p>${note.title}</p>
                </div>
                <input type="button" id="eraseBtn" value="x">
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

function render_html(card) {
    const item = document.createElement('LI')
    item.classList.add('listItem')
    item.innerHTML = card
    document.getElementById('todo-list').appendChild(item)
    get_notes()
}

function get_notes() {
    const numOfNotes = document.getElementById('todo-list').childNodes.length
    document.getElementById('stats').innerHTML = ` <p><strong>Num. of notes: </strong>${numOfNotes}</p>`
}

get_notes()