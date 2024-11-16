import { Routes, Route } from "react-router-dom";
import ContactForm from "./pages/ContactForm";
import Spline from '@splinetool/react-spline';
import Main from './layout/main';

const App = () => {
  console.log(process.env.REACT_APP_BASE_URL)
  return (
    <div className="flex w-screen h-screen overflow-hidden">
      <main className="w-full">
        <Spline
          scene="https://prod.spline.design/UEJVMcA8n7-hw759/scene.splinecode"
        />
      </main>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<ContactForm />} />
          <Route path="view-contact" />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
