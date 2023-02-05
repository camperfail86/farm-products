import Header from "../../layout/header/header.jsx";
import Footer from '../../layout/footer/footer.jsx'
import {WrapperMain} from './styles'
import { Outlet } from "react-router-dom";

export default function PageWrapper() {
  return (
    <>
      <Header />
      <WrapperMain>
        <Outlet />
      </WrapperMain>
      <Footer />
    </>
  )
}