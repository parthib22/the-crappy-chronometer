// Main entry point for Webpack
import QRCode from "qrcode";
import "./styles.css";

// QR Code generator using the qrcode library
function generateQRCode(text, element) {
  // Clear the element first
  element.innerHTML = "";

  // Generate QR code using the library
  QRCode.toCanvas(text, { width: 200, margin: 2 }, function (error, canvas) {
    if (error) {
      console.error("QR Code generation error:", error);
      // Fallback: show time as text
      element.innerHTML = `<div style="width:200px;height:200px;background:white;color:black;display:flex;align-items:center;justify-content:center;font-size:14px;text-align:center;padding:20px;border-radius:8px;">
                <div>
                    <div style="font-weight:bold;margin-bottom:10px;">SCAN TO VIEW TIME</div>
                    <div style="font-size:16px;">${text}</div>
                </div>
            </div>`;
    } else {
      console.log("QR code generated successfully");
      canvas.style.borderRadius = "8px";
      element.appendChild(canvas);
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded");
  const qrCodeElement = document.getElementById("qrcode");

  function updateQRCode() {
    const now = new Date();
    const time = now.toLocaleTimeString().toLowerCase();
    console.log("Updating with time:", time);

    // Generate QR code using the qrcode library
    generateQRCode(time, qrCodeElement);
  }

  // Update immediately
  updateQRCode();

  // Update every second
  setInterval(updateQRCode, 1000);
});
