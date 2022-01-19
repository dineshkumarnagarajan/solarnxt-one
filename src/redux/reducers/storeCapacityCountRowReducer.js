const storeCapacityCountRowReducer = (
    state = {
      value: [],
      expand:true
    },
    action
  ) => {
    let new_state;
    switch (action.type) {
      case "STORE_CAPACITY_COUNT_ROW":
        new_state = {
          value: action.payload.data,
          expand:action.payload.expand
        };
        break;
  
      default:
        new_state = state;
        break;
    }
  
    return new_state;
  };
  
  export default storeCapacityCountRowReducer;
  