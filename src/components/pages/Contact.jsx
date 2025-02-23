import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  function Login() {
    console.log(name, email,message);
  }
  return (
    <>
      <section>
        <div className="container m-auto px-4">
          <div className="text-center mb-[50px]">
            <h2 className="my-4 text-2xl font-bold text-black">Contact Us</h2>
            <p className="text-[20px]">
              Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit.
            </p>
          </div>
          <div className="flex justify-center items-center flex-wrap gap-10">
            <form onSubmit={(e) => e.preventDefault()} className="w-full md:w-[45%]">
              <div>
                <label htmlFor="name">Name</label>
                <input onChange={(e)=>setName(e.target.value)} className="w-full block border border-black outline-none p-2" type="text" id="name" required />
              </div>
              <div className="my-5">
                <label htmlFor="email">Email</label>
                <input onChange={(e)=>setEmail(e.target.value)} className="w-full block border border-black outline-none p-2" type="email" id="email" required />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea onChange={(e)=>setMessage(e.target.value)} className="w-full block border border-black outline-none p-2 resize-none" id="message"></textarea>
              </div>
              <input onClick={Login} className="w-full btn mt-[30px] cursor-pointer" type="submit" />
            </form>
            <div className="w-full md:w-1/2">
              <iframe
                title="map"
                className="w-[100%] h-[450px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191857.60467090734!2d-96.23442481611669!3d41.29199950509207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87938dc8b50cfced%3A0x46424d4fae37b604!2sOmaha%2C%20NE%2C%20USA!5e0!3m2!1sen!2seg!4v1738153064917!5m2!1sen!2seg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Contact;
