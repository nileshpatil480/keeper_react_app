import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [additem, setAdditem] = useState([]);
  function getNote(inputs) {
    setAdditem((prevItems) => {
      return [...prevItems, inputs];
    });
  }
  function deleteItem(id) {
    setAdditem(() => {
      return additem.filter((item, index) => {
        return index !== id;
      });
    });
    console.log(id);
  }

  return (
    <div>
      <Header />
      <CreateArea getNote={getNote} />
      {additem.map((eachItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={eachItem.title}
            content={eachItem.content}
            deleteItem={deleteItem}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
