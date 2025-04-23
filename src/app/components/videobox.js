import "../styles/style.css";
import { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

function VideoBox() {
    const [toggler, setToggler] = useState(false);

    return (
        <>
            <div className="video-box" style={{ position: "relative" }}>
                <Image
                    src="/assets/img/palm-oil.jpg"
                    className="img-fluid"
                    alt=""
                    height={500}
                    width={500}
                    style={{ width: "100%", height: "auto" }}
                />
                <button
                    onClick={() => setToggler(!toggler)}
                    className="venobox play-btn mb-4"
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        background: "rgba(0, 0, 0, 0.6)",
                        color: "#fff",
                        border: "none",
                        borderRadius: "50%",
                        padding: "15px 20px",
                        cursor: "pointer",
                    }}
                >
                    ▶
                </button>
                <FsLightbox
                    toggler={toggler}
                    sources={["https://youtu.be/x02JIIgVTzc"]}
                    autoplay
                    
                />
            </div>
        </>
    );
}

export default VideoBox;