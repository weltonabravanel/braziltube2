import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import SearchResultVideoCard from "./SearchResultVideoCard";
import {
  YOUTUBE_SEARCH_VIDEO_API,
  YOUTUBE_SEARCH_VIDEO_ID_API,
} from "../utils/constants";

const SearchResultVideoContainer = () => {
  let [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search_query");
  const [videoIdList, setVideoIdList] = useState([]);
  const [searchVideosResult, setSearchVideosResult] = useState([]);
  const [nextToken, setNextToken] = useState("");
  const [page, setPage] = useState(1);

  console.log(videoIdList, page, "LIST");

  console.log(searchVideosResult, "VIDEO SEARCH RESULTS");
  console.log(nextToken, "TOKEN NAME");

  /** Reset when Search query change **/
  useEffect(() => {
    setSearchVideosResult([]);
    setVideoIdList([]);
    setNextToken("");
    setPage(1);
  }, [searchQuery]);

  /** Get video Id **/
  useEffect(() => {
    getSearchVideosWithId();
    console.log("CALL API -- 1");
  }, [searchQuery, page]);

  const getSearchVideosWithId = async () => {
    const data = await fetch(
      YOUTUBE_SEARCH_VIDEO_ID_API(searchQuery, nextToken)
    );
    const json = await data.json();
    // setVideoIdList([
    //   ...new Set(
    //     json.items
    //       ?.map((searchVideo) => searchVideo?.id?.videoId)
    //       .filter((item) => item !== undefined)
    //   ),
    // ]);
    console.log(json, "JSON");
    setVideoIdList(
      json.items
        ?.map((searchVideo) => searchVideo?.id?.videoId)
        .filter((item) => item !== undefined)
    );

    setNextToken(json.nextPageToken);
  };

  /** Get video with details **/
  useEffect(() => {
    getSearchVideos();
    console.log("CALL API -- 2");
  }, [videoIdList]);

  const getSearchVideos = async () => {
    const data = await fetch(YOUTUBE_SEARCH_VIDEO_API(videoIdList.toString()));
    const json = await data.json();
    setSearchVideosResult([...searchVideosResult, ...json.items]);
  };

  /** Is bottom ? **/
  useEffect(() => {
    console.log("CALL API -- 3");

    function handleScroll() {
      const isBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight;

      if (isBottom) {
        setPage((prevPage) => prevPage + 1);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pl-16">
      {searchVideosResult.map((video, index) => (
        <Link key={video?.id + index} to={"/watch?v=" + video?.id}>
          <SearchResultVideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default SearchResultVideoContainer;
