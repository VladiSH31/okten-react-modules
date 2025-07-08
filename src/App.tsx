import './App.css'
import UsersComponent from "./components/users-component/UsersComponent.tsx";
import ContactComponent from "./components/contact-component/ContactComponent.tsx";

function App() {

  return (
    <div>
        <div><UsersComponent/></div>
        {/*Просто компонент контакт(сталий) щоб відпрацювати memo */}
        <div><ContactComponent/></div>
    </div>
  )
}

export default App
