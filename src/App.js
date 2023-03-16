import './App.css';
import TaskList from './components/TaskList'
import TaskForm from "./components/TaskForm";


function App() {

  
  return (
    <main className='bg-grey-500 h-screen'>
      <div className='container mx-auto bg-light-500'>
      <TaskForm />
      <TaskList />
      </div>
    </main>
  );
}

export default App;
