import React from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import ToggleStatus from './components/ToggleStatus';

function App(props) {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo list</h1>
      </header>
      <main>
        <section>
          <Todos/>
        </section>
        <section>
          <AddTodo/>
        </section>
        <section>
          <p className="status_heading">Track tasks by status</p>
          <ToggleStatus/>
        </section>
      </main>
    </div>
  );
}

export default App;
  