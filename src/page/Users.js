import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeDefTitle } from "../redux/actions/actions";
import { loadData, addUsers } from "../redux/actions/users";
import Add from "./Add";
import ListComponent from "./List";

const Users = () => {

  const {title, users} = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const editTitle = useCallback(
    () => {
      dispatch(changeDefTitle());
      console.log("changeDefTitle")
    }, [dispatch]
  );

  // const editTitle = () =>{
  //   dispatch(changeDefTitle());
  // }
  
  useEffect(() => {
    if(users && users.length === 0){
      dispatch(loadData())
    }
    console.log("users");
  }, [dispatch, users]);



  const handleSave = (user) => {
    // eslint-disable-next-line no-undef
    console.log('dispatch(addUsers(user))')
    dispatch(addUsers(user))
  };
  const handleRemove = (idProps) => {
    // eslint-disable-next-line no-undef
    setUsers((prev) => prev.filter(({ id }) => id !== idProps));
  };

  return (
    <>
      <h2> User List </h2>
      <h3 onClick={editTitle}>{title}</h3>
      <Add onAdd={handleSave}></Add>
      <ListComponent data={users} onRemove={handleRemove}></ListComponent>
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