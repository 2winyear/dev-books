import './App.css';
import FormInput from './FormInput';
import List from './List';
import Footer from './Footer';
import {DataProvider} from './DataProvider';

function App() {
  return (
    <DataProvider>
    <div className="App">
      <h1>To Do List</h1>
      <FormInput/>
      <List/>
      <Footer/>
      </div>
      </DataProvider>
  );
}

export default App;
