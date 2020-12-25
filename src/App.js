import React, { useState } from 'react';
import './App.css';

const sample = [
  { id: 0, title: 'sample', description: 'sample' },
  { id: 1, title: 'sample1', description: 'sample2' },
];

function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const changeTitle = (e) => {
    setTitle(e.target.titleValue);
  };

  const changeDescription = (e) => {
    setDescription(e.target.descriptionValue);
  };

  const clickBotton = () => {
    console.log(title, description);
  };

  return (
    <React.Fragment>
      <h1>TEST</h1>
      <div>
        {/* input */}
        <input type="Text" titleValue={title} onChange={changeTitle}></input>
        <textarea type="Text" descriptionValue={description} onChange={changeDescription}></textarea>
      </div>
      <div>
        {/* botton */}
        <button onClick={clickBotton}>botton</button>
      </div>
      {/* output */}
      {sample.map((todo) => {
        return (
          <div key={todo.id}>
            <span>{todo.title}</span>
            <span>{todo.description}</span>
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default App;
