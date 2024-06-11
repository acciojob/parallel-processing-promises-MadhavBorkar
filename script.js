//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const imageUrls = [
      { url: "https://picsum.photos/id/237/200/300" },
	  { url: "https://picsum.photos/id/238/200/300" },
	  { url: "https://picsum.photos/id/239/200/300" },
    ];

    document.getElementById('download-images-button').addEventListener('click', downloadImages);

    function downloadImages() {
      const promises = imageUrls.map(imgObj => downloadImage(imgObj.url));

      Promise.all(promises)
        .then(images => {
          const output = document.getElementById('output');
          output.innerHTML = ''; // Clear any previous images
          images.forEach(img => output.appendChild(img));
        })
        .catch(error => {
          console.error(error);
          alert(error);
        });
    }

    function downloadImage(url) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(`Failed to load image's URL: ${url}`));
      });
    }