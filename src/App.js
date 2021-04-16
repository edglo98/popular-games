import { AuthUserContext } from './context/UserContext';
import AuthRoutes from './routes/AuthRoutes'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  return (
    <AuthUserContext>
      <AuthRoutes />
    </AuthUserContext>
  );
  
}

export default App;
