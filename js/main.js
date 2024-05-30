// main.js

window.addEventListener('DOMContentLoaded', () => {
  const infoContainer = document.getElementById('info-container');
  const infoTitle = document.getElementById('info-title');
  const infoText = document.getElementById('info-text');
  const infoImage = document.getElementById('info-image');

  const markers = [
    {
      id: 'marker1',
      title: 'Pipe Information 1',
      text: 'This is the description of the first pipe system.',
      image: 'images/info1.png'
    }
  ];

  markers.forEach(marker => {
    const markerElement = document.getElementById(marker.id);
    markerElement.addEventListener('markerFound', () => {
      console.log(`${marker.title} found`);
      infoTitle.textContent = marker.title;
      infoText.textContent = marker.text;
      infoImage.src = marker.image;
      infoContainer.style.display = 'block';
    });

    markerElement.addEventListener('markerLost', () => {
      console.log(`${marker.title} lost`);
      infoContainer.style.display = 'none';
    });
  });
});
