import './App.css'
import {useEffect} from "react";
import {getUsers, saveUsers} from "./services/user.service.ts";

function App() {
  useEffect(() => {
    getUsers().then(value => console.log(value))

    saveUsers({id: 1, name: 'John', email: 'john@example.com'}).then(value => console.log(value))
  }, []);
  return (
    <>

    </>
  )
}

export default App
