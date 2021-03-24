import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [tapOnchange, settapOnchange] = useState({
    title: "",
    content: ""
  });
  const [expand, setExpand] = useState(false);

  function handleChange(event) {
    const { value, name } = event.target;
    settapOnchange((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function handleChangeExpand() {
    setExpand(true);
  }

  return (
    <div>
      <form className="create-note">
        {expand && (
          <input
            onChange={handleChange}
            value={tapOnchange.title}
            name="title"
            placeholder="Title"
          />
        )}
        <textarea
          onChange={handleChange}
          onClick={handleChangeExpand}
          value={tapOnchange.content}
          name="content"
          placeholder="Take a note..."
          rows={expand ? "3" : "1"}
        />
        {expand && (
          <Zoom in={true}>
            <Fab
              onClick={(event) => {
                props.getNote(tapOnchange);
                settapOnchange({ title: "", content: "" });
                event.preventDefault();
              }}
            >
              <AddIcon />
            </Fab>
          </Zoom>
        )}
      </form>
    </div>
  );
}

export default CreateArea;
