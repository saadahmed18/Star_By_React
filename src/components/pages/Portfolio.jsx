import { Link } from "react-router";

function Portfolio() {
  return (
    <>
      <section>
        <div className="container m-auto px-4">
          <div className="text-center mb-[50px]">
            <span className="text-[#74c69d] font-bold">WORKS</span>
            <h2 className="my-4 text-2xl font-bold text-black">Portfolio</h2>
            <p className="text-[20px]">
              Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit.
            </p>
          </div>
          <div className="flex justify-center flex-wrap gap-5">
          <Link to="/">
            <img src="/images/work-1.webp" alt="work-1" />
          </Link>
          <Link to="/">
            <img src="/images/work-2.webp" alt="work-2" />
          </Link>
          <Link to="/">
            <img src="/images/work-3.webp" alt="work-3" />
          </Link>
          <Link to="/">
            <img src="/images/work-4.webp" alt="work-4" />
          </Link>
          <Link to="/">
            <img src="/images/work-5.webp" alt="work-5" />
          </Link>
          <Link to="/">
            <img src="/images/work-6.webp" alt="work-6" />
          </Link>
          <Link to="/">
            <img src="/images/work-7.webp" alt="work-7" />
          </Link>
          <Link to="/">
            <img src="/images/work-8.webp" alt="work-8" />
          </Link>
          </div>
          <button type="button" className="btn mx-auto mt-[30px]">
            Learn More
          </button>
        </div>
      </section>
    </>
  );
}
export default Portfolio;
