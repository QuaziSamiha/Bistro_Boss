import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="text-white">
        <div className="footer flex justify-center p-10 bg-[#111827]">
          <div className="mr-24">
            <div className="text-center text-md">
              <p className="uppercase text-xl font-medium mb-2">contact us</p>
              <p className="pb-1">123 ABS Street, Uni 21, Bangladesh</p>
              <p className="pb-1">+88 123456789</p>
              <p className="pb-1">Mon - Fri: 08:00 - 22:00</p>
              <p className="pb-1"> Sat - Sun: 10:00 - 23:00</p>
            </div>
          </div>
          <div className="ml-24">
            <div className="text-center">
              <h1 className="uppercase text-xl font-medium mb-2">follow us</h1>
              <p className="text-md mb-2">Join us on social media</p>
              <div className="flex justify-around mt-4">
                <FaFacebookF className="h-6 w-6"/>
                <FaInstagram className="h-6 w-6"/>
                <FaTwitter className="h-6 w-6"/>
              </div>
            </div>
          </div>
        </div>
        <div className="footer footer-center p-4 bg-[#151515]  font-medium">
          <aside>
            <p>Copyright © {currentYear} - All right reserved by Bistro Boss</p>
          </aside>
        </div>
      </footer>
    </>
  );
};

export default Footer;
