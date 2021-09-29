import Header from './components/Header';
import './App.scss'
import './components/contentItem.scss'
import TotalMoney from './components/TotalMoney';
import Content from './components/Content';
import Receipt from './components/Receipt';
function App() {
  return (
    <div className="App">
      <Header/>
      <TotalMoney/>
      <Content className="content"/>
      <Receipt/>
    </div>
  );
}

export default App;
