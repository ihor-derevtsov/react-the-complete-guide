import React, {useState} from 'react';
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";


function App() {

  const [usersList, setUserLists] = useState([]);

  const addUserHandler = (uName, uAge) => {
      setUserLists((prevState => {
          return [...prevState, { name: uName, age: uAge, id: Math.random().toString() }];
      }))
  }

  return (
    <div>
        <AddUser onAddUser={addUserHandler} />
        <UsersList users={usersList} />
    </div>
  );
}

export default App;
