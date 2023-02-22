import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import SuggestionVideoContainer from "./SuggestionVideoContainer";
import WatchVideoDetails from "./WatchVideoDetails";
import CommentsContainer from "./CommentsContainer ";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  let [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex px-20 justify-center m absolute -z-10 w-full">
      <div>
        <iframe
          className="px-6 py-4 "
          width="900"
          height="515"
          src={
            "https://www.youtube.com/embed/" +
            searchParams.get("v") +
            "?autoplay=1"
          }
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <WatchVideoDetails />
        <CommentsContainer />
      </div>

      <div>
        <LiveChat />
        <SuggestionVideoContainer />
      </div>
    </div>
  );
};

export default WatchPage;
