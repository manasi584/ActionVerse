import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from "../../components/Topbar/Topbar";
import Footer from "../../components/Footer/Footer"
import {sampleLiveStreams} from "../../Context/LivestreamContext"


const Livestream = () => {
  const [liveStreams, setLiveStreams] = useState([]);
  useEffect(() => {
    setLiveStreams(sampleLiveStreams);
  }, []);

  return (
    <>
    <Topbar />
      <div
        className="container py-5"
        style={{
          fontFamily: "Poppins, sans-serif",
          background: "linear-gradient(135deg, #ff7e5f, #ff3f3f)",
          borderRadius: "10px",
          padding: "20px",
          marginTop:"20px"
        }}
      >
        <h1 className="text-center mb-4 text-white">Ongoing Live Streams</h1>
        <div className="row">
          {liveStreams.length > 0 ? (
            liveStreams.map((stream) => (
              <div key={stream.id} className="col-md-4 mb-4">
                <div
                  className="card shadow-sm border-0"
                  style={{ borderRadius: "15px" }}
                >
                  <img
                    src={
                      stream.thumbnail ||
                      "https://via.placeholder.com/300x200?text=No+Image"
                    }
                    className="card-img-top"
                    alt={stream.title}
                    style={{
                      height: "200px",
                      objectFit: "cover",
                      borderTopLeftRadius: "15px",
                      borderTopRightRadius: "15px",
                    }}
                  />
                  <div className="card-body" style={{ backgroundColor: "#fff7f2" }}>
                    <h5 className="card-title text-dark">{stream.title}</h5>
                    <p className="card-text text-muted">By {stream.artist}</p>
                    <p className="text-danger">🎥 {stream.viewers} watching</p>
                    <button
                      className="btn w-100"
                      style={{
                        backgroundColor: "#ff3f3f",
                        color: "white",
                        borderRadius: "10px",
                      }}
                    >
                      Watch Live
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-white">No live performances currently streaming.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Livestream;
