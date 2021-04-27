import Banner from './components/Banner/Banner';
import Paragraph from './components/Paragraph/Paragraph';
import Gallery from './components/Gallery/Gallery';

function App() {
  return (
    <div>
      <Banner 
        heading={'Kurt Peniket'}
        subtitle={'Computer Programmer'}>
      </Banner>
      <Paragraph text='Some text here...'/>
      <Gallery />
    </div>
  );
}

export default App;
