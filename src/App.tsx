import './App.css'
import MyComponent from "./components/my-component/MyComponent.tsx";

function App() {
    return (
        <>
            <MyComponent title={'Title 1'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, deserunt,
                itaque! Cum, dolor optio! Aliquam amet beatae eaque facilis fuga fugiat illum in laboriosam libero
                mollitia nam, quod repellat, sequi!
            </MyComponent>
            <MyComponent title={'Title 2'}/>
        </>
    )
}

export default App
