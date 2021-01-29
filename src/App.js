import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Layout from './Components/Layout';
import Footer from './Components/Footer';
import bg3 from './Components/images/bg3.jpg'


function App() {
  
  return (
    <div>
      <Header title="Header's title" descr="Header's description" />
      <Layout title="First Layout's title" descr="First Layout's description" />
      <Layout title="Second Layout's title" descr="Second Layout's description"/>
      <Layout title="Third Layout's title" descr="Third Layout's description"/>
      <Footer />
    </div>
  );
}

export default App;
