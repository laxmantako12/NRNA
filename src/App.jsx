import { useState } from 'react'
import './App.css'
import Header from './Components/Header';
import Banner from './Components/Banner';
import Topbar from './Components/Topbar';
import MainBody from './Components/MainBody';
import CommingMatch from './Components/CommingMatch';
import Accept from './Components/Accept';
import Footer from './Components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Banner />
      <Topbar />
      <MainBody />
      <CommingMatch />
      <Accept />
      <Footer />

    </>
  )
}

export default App
