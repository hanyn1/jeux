import Name from './componet/Name'
import Description from './componet/Description'
import Price from './componet/Price'
import Image from './componet/Image'
import DataBase from './product'
import './App.css';
import Cards from './componet/Cards'
function App() {
  return (
    <div className="App">
      <Cards/>
      <Name/>
      <Description/>
      <Image/>
      <Price/>
    </div>
  );
}

export default App;
