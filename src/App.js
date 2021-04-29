import Banner from './components/Banner/Banner';
import Caption from './components/Caption/Caption';
import Gallery from './components/Gallery/Gallery';
import Subheading from './components/Subheading/Subheading';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function App() {
  const Style = styled.div`
  .flex {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  `
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
            content={'I\'m a full stack developer with a love of coding and self-improvement. Working efficiently and accurately has enabled me to recently complete Le Wagon\'s intensive web development bootcamp upgrading my skills in front and backend technologies. My other interests include reading and studying great books, continuing to learn Russian, keeping fit and otherwise trying to optimise various aspects of my life.'}
            img={'profile.jpg'}
            >
          </Caption>
        </div>
      </Style>
      <Subheading
        heading={'Portfolio'}
      />
      <Gallery />
    </div>
  );
}

export default App;
