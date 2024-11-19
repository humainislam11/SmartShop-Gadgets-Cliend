import Accordion from "../Components/home/Accordion";
import Banner from "../Components/home/Banner";
import FeaturedProduct from "../Components/home/FeaturedProduct";
import UserReview from "../Components/home/UserReview";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="container mx-auto">
            <div className="my-24">
                <h1 className="text-2xl text-center mb-10 font-semibold">Featured Product</h1>
            <FeaturedProduct></FeaturedProduct>
            </div>

            <div>
            <h1 className="text-2xl text-center mt-10 mb-16 font-semibold">User Review</h1>
            <UserReview></UserReview>
            </div>


            <div>
            <h1 className="text-2xl text-center mb-16 mt-16 font-semibold">Frequently Asked Question</h1>
            <Accordion></Accordion>
            </div>
            </div>
        </div>
    );
};

export default Home;