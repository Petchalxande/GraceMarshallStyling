// Fades out all commercial images when toggled on
function toggleEditorial() {
    let commercial_images = Array.from(document.getElementsByClassName('commercial-image'));
    const button = document.getElementById('editorial-toggle')

    commercial_images.forEach((image) => {
        image.classList.toggle('opacity-25');
        image.classList.toggle('opacity-100');
      });
      
    // Toggle button 'toggled' status
    button.classList.toggle('toggled-on')
  }


// Fades out all editorial images when toggled on
function toggleCommercial() {
    let editorial_images = Array.from(document.getElementsByClassName('editorial-image'));
    const button = document.getElementById('commercial-toggle')
    
    editorial_images.forEach((image) => {
        image.classList.toggle('opacity-25');
        image.classList.toggle('opacity-100');
      });
      
    // Toggle button 'toggled' status
    button.classList.toggle('toggled-on')
  }