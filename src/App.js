import Banner from './components/Banner/Banner';
import Paragraph from './components/Paragraph/Paragraph';

function App() {
  return (
    <div>
      <Banner 
        heading={'Kurt Peniket'}
        subtitle={'Computer Programmer'}>
      </Banner>
      <Paragraph text='Some text here...'/>
    </div>
  );
}

export default App;
