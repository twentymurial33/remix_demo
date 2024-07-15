import NewNoteStyles from './NewNote.css';

function NewNote() {
    // function handleSubmit(event) {
    //     event.preventDefault()
    // }
    return (
       <form method="post" id="note-form" >
        <p>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" placeholder="Enter note here..." />
        </p>
        <p>
            <label htmlFor="content">Content</label>
            <textarea id="content" name="content"  rows="5" cols="50"/>
        </p>
        <div className="form-actions">
            <button type="submit">Add Note</button>
        </div>
       </form>
    )

}

export default NewNote;

export function links(){
    return[{rel:'stylesheet',href:NewNoteStyles}]
}