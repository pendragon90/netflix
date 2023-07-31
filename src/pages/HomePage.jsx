import Nav from "../components/Layouts/Nav";
import Hero from "../components/Layouts/Hero";
import Footer from "../components/Layouts/Footer";
import UpcomingCategory from './../components/Layouts/Category/UpcomingCategory';
import PopularCategory from './../components/Layouts/Category/PopularCategory';
import TopRateCategory from "../components/Layouts/Category/TopRateCategory";

const Homepage = () => {

  return (
    <>
      <Nav />
      <Hero />
      <UpcomingCategory />
      <PopularCategory />
      <TopRateCategory />
      <Footer />
    </>
  );
};

export default Homepage;
