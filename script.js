document.addEventListener('DOMContentLoaded', () => {
  let currentPage = 0;
  const pages = [
    // ... your existing pages array ...
  ];

  const flipBook = document.querySelector('.flipbook');
  const pageElement = document.createElement('div');
  const startButton = document.getElementById('startButton');
  const audio = document.getElementById('bgMusic');
  const audioControl = document.getElementById('audioControl');
  const audioIcon = document.getElementById('audioIcon');
  
  let isPlaying = false;

  // Audio control functions
  function toggleAudio() {
    if (isPlaying) {
      audio.pause();
      audioIcon.src = 'assets/volume-off.svg';
    } else {
      audio.play();
      audioIcon.src = 'assets/volume-on.svg';
    }
    isPlaying = !isPlaying;
  }

  // Start button click handler
  startButton.addEventListener('click', () => {
    startButton.classList.add('hidden');
    flipBook.classList.remove('hidden');
    
    // Start audio
    audio.play()
      .then(() => {
        isPlaying = true;
        audioIcon.src = 'assets/volume-on.svg';
      })
      .catch(error => {
        console.log('Audio autoplay prevented:', error);
        isPlaying = false;
        audioIcon.src = 'assets/volume-off.svg';
      });
    
    displayPage();
  });

  // Audio control click handler
  audioControl.addEventListener('click', toggleAudio);

  // Your existing displayPage function
  function displayPage() {
    const page = pages[currentPage];
    
    pageElement.classList.add('fade-exit');
    
    setTimeout(() => {
      let content = '';
      if (page.type === 'image') {
        content = `
          <img src="${page.content}" alt="Page image">
          <div class="messages-container">
            ${page.message.map(msg => `<p class="message">${msg}</p>`).join('')}
          </div>
        `;
      } else {
        content = `
          <div class="messages-container">
            ${page.message.map(msg => `<p class="message">${msg}</p>`).join('')}
          </div>
        `;
      }
      
      pageElement.innerHTML = content;
      pageElement.classList.add('page');
      
      updateNavigationButtons();
      
      pageElement.classList.remove('fade-exit');
      pageElement.classList.add('fade-enter');
      
      setTimeout(() => {
        pageElement.classList.remove('fade-enter');
      }, 50);
    }, 500);
  }

  // Your existing navigation button functions
  function createNavigationButtons() {
    const navButtons = document.createElement('div');
    navButtons.className = 'nav-buttons';
    
    const prevButton = document.createElement('button');
    prevButton.className = 'nav-button prev';
    prevButton.textContent = 'Previous';
    prevButton.addEventListener('click', () => {
      if (currentPage > 0) {
        currentPage--;
        displayPage();
      }
    });
    
    const nextButton = document.createElement('button');
    nextButton.className = 'nav-button next';
    nextButton.textContent = 'Next';
    nextButton.addEventListener('click', () => {
      if (currentPage < pages.length - 1) {
        currentPage++;
        displayPage();
      }
    });
    
    navButtons.appendChild(prevButton);
    navButtons.appendChild(nextButton);
    document.body.appendChild(navButtons);
  }

  function updateNavigationButtons() {
    const prevButton = document.querySelector('.nav-button.prev');
    const nextButton = document.querySelector('.nav-button.next');
    
    prevButton.disabled = currentPage === 0;
    nextButton.disabled = currentPage === pages.length - 1;
  }

  // Initialize the page
  pageElement.classList.add('page');
  flipBook.appendChild(pageElement);
  createNavigationButtons();
});
