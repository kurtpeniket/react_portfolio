import Banner from './components/Banner/Banner';
import Caption from './components/Caption/Caption';
import Paragraph from './components/Paragraph/Paragraph';
import Gallery from './components/Gallery/Gallery';

function App() {
  return (
    <div>
      <Banner 
        heading={'Kurt Peniket'}
        subtitle={'Computer Programmer'}>
      </Banner>
      <Caption />
      <Gallery />
    </div>
  );
}

export default App;
