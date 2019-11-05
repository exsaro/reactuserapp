var nextListId = 0;

export const addList = list => { 
return ({
  type: 'ADD_LIST',
  id: nextListId++,
  list
})}

export const editList = id => { 
return ({
    type: 'EDIT_LIST',
    id
})}

