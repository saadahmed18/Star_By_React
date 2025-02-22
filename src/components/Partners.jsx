import { Link } from "react-router";

function Partners() {
  return (
    <>
      <section>
        <div className="container m-auto px-4">
          <div className="text-center mb-[50px]">
            <span className="text-[#74c69d] font-bold">PARTNERS</span>
            <h2 className="my-4 text-2xl font-bold text-black">Lorem Ipsum Dolor</h2>
            <p className="text-[20px]">
              Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit.
            </p>
          </div>
          <div className="flex justify-center flex-wrap gap-8">
            <Link to="/">
              <img src="/images/google.webp" alt="Google" />
            </Link>
            <Link to="/">
              <img src="/images/microsoft.webp" alt="Microsoft" />
            </Link>
            <Link to="/">
              <img src="/images/airbnb.webp" alt="Aribnb" />
            </Link>
            <Link to="/">
              <img src="/images/facebook.webp" alt="Facebook" />
            </Link>
            <Link to="/">
              <img src="/images/spotify.webp" alt="Spotify" />
            </Link>
          </div>
          <Link to="/" className="btn">
            Learn More
          </Link>
        </div>
      </section>
    </>
  );
}
export default Partners;