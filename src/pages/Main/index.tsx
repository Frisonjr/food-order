import { Outlet } from "react-router-dom";
import { MyOrder } from "../../components/MyOrder";
import { Sidebar } from "../../components/Sidebar";
import { Container } from "./styles";
import logoImg from "../../assets/logo.svg";

export const MainPage = () => {
  return (
    <Container>
      <Sidebar />
      <section>
        <img src={logoImg} />
        <Outlet />
      </section>
      <MyOrder />
    </Container>
  );
};
