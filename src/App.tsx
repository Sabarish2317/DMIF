import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import { APPROUTES } from "./Routes/appRoutes";
import { MainLayout } from "./Layout/MainLayout";
import Programs from "./Pages/Programs";
import Error from "./Pages/Error";
import { Contact } from "./Pages/Contact";
import About from "./Pages/About";
import WhyItMatters from "./Pages/WhyItMatters";
import ScrollToTop from "./utils/Navigate";
import ScrollToTopButton from "./Components/Common/ScrollToTopButton";
import { FeatureContent } from "./Pages/FeatureDetails";
import FAQ from "./Pages/Faq";
import ApplyNowForm from "./Pages/ApplyNow";
import HallOfFrames from "./Section/HallOfFrames/HallOfFrames";
import CertificationsPage from "./Section/Certifications/Certifications";
import Landing from "./Pages/NewPage";

function App() {
  return (
    <>
      <MainLayout>
        <ScrollToTop />
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path={APPROUTES.HOME} element={<Home />} />
          <Route path={"/test"} element={<Landing />} />
          <Route path={APPROUTES.G_GMPS} element={<Programs />} />
          <Route path={APPROUTES.CONTACT_US} element={<Contact />} />
          <Route path={APPROUTES.ABOUT} element={<About />} />
          <Route path={APPROUTES.WHY_IT_MATTERS} element={<WhyItMatters />} />
          <Route
            path={`${APPROUTES.FEATURE_DETAILS}`}
            element={<FeatureContent />}
          />
          <Route
            path={APPROUTES.CERTIFICATIONS}
            element={<CertificationsPage />}
          />
          <Route path={APPROUTES.FAQ} element={<FAQ />} />
          <Route path={APPROUTES.HALL_OF_FAMES} element={<HallOfFrames />} />
          <Route path={APPROUTES.APPLY_NOW} element={<ApplyNowForm />} />
        </Routes>
        <ScrollToTopButton />
      </MainLayout>
    </>
  );
}

export default App;
