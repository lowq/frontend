import News from "../components/home/News";
import TimesInfo from "../components/home/TimesInfo";

const Home = () => {
  return (
    <div className="md:flex md:justify-between">
      <div className="w-fit mt-48 mb-16 md:mt-0 md:mb-0">
        <TimesInfo />
      </div>
      <div className="grow"></div>
      <div className="bg-gray-900 bg-opacity-50 mx-10 mt-6 w-fit md:w-96 rounded flex flex-col justify-center items-center">
        <div className="bg-amber-400 w-80 my-5 h-16 grid justify-center items-center rounded-sm">
          <h1 className="text-center text-3xl font-mono">Novinky</h1>
        </div>
        <div className="h-96 m-5 cursor-all-scroll overflow-y-scroll ">
          <News />
        </div>
      </div>
    </div>
  );
};

export default Home;
