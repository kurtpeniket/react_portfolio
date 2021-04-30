import Banner from './components/Banner/Banner';
import Caption from './components/Caption/Caption';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';
import Subheading from './components/Subheading/Subheading';
import styled from 'styled-components';

const Style = styled.div`
.flex {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
`
function App() {
  return (
    <div>
      <Banner 
        heading={'Kurt Peniket'}
        subtitle={'Computer Programmer'}
      />
      <Style>
        <div className={'flex'}>
          <Caption 
            heading={'Hi, my name is Kurt...'}
            content={'I\'m a full stack developer with a love of coding and self-improvement. I decided I wanted to learn how to code because I love solving problems and creating new things. I also enjoy exploring different areas of programming and computer science, learning new skills along the way... My other interests include reading and studying great books, continuing to learn Russian, keeping fit and otherwise trying to optimise various aspects of my life.'}
            img={'profile.jpg'}
            >
          </Caption>
        </div>
      </Style>
      <Subheading
        heading={'Some of my work...'}
      />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
