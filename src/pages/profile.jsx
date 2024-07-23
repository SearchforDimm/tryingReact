import { useLogin } from "../hooks/useLogin";

const ProfilePage = () => {
  const username = useLogin();
  return (
    <div className="profile">
      <h1>Profile</h1>
      Username: {username}
    </div>
  );
};

export default ProfilePage;
