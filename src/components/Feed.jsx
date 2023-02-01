import React, { useEffect } from "react";
import { useApiContext } from "../hooks/useApiContext";
import VideoCard from "./VideoCard";
import LeftNav from "./LeftNav";

const Feed = () => {
  const { loading, searchResult } = useApiContext();

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
  }, []);

  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <LeftNav />
      <div className="grow w-[calc(100%-240px)] h-full ml-0 md:ml-[240px] overflow-y-auto bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {searchResult?.length &&
            searchResult.map((item) => {
              if (item?.type !== "video") return false;
              return (
                <VideoCard key={item?.video?.videoId} video={item?.video} />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Feed;
