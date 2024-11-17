import { Routes, Route } from "react-router-dom";
import Spline from '@splinetool/react-spline';
import Main from './layout/main';
import ContactForm from "./pages/ContactForm";
import ViewContact from "./pages/ViewContact";

const App = () => {

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
          <Route path="view-contact" element={<ViewContact />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
