import { useState } from 'react';
import { UserContext } from './context/UserContext';
import AuthRoutes from './routes/AuthRoutes'
function App() {
  
  const [ user, setUser ] = useState({
    id: null,
    logedin: false
  })

  return (
    <UserContext.Provider value={{ user, setUser }} >
      <AuthRoutes />
    </UserContext.Provider>
  );
}

export default App;
