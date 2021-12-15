import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <div className='wrapper'>
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
