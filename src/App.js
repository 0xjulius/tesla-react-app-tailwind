import Model from "./components/Model";
import Navbar from "./components/Navbar";
import Creator from "./components/Creator";

function App() {
  return (
    <div className="bg-[url('https://digitalassets-secure.tesla.com/image/upload/v1693299003/y3owuyq6ex5uqtygbhm8.jpg')] lg:bg-[url('https://digitalassets-secure.tesla.com/image/upload/v1693299003/y3owuyq6ex5uqtygbhm8.jpg')] h-screen bg-cover bg-center">
    <Navbar />
    <Model />
    <Creator />
    </div>
  );
}

export default App;
