import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Feedback from "../Feedback/Feedback";
import Categories from "../Categories/Categories";
import { Element } from "react-scroll";

const Home = () => {
    return (
        <div className="mx-auto">
            {/* <h2>This is home</h2> */}
            <Helmet>
                <title>Rakesh Biswas | Portfolio</title>
            </Helmet>
            <Banner></Banner>
            <Element name="education">
            <Categories></Categories>

            </Element>
            <Services></Services>
            {/* <Feedback></Feedback> */}
        </div>
    );
};

export default Home;