import React, { useState } from 'react';
import { Camera } from 'lucide-react';
import { toPng } from 'html-to-image';

export default function CaptureButton() {
  const [capturing, setCapturing] = useState(false);

  const handleCapture = async () => {
    try {
      setCapturing(true);
      
      const rootEl = document.getElementById('root') || document.body;
      // Get the first child of root if it exists to get the actual page container
      const targetEl = rootEl.firstElementChild as HTMLElement || rootEl;

      // Temporarily remove sticky classes or fix layout for capture
      document.body.classList.add('capturing-mode');

      // Wait for layout to settle
      await new Promise(r => setTimeout(r, 400));
      
      const captureWidth = targetEl.offsetWidth; 
      const captureHeight = targetEl.scrollHeight;
      const computedStyle = window.getComputedStyle(targetEl);
      const bgColor = computedStyle.backgroundColor === 'rgba(0, 0, 0, 0)' || computedStyle.backgroundColor === 'transparent' ? '#ffffff' : computedStyle.backgroundColor;

      const dataUrl = await toPng(targetEl, {
        pixelRatio: 2,
        width: captureWidth,
        height: captureHeight,
        backgroundColor: bgColor,
        style: {
          transform: 'none',
          padding: '0',
          margin: '0',
          width: `${captureWidth}px`,
        }
      });
      
      document.body.classList.remove('capturing-mode');
      
      const link = document.createElement('a');
      link.download = `madingembira_capture_${new Date().getTime()}.png`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error('Error capturing screen:', error);
    } finally {
      setCapturing(false);
    }
  };

  if (capturing) return null;

  return (
    <button
      onClick={handleCapture}
      className="fixed bottom-4 right-4 z-[9999] p-3 bg-teal-500 text-white rounded-full shadow-lg hover:bg-teal-600 hover:scale-105 active:scale-95 transition-all opacity-80 hover:opacity-100"
      title="Ambil Gambar Layar"
    >
      <Camera className="w-5 h-5" />
    </button>
  );
}
