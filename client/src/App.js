import "./App.css";
import { Outlet } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Toaster className="overflow-hidden bg-primary" />
      <main className="App">
        <Outlet />
      </main>
    </>
  );
}

export default App;
