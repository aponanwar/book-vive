import bannerImage from "../../assets/images/banneerImg.png";

const Banner = () => {
  return (
    <div className="flex w-9/12 mx-auto justify-around items-center p-20 bg-gray-200 mt-10 rounded-lg">
      <div className="flex-col">
        <div className="text-8xl font-bold book-font leading-1 space-y-8">
          <h2>Books to freshen up</h2>
          <h2>your bookshelf</h2>
        </div>
        <div className="text-xl bg-[#23BE0A] px-5 py-3 rounded-lg text-white mt-20 inline-block font-bold">
          <button type="button">View The List</button>
        </div>
      </div>
      <div>
        <img src={bannerImage} alt="" srcSet="" />
      </div>
    </div>
  );
};

export default Banner;
