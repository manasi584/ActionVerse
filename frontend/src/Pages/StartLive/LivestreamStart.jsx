import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, Circle } from "lucide-react";
import { motion } from "framer-motion";
import CameraPreviewButton from "./CameraPreviewButton";
import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from "../../components/Topbar/Topbar";
import Footer from "../../components/Footer/Footer";

const LivestreamStart = () => {
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamTime, setStreamTime] = useState(0);
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isStreaming) {
      startCamera();
      timerRef.current = setInterval(() => {
        setStreamTime((prev) => prev + 1);
      }, 1000);
    } else {
      stopCamera();
      clearInterval(timerRef.current);
      setStreamTime(0);
    }

    return () => clearInterval(timerRef.current);
  }, [isStreaming]);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
      }
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  };

  const toggleStream = async () => {
    if (!isStreaming) {
      await startCamera();
    } else {
      stopCamera();
    }
    setIsStreaming((prev) => !prev);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <>
    <Topbar/>
     <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="d-flex flex-column align-items-center justify-content-center py-4"
    >
      <div
        className="card bg-dark text-white shadow-lg"
        style={{ maxWidth: "600px", width: "100%", borderRadius: "12px", overflow: "hidden" }}
      >
        <div className="card-body text-center">
          <div
            className="position-relative w-100"
            style={{
              height: "300px",
              backgroundColor: "#000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {isStreaming ? (
              <video ref={videoRef} autoPlay className="w-100 h-100" style={{ objectFit: "cover" }} />
            ) : (
              <div className="w-100 h-100 d-flex align-items-center justify-content-center bg-secondary">
                <p className="text-light">Livestream is currently off</p>
              </div>
            )}
            {isStreaming && (
              <div className="position-absolute top-0 start-0 p-2 d-flex align-items-center gap-2">
                <Circle size={10} className="text-danger blink" />
                <span className="fw-bold text-danger">LIVE</span>
                <span className="text-light ms-2">{formatTime(streamTime)}</span>
              </div>
            )}
          </div>

          {/* Preview Button Component */}
          {!isStreaming && <CameraPreviewButton onStart={() => {}} onStop={() => {}} />}

          {/* Start/Stop Stream Button */}
          <button onClick={toggleStream} className="btn btn-primary mt-3 d-flex align-items-center justify-content-center">
            {isStreaming ? <Pause size={20} className="me-2" /> : <Play size={20} className="me-2" />}
            {isStreaming ? " Stop Stream" : " Start Stream"}
          </button>
        </div>
      </div>

      {/* CSS for Blinking "LIVE" Indicator */}
      <style>
        {`
          .blink {
            animation: blink-animation 1s infinite;
          }
          @keyframes blink-animation {
            0% { opacity: 1; }
            50% { opacity: 0.3; }
            100% { opacity: 1; }
          }
        `}
      </style>
    </motion.div>
    <Footer/>
    </>
   
  );
};

export default LivestreamStart;
