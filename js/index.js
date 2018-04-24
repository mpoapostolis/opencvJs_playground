function onOpenCvReady() {
  const inputElement = document.getElementById('fileInput');
  inputElement.addEventListener('change', e => {
    let img = new Image();
    img.src = URL.createObjectURL(e.target.files[0]);
    img.onload = function() {
      let src = cv.imread(img);
      let dst = new cv.Mat();

      let low = new cv.Mat(src.rows, src.cols, src.type(), [0, 0, 0, 0]);
      let high = new cv.Mat(src.rows, src.cols, src.type(), [
        255,
        255,
        150,
        255,
      ]);
      cv.inRange(src, low, high, dst);

      cv.imshow('canvasIn', src);
      cv.imshow('canvasOut', dst);
      src.delete();
      dst.delete();
    };
  });
  document.getElementById('status').innerHTML = 'OpenCV.js is ready.';
}
