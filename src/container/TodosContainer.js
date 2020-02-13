import React from "react";
import { connect } from "react-redux";
import { changeInput, insert, toggle, remove } from "../modules/todos";
import Todos from "../components/Todos";

const TodosContainer = ({
  changeInput,
  insert,
  toggle,
  remove,
  input,
  todos
}) => {
  // console.log(changeInput);
  return (
    <Todos
      onChangeInput={changeInput}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
      todos={todos}
      input={input}
    />
  );
};

const mapStateToProps = state => ({
  todos: state.todos,
  input: state.todos.input
});

const mapDispatchToProps = dispatch => ({
  changeInput: input => {
    dispatch(changeInput(input));
    // 액션 함수를 보면, input 을 인자로 받고 있기 때문에 넣어줘야 한다.
    // 아래 함수들도 마찬가지로 인자를 넣어줘야 mapDispatchToProps로 작동한다.
  },
  insert: text => {
    dispatch(insert(text));
  },
  remove: id => {
    dispatch(remove(id));
  },
  toggle: id => {
    dispatch(toggle(id));
  }
});

// const mapDispatchToProps = dispatch => ({
//   changeInput: input => {
//     dispatch(changeInput(input));
//     // 액션 함수를 보면, input 을 인자로 받고 있기 때문에 넣어줘야 한다.
//     // 아래 함수들도 마찬가지로 인자를 넣어줘야 mapDispatchToProps로 작동한다.
//   },
//   insert: text => {
//     dispatch(insert(text));
//   },
//   remove: id => {
//     dispatch(remove(id));
//   },
//   toggle: id => {
//     dispatch(toggle(id));
//   }
// });

export default connect(
  mapStateToProps,
  mapDispatchToProps
  // ({ todos }) => ({ input: todos.input, todos: todos.todos }),
  // { changeInput, insert, toggle, remove }
)(TodosContainer);
