function Team() {
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
            <div className="shadow rounded p-6">
              <img src="/images/person-1.webp" alt="person img" />
              <h3 className="mt-2 text-2xl font-bold">Peg Legge</h3>
              <p className="mt-2">CEO</p>
            </div>
            <div className="shadow rounded p-6">
              <img src="/images/person-2.webp" alt="person img" />
              <h3 className="mt-2 text-2xl font-bold">Richard Guerra</h3>
              <p className="mt-2">CTO</p>
            </div>
            <div className="shadow rounded p-6">
              <img src="/images/person-3.webp" alt="person img" />
              <h3 className="mt-2 text-2xl font-bold">Alexandra Stolz</h3>
              <p className="mt-2">DESIGNER</p>
            </div>
            <div className="shadow rounded p-6">
              <img src="/images/person-4.webp" alt="person img" />
              <h3 className="mt-2 text-2xl font-bold">Janet Bray
              </h3>
              <p className="mt-2">DEVELOPER</p>
            </div>
          </div>
          <button type="button" className="btn mx-auto mt-[30px]">
            View Team
          </button>
        </div>
      </section>
    </>
  );
}
export default Team;
