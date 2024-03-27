import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="my-12 rounded-3xl">
      <div className=" rounded-3xl bg-base-200">
        <div className="hero-content rounded-3xl bg-base-200 px-28 py-15  flex-col lg:flex-row-reverse justify-between gap-24">
          <img src="/hero.png" className="max-w-md bg-base-200 rounded-lg " />
          <div>
            <h1 className="text-5xl max-w-[526px] font-bold play-fair">
              Books to freshen up your bookshelf
            </h1>
            <br />
            <Link to="/listed/readBook">
              <button className="btn bg-[#23BE0A] text-lg font-bold text-white">
                View The List
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
