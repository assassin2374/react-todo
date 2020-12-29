import React, { useState } from 'react';
import './App.css';

function App() {
  const initTodoList = [
    { id: 0, title: 'sample', description: 'sample' },
    { id: 1, title: 'sample1', description: 'sample11' },
  ];
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [todoList, setTodoList] = useState(initTodoList);

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const changeDescription = (e) => {
    setDescription(e.target.value);
  };

  const clickBotton = () => {
    const newTodoList = todoList.slice();
    newTodoList.push({ id: 2, title: title, description: description });
    setTodoList(newTodoList);
    console.log(todoList);
  };

  return (
    <React.Fragment>
      <h1>TEST</h1>
      <div>
        {/* input */}
        <div>
          <input type="Text" value={title} onChange={changeTitle}></input>
        </div>
        <div>
          <textarea type="Text" value={description} onChange={changeDescription}></textarea>
        </div>
      </div>
      <div>
        {/* botton */}
        <button onClick={clickBotton}>botton</button>
      </div>
      {/* output */}
      {todoList.map((todo) => {
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
