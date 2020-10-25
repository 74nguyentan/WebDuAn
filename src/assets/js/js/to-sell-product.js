function ImagesFileAsURL() {
  var fileSelected = document.getElementById('upload').files;
  if (fileSelected.length > 0) {
      for (var i = 0; i < fileSelected.length; i++) {
          var fileToLoad = fileSelected[i];
          var fileReader = new FileReader();
          fileReader.onload = function(fileLoaderEvent) {
              var srcData = fileLoaderEvent.target.result;
              var newImage = document.createElement('img');
              newImage.src = srcData;
              document.getElementById('displayImgzzz').innerHTML += newImage.outerHTML;
          }
          fileReader.readAsDataURL(fileToLoad);
      }

  }
}


$("#input-fa").fileinput({
  theme: "fa",
  uploadUrl: "/file-upload-batch/2"
});
