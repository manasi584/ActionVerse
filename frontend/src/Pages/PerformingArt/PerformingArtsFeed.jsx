import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Nav } from "react-bootstrap";
import Topbar from "../../components/Topbar/Topbar";
import Footer from "../../components/Footer/Footer"
import {sampleVideos} from "../../Context/PerformingArtContext"



const PerformingArtsFeed = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <>
      <Topbar/>
      <div
        className="container py-4"
        style={{
          fontFamily: "Poppins, sans-serif",
          background: "linear-gradient(135deg, #ff7e5f, #ff3f3f)",
          borderRadius: "10px",
          padding: "20px",
          marginTop:"20px"
        }}
      >
        <h2 className="text-center text-white mb-4">
         Performing Arts Corner
        </h2>
        <div className="row">
          {sampleVideos.map((video) => (
            <div key={video.id} className="col-md-4 mb-4">
              <div
                className="card shadow-lg border-0"
                style={{
                  borderRadius: "15px",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "transform 0.3s ease",
                }}
                onClick={() => setSelectedVideo(video.videoUrl)}
              >
                <img
                  src={video.thumbnail}
                  className="card-img-top"
                  alt={video.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div
                  className="card-body bg-white"
                  style={{ borderRadius: "0 0 15px 15px" }}
                >
                  <h5 className="card-title text-dark">{video.title}</h5>
                  <p className="text-muted">{video.views}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Video Playback */}
        <Modal
          show={!!selectedVideo}
          onHide={() => setSelectedVideo(null)}
          centered
        >
          <Modal.Body className="p-0" style={{ borderRadius: "15px" }}>
            {selectedVideo && (
              <iframe
                width="100%"
                height="400"
                src={selectedVideo}
                title="Video Player"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            )}
          </Modal.Body>
        </Modal>
      </div>
      <Footer></Footer>
    </>
  );
};

export default PerformingArtsFeed;
