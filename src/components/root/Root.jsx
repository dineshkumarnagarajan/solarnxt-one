import React from "react";
import Box from "@mui/material/Box";
import { Routes, Route } from "react-router-dom";
import TaskView from "../taskview/TaskView";
import PlantView from "../plantview/PlantView";
import PageNotFound from "../pageNotFound/PageNotFound";
import NoDataPage from "../noDataPage/NoDataPage";
import ComingSoonPage from "../comingSoonPage/ComingSoonPage";
import OpsDashboard from "../opsDashboard/OpsDashboard";

function Root() {
  return (
    <div>
    <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
      <Routes>
        <Route path={`/`} element={<PlantView />} />
        <Route path={`/TeamProgress`} element={<TaskView />} />
        <Route path={`/Statistics`} element={<OpsDashboard />} />
        <Route path={`/Logout`} element={<ComingSoonPage />} />
        <Route path={`*`} element={<PageNotFound />} />
        <Route path={`/overviewError`} element={<NoDataPage />} />
        <Route path={`/comingSoon`} element={<ComingSoonPage />} />
        <Route path={`/Functions`} element={<ComingSoonPage />} />
        <Route path={`/Plots`} element={<ComingSoonPage />} />
        <Route path={`/Data`} element={<ComingSoonPage />} />
      </Routes>
      </Box>
    </div>
  );
}

export default Root;
