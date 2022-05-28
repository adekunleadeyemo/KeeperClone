import React, { useState } from "react";
import Add from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab'

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [textVisibility, setVisibility] = useState(false)

  function showTextArea(){
    setVisibility(true)
  }
  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
      {textVisibility&&
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
      }
        <textarea
          name="content"
          onClick={showTextArea}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={textVisibility?"3":"1"}
        />
        {textVisibility &&
        <Fab  onClick={submitNote}> <Add /> </Fab>}
      </form>
    </div>
  );
}

export default CreateArea;
