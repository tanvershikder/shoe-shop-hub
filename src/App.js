import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from './Component/Container/Container';

function App() {
  return (
    <div className="app">
      <h1 className='text-primary text-center headertext'>Apex shoe hub!!</h1>
      <h2 className='text-primary text-center mb-5'>Chose 4 Shoes </h2>
      <Container></Container>
    </div>
  );
}

export default App;
