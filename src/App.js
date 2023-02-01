import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Header,
  Feed,
  Profile,
  SearchResult,
  VideoDetails,
} from "./utils/constants";

function App() {
  return (
    <>
      <Router>
        <div className="flex flex-col h-full">
          <Header />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="account" exact element={<Profile />} />
            {/* SearchFeed */}
            <Route
              path="/searchResult/:searchQuery"
              element={<SearchResult />}
            />
            <Route path="/video/:id" element={<VideoDetails />} />
            {/* <Route path="/channel/:id" element={<ChannelDetail />} /> */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
