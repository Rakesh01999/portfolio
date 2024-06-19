import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Feedback from "../Feedback/Feedback";
import Categories from "../Categories/Categories";

const Home = () => {
    return (
        <div>
            {/* <h2>This is home</h2> */}
            <Helmet>
                <title>Rakesh Biswas | Home</title>
            </Helmet>
            <Banner></Banner>
            <Categories></Categories>
            <Services></Services>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;