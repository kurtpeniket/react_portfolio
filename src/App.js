import Banner from './components/Banner/Banner';
import Caption from './components/Caption/Caption';
// import Paragraph from './components/Paragraph/Paragraph';
import Gallery from './components/Gallery/Gallery';
import Subheading from './components/Subheading/Subheading';
import styled from 'styled-components';

function App() {
  const Style = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
  `
  return (
    <div>
      <Banner 
        heading={'Kurt Peniket'}
        subtitle={'Computer Programmer'}
      />
      <Style>
          <Caption 
            heading={'About me...'}
            content={'content...'}
            img={'profile.jpg'}
          />
          <Caption 
            heading={'tech'}
            content={'content...'}
            img={'tech_stack.svg'}
          />
      </Style>
      <Subheading
        heading={'Portfolio'}
      />
      <Gallery />
    </div>
  );
}

export default App;
