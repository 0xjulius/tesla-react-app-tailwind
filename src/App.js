import Model from "./components/Model";
import Navbar from "./components/Navbar";
import Creator from "./components/Creator";

function App() {
  return (
    <div className="bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/92cbede0-6d73-4753-a640-7d2acbcd9f3f/bvlatuR/std/1927x4096/Homepage-Model-3-LHD-Mobile')] lg:bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/a269d7b4-87a9-4057-9ac5-2565e56a188e/bvlatuR/std/4096x2560/Homepage-Model-3-Desktop-LHD')] h-screen bg-cover bg-center">
    <Navbar />
    <Model />
    <Creator />
    </div>
  );
}

export default App;
