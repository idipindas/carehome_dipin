import HomePage from "../components/home-page-components/homePage";

const Home = () => {
  useEffect(() => {
    document.title = "Rosemanor";
  }, []);
  return <HomePage />;
};

export default Home;
