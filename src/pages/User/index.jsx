import LayoutContainer from "../../components/LayoutContainer";
import Card from "../../components/Card";

const User = ({ user }) => {
  return (
    <LayoutContainer>
      <Card user={user} />
    </LayoutContainer>
  );
};

export default User;
