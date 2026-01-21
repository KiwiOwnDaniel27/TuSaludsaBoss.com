import Header from './components/header';
import Hero from './components/Hero';
import Benefits from './components/benefits';
import Planes from './components/Planes';
import Testimonials from './components/Testimonials';
import FaqSec from './components/FaqSec';




const App = () => {
  return (
    <>
     <Header/>
     <main>
          <Hero/>
          <Benefits/>
          <Planes/>
          <Testimonials/>
          <FaqSec/>
     </main>
    </>
  )
}

export default App;