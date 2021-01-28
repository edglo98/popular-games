import { AuthUserContext } from './context/UserContext';
import AuthRoutes from './routes/AuthRoutes'
function App() {
  
  return (
    <AuthUserContext>
      <AuthRoutes />
    </AuthUserContext>
  );
  
}

export default App;
