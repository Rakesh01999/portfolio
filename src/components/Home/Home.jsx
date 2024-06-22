import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import { Element } from "react-scroll";
import Contact from "../Contact/Contact";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Education from "../Education/Education";
import AboutMe from "../AboutMe/AboutMe";

const Home = () => {
    return (
        <div className="mx-auto">
            {/* <h2>This is home</h2> */}
            <Helmet>
                <title>Rakesh Biswas | Portfolio</title>
            </Helmet>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Contact></Contact>
            <Element name="skills">
                <Skills></Skills>
            </Element>
            <Projects></Projects>
            <Element name="education">
                <Education></Education>
            </Element>
            
        </div>
    );
};

export default Home;