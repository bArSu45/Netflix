
import './App.css';
import Card from './Card';
import AllData from "./AllData"

function App() {
return (
  <div>
        <h3 id='head'>List of My Favourite Netflix Series</h3>
      
    <div className="App">
  {AllData.map((ele) => {
return (
  <Card 
  img = {ele.img}
  title = {ele.title}
  name = {ele.name}
  links = {ele.links}
  />
 )
})}
    </div>
    </div>
  );
}

export default App;

