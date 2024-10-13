import Header from '../Header/Header';
import './Home.css';
import Explore from '../Explore/Explore'; 
import Numbers from '../Numbers/Numbers';
import Intro from '../intro/Intro';
import Story from '../Story/Story';
import Testimonials from '../Testimonials/Testimonials';
import FAQ from '../FAQ/FAQ';
import ParallaxSection from '../ParallaxSection/ParallaxSection';
import SubscribeSection from '../SubscribeSection/SubscribeSection';
import Footer from '../Footer/Footer';

function Home() {
return (
    <div>
        <Header />
        <Numbers />
        <Intro />
        <Story />
        <Explore />
        <Testimonials />
        <FAQ />
        <ParallaxSection />
        <SubscribeSection />
        <Footer />



    </div>
);
}

export default Home;
