const lists = (state = { lists: [], editData: {} }, action) => {
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
          editData: state.lists.length > 0 ? state.lists.filter((obj) => obj.id == action.id)[0] : {}
      }
    case 'UPDATE_LIST':
      let newLists = [];
      if(state.lists.length > 0) {
        newLists = [...state.lists];
      }
       
      return {
          lists: newLists.length > 0 ? newLists.map((obj) =>{
            if(obj.id == state.editData.id)
             return {...state.editData, list: action.list};
          }) : [],
          editData: {...state.editData, list: action.list}
      }
    default:
      return state
    }
  }
  
  export default lists