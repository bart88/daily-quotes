import { useEffect, useRef } from "react";
import whatAreYouDoing from "../assets/what-are-you-doing.mp4";

export function RandomVideoBox() {
  const vidRef = useRef<HTMLVideoElement>();

  useEffect(() => {
    if (vidRef.current) {
      vidRef.current.play();
    }
  }, [vidRef]);

  return (
    <div className="absolute bottom-0 right-0">
      <video
        ref={vidRef}
        width="600"
        height="300"
        controls={true}
        autoPlay={true}
        muted
      >
        <source src={whatAreYouDoing} type="video/mp4" />
      </video>
    </div>
  );
}
