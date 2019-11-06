var nextListId = 0;

export const addList = list => { 
return ({
  type: 'ADD_LIST',
  id: nextListId++,
  list
})}

export const updateList = (list,id) => { 
  return ({
    type: 'UPDATE_LIST',
    list,
    id
  })}


export const editList = id => { 
return ({
    type: 'EDIT_LIST',
    id
})}

