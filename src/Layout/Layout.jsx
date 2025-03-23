import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const Layout = () => {
  return (
    <main className="max-w-[1440px] mx-auto">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </main>
  )
}

export default Layout