import "./App.css";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { SignupCard } from "./components/SignupCard";

function App() {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col">
      <Navbar />
      <main className="flex flex-1 items-center justify-center p-4">
        <SignupCard />
      </main>
      <Footer />
    </div>
  );
}

export default App;
