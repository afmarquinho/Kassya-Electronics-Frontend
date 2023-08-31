import { Banner, HotSale, Navbar, PaymentMethods } from "../components";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <PaymentMethods />
      <HotSale />
    </>
  );
};

export default HomePage;
