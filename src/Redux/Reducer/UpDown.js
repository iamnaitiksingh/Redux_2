const initialState = 20;

const changeTheNumber = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 5;
    case "DECREMENT":
      if (state <= 0) return state;
      return  state - 5
    default:
      return state;
  }
};
export default changeTheNumber;
