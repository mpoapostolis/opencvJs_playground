function onOpenCvReady() {
  const inputElement = document.getElementById('fileInput');
  let grayMat = new cv.Mat();
  let faceCascade = new cv.CascadeClassifier();
  if (faceCascade.load('haarcascade_frontalface_default'))
    console.log('ok');
  else console.log('fuck offs');

  let msize = new cv.Size(0, 0);
  let faces = new cv.RectVector();

  // inputElement.addEventListener('change', e => {
  // const url = URL.createObjectURL(e.target.files[0]);
  const img = new Image();
  img.src = 'lena.png';
  img.onload = function() {
    const imgMat = cv.imread(img);
    cv.cvtColor(imgMat, grayMat, cv.COLOR_RGBA2GRAY);
    // faceCascade.detectMultiScale(grayMat, faces, 1.1, 3, 0, msize, msize);

    // cv.imshow('canvasIn', imgMat);
    // cv.imshow('canvasOut', grayMat);
    faceCascade.delete();
    imgMat.delete();
    grayMat.delete();
  };
  // });
  document.getElementById('status').innerHTML = 'OpenCV.js is ready.';
}
