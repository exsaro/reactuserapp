const lists = (state = { lists: [], editData: {} }, action) => {
    debugger;
    switch (action.type) {
      case 'ADD_LIST':
        return {lists: [
          ...state.lists,
          {
            id: action.id,
            list: action.list
          }
        ],
        editData: {}
    }
      case 'EDIT_LIST':
        return {
            lists: state.lists,
            editData: state.lists ? state.lists.filter((obj) => obj.id == action.id)[0] : {}
        }
      default:
        return state
    }
  }
  
  export default lists