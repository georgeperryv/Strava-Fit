import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LibraryHome from "./pages/LibraryHome";
import GuidedWorkoutDetailsDeskto from "./pages/GuidedWorkoutDetailsDeskto";
import LibraryHomeDesktopLarge from "./pages/LibraryHomeDesktopLarge";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/guided-workout-details":
        title = "";
        metaDescription = "";
        break;
      case "/library-home-desktop-large":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LibraryHome />} />
      <Route
        path="/guided-workout-details"
        element={<GuidedWorkoutDetailsDeskto />}
      />
      <Route
        path="/library-home-desktop-large"
        element={<LibraryHomeDesktopLarge />}
      />
    </Routes>
  );
}
export default App;
