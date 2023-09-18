import Todo from './components/Todo';
import './App.css';

const App = () => {
    
    return (
        <div>
            <h1>Todo List</h1>
            <Todo title='Do laundry' completed={false}/>
            <Todo title='Go shopping' completed={true} />
        </div>
        
    )
}

export default App;