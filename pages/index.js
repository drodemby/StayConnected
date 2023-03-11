import { useAuth } from '../utils/context/authContext';
import cotwgi from '../images/cotwgi.png';

function Home() {
  const { user } = useAuth();

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        backgroundImage: cotwgi,
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Hello {user.displayName}! </h1>
      <p>Welcome to MyChurchApp</p>
    </div>
  );
}

export default Home;
