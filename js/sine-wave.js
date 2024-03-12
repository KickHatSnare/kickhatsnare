const svgNS = "http://www.w3.org/2000/svg";
let phase = 0;
const amplitude = 30; // Amplitude of the sine wave
const frequency = 0.005; // Frequency of the sine wave
const sineWaveSVG = document.createElementNS(svgNS, "svg");
const path = document.createElementNS(svgNS, "path");

// Set the size of the SVG
sineWaveSVG.setAttribute("width", "100%");
sineWaveSVG.setAttribute("height", "100%");
sineWaveSVG.setAttribute(
  "viewBox",
  "0 0 " + window.innerWidth + " " + window.innerHeight
);
sineWaveSVG.appendChild(path);

document.getElementById("sine-wave").appendChild(sineWaveSVG);

function draw() {
  let d = "M 0 " + (window.innerHeight / 2).toString();

  for (let x = 0; x <= window.innerWidth; x++) {
    let y =
      Math.sin(x * frequency + phase) * amplitude + window.innerHeight / 2;
    d += " L " + x.toString() + " " + y.toString();
  }

  path.setAttribute("d", d);
  path.setAttribute("stroke", "#a1afff");
  path.setAttribute("stroke-width", "40");
  path.setAttribute("fill", "none");

  phase += 0.01;
  requestAnimationFrame(draw);
}

draw();

// Adjust the SVG viewbox on window resize
window.addEventListener("resize", () => {
  sineWaveSVG.setAttribute(
    "viewBox",
    "0 0 " + window.innerWidth + " " + window.innerHeight
  );
});
