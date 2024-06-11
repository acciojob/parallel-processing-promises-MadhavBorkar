//your JS code here. If required.
const imageUrls = [
      { url: 'https://example.com/image1.jpg' },
      { url: 'https://example.com/image2.jpg' },
      { url: 'https://example.com/image3.jpg' }
      // Add more image URLs here
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