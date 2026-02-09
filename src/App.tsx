import { BrowserRouter, Routes, Route } from "react-router-dom";
import SpaceLayout from "./components/SpaceLayout";
import Home from "./pages/Home";
import Universities from "./pages/Universities";
import UniversityDetail from "./pages/UniversityDetail";
import Solutions from "./pages/Solutions";
import SolutionsByUni from "./pages/SolutionsByUni";
import SolutionsByTrack from "./pages/SolutionsByTrack";
import SolutionsByDept from "./pages/SolutionsByDept";
import SolutionsYear from "./pages/SolutionsYear";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <SpaceLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/universities" element={<Universities />} />
          <Route path="/universities/:slug" element={<UniversityDetail />} />

          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/:uniSlug" element={<SolutionsByUni />} />
          <Route path="/solutions/:uniSlug/:track" element={<SolutionsByTrack />} />
          <Route path="/solutions/:uniSlug/:track/:deptSlug" element={<SolutionsByDept />} />
          <Route path="/solutions/:uniSlug/:track/:deptSlug/:year" element={<SolutionsYear />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </SpaceLayout>
    </BrowserRouter>
  );
}
