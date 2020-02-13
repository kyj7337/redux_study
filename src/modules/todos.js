const CHANGE_INPUT = "todos/CHANGE_INPUT"; //인풋 값 변경
const INSERT = "todos/INSERT"; //todo list 추가
const TOGGLE = "todos/TOGGLE"; //체크박스
const REMOVE = "todos/REMOVE"; //삭제
//액션 타입 생성

export const changeInput = input => ({
  type: CHANGE_INPUT,
  input
});

let id = 3;
export const insert = text => ({
  type: INSERT,
  todo: {
    id: id++,
    text,
    done: false
  }
});

export const toggle = id => ({
  type: TOGGLE,
  id
});

export const remove = id => ({
  type: REMOVE,
  id
});

const initialstate = {
  input: "",
  todos: [
    { id: 1, text: "리덕스 기초 배우기", done: false },
    { id: 2, text: "리모핏", done: false }
  ]
};

function todos(state = initialstate, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input
        //changeinput 액션 함수가 실행되면, state.todos.input의 값이 action.input 으로 바뀐다.
      };
    case INSERT:
      return {
        ...state,
        todos: state.todos.concat(action.todo)
        //insert 액션이 들어오면, state의 todos에 todo를 추가한다.
      };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo
        )
        //토글 액션이 들어오면, map함수 실행되는데 투두의 id와 action의 id가 같으면 배열안의 done을 반대로 바꿔준다. 같지 않으면 그대로
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
        //todo.id 와 action.id 가 같으면 없앤뒤(걸러라), 나머지를 return 해라
      };
    default:
      return state;
  }
}

export default todos;
