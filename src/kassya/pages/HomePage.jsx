import { Banner, HotSale, Info, Navbar, PaymentMethods } from "../components";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <PaymentMethods />
      <HotSale />
      <Info/>
    </>
  );
};

export default HomePage;
