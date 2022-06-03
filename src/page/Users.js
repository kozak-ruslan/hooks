import React, { useEffect, useCallback, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { map, filter } from 'lodash';
import { changeDefTitle } from '../redux/actions/actions';
import * as queryString from 'query-string';
import {
  loadData,
  addUsers,
  removeUser,
  setFilter,
} from '../redux/actions/users';
import Add from './parts/Add';
import Filter from './parts/Filters';
import ListComponent from './parts/List';
import { fetchUser, addUserCreators, editCheckedCreators, deleteUserCreators } from '../toolkitRedux/actionCreators';
import UserContextProvider from '../examples/Context/UserContext';

const Users = () => {
  const { title,
  loading,
  users,
  isError} = useSelector(({toolkitUsers})=> toolkitUsers);

  const dispatch = useDispatch();
  const inputRef = useRef('sssss');
  const [text, setText] = useState('title')  

  useEffect(()=>{
    dispatch(fetchUser())
  },[dispatch])

  // const handleRemove = (id)=>{
  //   console.log(`handleRemove: ${id}`)
  // }


  const handleClick = ()=>{
    console.log(inputRef.current.value)
  }
  const handleAdd = useCallback(
    (data)=> {
      dispatch(addUserCreators(data));
    },
    [],
  )
  const handleChecked = useCallback(
    (id)=> {
      dispatch(editCheckedCreators(id));
    },
    [],
  );
  const handleDelete = useCallback(
    (id)=> {
      dispatch(deleteUserCreators(id));
    },
    [],
  )
  
  // const handleChecked = (id)=> {
  //   dispatch(editCheckedCreators(id));
  // }
  // const handleDelete = (id)=> {
  //   dispatch(deleteUserCreators(id));
  // }


  return (
    <>
      <h2> User List {title}</h2>
      <input ref={inputRef} type='text' />
      <input value={text} onChange={({target})=>setText(target.value)} type='text' />
      <div>text ref: {text}</div>
      <button onClick={handleClick}>button</button>
      <UserContextProvider>
        
        <Add onAdd={handleAdd}></Add>
        <ListComponent
          data={users}
          onChecked={handleChecked}
          onRemove={handleDelete}
        >
        </ListComponent>
      </UserContextProvider>
      {/* <h3 onClick={editTitle}>llllll</h3>
      
      <Filter
        filterName={filterName}
        onAddFilter={(name) => {
          dispatch(setFilter(name));
        }}
      />
      <ListComponent
        data={users}
        onRemove={handleRemove}
        onChecked={handleChecked}
      ></ListComponent> */}
    </>
  );
};
// USING CONNECT REDUX
// const mapStateToProps = ()=>{

// }
// const mapDispatchToProps = dispatch => {
//   return {
//     editTitle: () => dispatch(changeDefTitle())
//   }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(Users);
export default Users;
