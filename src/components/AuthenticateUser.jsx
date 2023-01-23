import { useAuth0 } from "@auth0/auth0-react";

/* Component children */
const LogIn = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="fixed text-end hidden sm:block">
      <button
        onClick={() => {
          loginWithRedirect();
        }}
        className="bg-blue-400 h-10 px-4 rounded text-white font-bold"
      >
        Iniciar Sesion
      </button>
    </div>
  );
};

/* Component children */
const Logout = () => {
  const { logout } = useAuth0();
  return (
    <div className="fixed text-end hidden sm:block">
      <button
        className=" bg-red-500 h-10 px-4 rounded text-white font-bold"
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        Salir
      </button>
    </div>
  );
};

/* Component main */
function AuthenticateUser() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  
  return !isAuthenticated ? <LogIn /> : <Logout />;
}
export default AuthenticateUser;
