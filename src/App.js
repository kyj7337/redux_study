import React from 'react';
// import Todos from "./components/Todos";
import CounterContainer from './container/CounterContainer';
import TodosContainer from './container/TodosContainer';
import ExampleContainer from './container/ExampleContainer';
const App = () => {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodosContainer />
      <hr />
      <ExampleContainer />
    </div>
  );
};

export default App;
