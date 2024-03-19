import "./App.css";
import MobileDisplayContextProvider from "./Context/MobileDisplay.content";
import AppWithRouteAccess from "./Routes/AppWithRouteAccess";

function App() {
  return (
    <MobileDisplayContextProvider>
      <AppWithRouteAccess />
    </MobileDisplayContextProvider>
  );
}

export default App;
