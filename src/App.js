import './App.css';
import Header from './Components/Header';
import Topbar from './Components/Topbar';
import Banner from './Components/Banner';
import MainBody from './Components/MainBody';
import CommingMatch from './Components/CommingMatch';
import Footer from './Components/Footer';
import Accept from './Components/Accept';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Topbar />
      <MainBody />
      <CommingMatch />
      <Accept />
      <Footer />
     
    </div>
  );
}

export default App;
