function Hero() {
  return (
    <>
      <section id="home" className="bg-[#74c69d] h-screen">
        <div className="container m-auto px-4 h-full flex justify-center items-center flex-wrap gap-16">
          <div className="text-white">
            <span>Welcome</span>
            <h1 className="my-5 text-[25px] font-bold">
              Lorem ipsum dolor sit <br /> amet consectetur
            </h1>
            <p className="text-[#ffffff86]">
              Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Illo tenetur mollitia eum rerum ut <br /> possimus ea, molestias libero? Delectus repudiandae iusto <br /> nemo, eius
              dolorum temporibus neque.
            </p>
            <button type="button" className="block w-[150px] mt-5 py-[10px] text-black bg-white rounded">Explore</button>
          </div>
          <div className="md:w-[45%]">
            <img src="/images/hero.webp" alt="Hero Img" />
          </div>
        </div>
      </section>
    </>
  );
}
export default Hero;