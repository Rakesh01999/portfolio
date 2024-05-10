import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Residentials from "../Residentials/Residentials";
import Countries from "../Countries/Countries";
import Services from "../Services/Services";
import Feedback from "../Feedback/Feedback";
import Categories from "../Categories/Categories";

const Home = () => {
    return (
        <div>
            {/* <h2>This is home</h2> */}
            <Helmet>
                <title>Tourizzo | Home</title>
            </Helmet>
            <Banner></Banner>
            <Categories></Categories>
            {/* <Countries></Countries> */}
            <Residentials></Residentials>
            <Services></Services>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;