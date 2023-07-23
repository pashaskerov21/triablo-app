import SiteLayout from "./components/SiteLayout";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";



function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <SiteLayout />
    </>
  );
}

export default App;
