import React, { useState, useRef } from "react";
import { Eye } from "lucide-react";

const CameraPreviewButton = ({ onStart, onStop }) => {
  const [isPreviewing, setIsPreviewing] = useState(false);
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
      }
      onStart(); // Notify parent component
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
    onStop(); // Notify parent component
  };

  const togglePreview = async () => {
    if (!isPreviewing) {
      await startCamera();
    } else {
      stopCamera();
    }
    setIsPreviewing(!isPreviewing);
  };

  return (
    <>
      <button onClick={togglePreview} className="btn btn-secondary mt-3 d-flex align-items-center justify-content-center">
        <Eye size={20} className="me-2" />
        {isPreviewing ? "Stop Preview" : "Preview Camera"}
      </button>
      <video ref={videoRef} autoPlay className="w-100 h-100 mt-2" style={{ display: isPreviewing ? "block" : "none", objectFit: "cover", borderRadius: "8px" }} />
    </>
  );
};

export default CameraPreviewButton;
