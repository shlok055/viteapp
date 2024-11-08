import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} className="w-80" />
          <p className="my-5">
          Having both a mobile app and a website for your business can provide a comprehensive online presence that offers 
          various benefits. Here's how each platform can benefit your business.
          </p>
          <p>©Copyright @2024 Mobile App Bnao. All Rights Reserved by Vigor Enterprise</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">About Us</p>
          <p className="my-5">Contact Us</p>
          <p className="my-5">Privacy Policy</p>
          <p className="my-5">Terms & Condition</p>
          <p className="my-5">Return & Refund Policy</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Useful Links</h4>
          <p className="my-5">E-Com Mobile App Trail</p>
          <p className="my-5">Partner Sign-up</p>
          <p className="my-5">Wholesale Module</p>
          <p className="my-5">Affiliate with us</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
