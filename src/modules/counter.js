import { createAction } from "redux-actions";

const INCREASE = "counter/INCREASE"; //액션 타입 정의
const DECREASE = "counter/DECREASE"; //액션 타입 정의

export const increase = () => ({ type: INCREASE }); //액션 생성 함수
export const decrease = () => ({ type: DECREASE }); //액션 생성 함수

const initialstate = {
  number: 0
}; //초기 state 설정

function counter(state = initialstate, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1
      };
    case DECREASE:
      return {
        number: state.number - 1
      };
    default:
      return state;
  }
}

export default counter; //리듀서 함수
