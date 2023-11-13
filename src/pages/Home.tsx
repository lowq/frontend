import NewsComponent from "../components/home/NewsComponent";
import TimesInfo from "../components/home/TimesInfo";

const Home = () => {
  return (
    <div className="flex justify-between">
      <TimesInfo/>
      <div className="grow"></div>
      <NewsComponent />
    </div>
  );
};

export default Home;
