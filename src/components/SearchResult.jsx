import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useApiContext } from "../hooks/useApiContext";
import { fetchDataFromApi } from "../utils/api";
import LeftNav from "./LeftNav";
import SearchResultVideoCard from "./SearchResultVideoCard";

const SearchResult = () => {
  const [result, setResult] = useState();
  const { searchQuery } = useParams();
  const { setLoading } = useApiContext();

  useEffect(() => {
    const abortCont = new AbortController();
    document.getElementById("root").classList.remove("custom-h");
    fetchSearchResults();
    return () => abortCont.abort();
  }, [searchQuery]);

  const fetchSearchResults = () => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${searchQuery}`).then((res) => {
      console.log(res.contents);
      setResult(res?.contents);
      setLoading(false);
    });
    setLoading(false);
  };

  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <LeftNav />
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
        <div className="grid grid-cols-1 gap-2 p-5">
          {result?.length &&
            result.map((item) => {
              if (item?.type !== "video") return false;
              return (
                <SearchResultVideoCard
                  key={item?.video?.videoId}
                  video={item?.video}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
