import { Link } from "react-router";

function Footer() {
  return (
    <>
      <footer className="bg-[#74c69d]">
        <div className="container m-auto px-4 py-8 flex justify-between items-center flex-wrap gap-5">
          <div className="flex gap-5">
            <Link to="/">
              <img src="/icons/facebook.webp" alt="facebook img" />
            </Link>
            <Link to="/">
              <img src="/icons/instagram.webp" alt="instagram" />
            </Link>
            <Link to="/">
              <img src="/icons/twitter.webp" alt="twitter" />
            </Link>
            <Link to="/">
              <img src="/icons/pinterest.webp" alt="pinterest img" />
            </Link>
            <Link to="/">
              <img src="/icons/tiktok.webp" alt="tiktok" />
            </Link>
            <Link to="/">
              <img src="/icons/whatsapp.webp" alt="whatsapp" />
            </Link>
            <Link to="/">
              <img src="/icons/youtube.webp" alt="youtube" />
            </Link>
          </div>
          <div>
            <p className="text-[#ffffff]">© Start, 2022. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
