import React, { useRef, useEffect, useState } from "react";
import { Pose } from "@mediapipe/pose";
import * as cam from "@mediapipe/camera_utils";

function VirtualDressingRoom() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [dressImages, setDressImages] = useState([]);
  const [currentDressIndex, setCurrentDressIndex] = useState(0);
  const [cameraReady, setCameraReady] = useState(false);
  const outfitImage = useRef(new Image());
  const cameraRef = useRef(null);
  const [isCustomImage, setIsCustomImage] = useState(false);

const changeDress = (direction) => {
    setCurrentDressIndex((prevIndex) => {
      const newIndex = (prevIndex + direction + dressImages.length) % dressImages.length;
      return newIndex;
    });
  };

  const takeScreenshot = () => {
    const canvas = canvasRef.current;
    const link = document.createElement("a");
    link.download = `virtual-outfit-${Date.now()}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      outfitImage.current.src = event.target.result;
      setIsCustomImage(true);
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    const loadDresses = async () => {
      const count = 4; // Adjust based on how many dresses you have
      const loaded = [];
      for (let i = 2; i <= count; i++) {
        loaded.push(`dress${i}.png`);
      }
      setDressImages(loaded);
    };
    loadDresses();
  }, []);

  useEffect(() => {
    if (dressImages.length > 0 && !isCustomImage) {
      outfitImage.current.src = `/virtual_dressing/dresses/${dressImages[currentDressIndex]}`;
    }
  }, [currentDressIndex, dressImages, isCustomImage]);

  useEffect(() => {
    const videoElement = videoRef.current;
    const canvasElement = canvasRef.current;
    const canvasCtx = canvasElement.getContext("2d");

    const pose = new Pose({
      locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`,
    });

    pose.setOptions({
      modelComplexity: 1,
      smoothLandmarks: true,
      enableSegmentation: false,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });

    pose.onResults((results) => {
      setCameraReady(true);
      canvasCtx.save();
      canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);

      canvasCtx.translate(canvasElement.width, 0);
      canvasCtx.scale(-1, 1);

      canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);

      const centerX = canvasElement.width / 2;
      const centerY = canvasElement.height / 2;
      const boxWidth = 180;
      const boxHeight = 400;

      canvasCtx.strokeStyle = "green";
      canvasCtx.lineWidth = 2;
      canvasCtx.strokeRect(centerX - boxWidth / 2, centerY - boxHeight / 2, boxWidth, boxHeight);

      if (results.poseLandmarks) {
        const lm = results.poseLandmarks;
        const ls = lm[11];
        const rs = lm[12];
        const lh = lm[23];
        const rh = lm[24];
        const la = lm[27];
        const ra = lm[28];
        const nose = lm[0];

        if (ls && rs && lh && rh && la && ra && nose) {
          const w = canvasElement.width;
          const h = canvasElement.height;

          const x1 = ls.x * w;
          const y1 = ls.y * h;
          const x2 = rs.x * w;
          const y2 = rs.y * h;
          const x3 = lh.x * w;
          const y3 = lh.y * h;
          const x4 = rh.x * w;
          const y4 = rh.y * h;
          const x7 = la.x * w;
          const y7 = la.y * h;
          const x8 = ra.x * w;
          const y8 = ra.y * h;

          const userX = (x1 + x2) / 2;
          const userY = (y1 + y3) / 2;

          const insideBox =
            userX > centerX - boxWidth / 2 &&
            userX < centerX + boxWidth / 2 &&
            userY > centerY - boxHeight / 2 &&
            userY < centerY + boxHeight / 2;

          if (insideBox) {
            const shoulderWidth = Math.abs(x2 - x1);
            const hipWidth = Math.abs(x4 - x3);
            const maxWidth = Math.max(shoulderWidth, hipWidth) + 200;

            const neckX = (x1 + x2) / 2;
            const neckY = nose.y * h + 10;

            const ankleY = (y7 + y8) / 2;
            const bodyHeight = ankleY - y1 + 50;

            if (maxWidth > 0 && bodyHeight > 0) {
              canvasCtx.drawImage(
                outfitImage.current,
                neckX - maxWidth / 2,
                neckY,
                maxWidth,
                bodyHeight
              );
            }
          }
        }
      }

      canvasCtx.restore();
    });

    if (videoElement) {
      const camInstance = new cam.Camera(videoElement, {
        onFrame: async () => {
          await pose.send({ image: videoElement });
        },
        width: 640,
        height: 480,
        facingMode: "user",
      });
      cameraRef.current = camInstance;
      camInstance.start();
    }

    return () => {
      if (cameraRef.current) {
        cameraRef.current.stop();
      }
    };
  }, [dressImages, currentDressIndex, isCustomImage]);

  return (
    <div className="flex flex-col items-center">
      {!cameraReady && <div className="text-lg text-gray-700 my-8">Loading camera...</div>}
      <video ref={videoRef} className="hidden" autoPlay playsInline muted />
      <canvas ref={canvasRef} width="640" height="480" className="border rounded-lg" />
      <p className="mt-4 text-sm text-gray-600">Stand inside the green box to try on the outfit.</p>
      <div className="mt-4 flex gap-4">
        <button
          className="px-4 py-2 bg-amber-800 text-white rounded hover:bg-amber-900"
          onClick={() => changeDress(-1)}
        >
          Previous
        </button>
        <button
          className="px-4 py-2 bg-amber-800 text-white rounded hover:bg-amber-900"
          onClick={() => changeDress(1)}
        >
          Next
        </button>
        <button
          className="px-4 py-2 bg-amber-800 text-white rounded hover:bg-amber-900"
          onClick={takeScreenshot}
        >
          Take Screenshot
        </button>
        <input
          type="file"
          accept="image/*"
          onChange={handleUpload}
          className="mt-2 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-amber-700 file:text-white hover:file:bg-amber-900"
        />
        {isCustomImage && (
          <button
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
            onClick={() => {
              setIsCustomImage(false);
              outfitImage.current.src = `/virtual_dressing/dresses/${dressImages[currentDressIndex]}`;
            }}
          >
            Reset Outfit
          </button>
        )}
      </div>
    </div>
  );
}

export default VirtualDressingRoom;
