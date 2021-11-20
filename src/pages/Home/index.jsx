import { Link } from "react-router-dom";

import LayoutContainer from "../../components/LayoutContainer";

const Home = () => {
  return (
    <LayoutContainer>
      <Link to="/singup">Cadastrar-se</Link>
    </LayoutContainer>
  );
};

export default Home;
