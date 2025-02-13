document.addEventListener('DOMContentLoaded', () => {
  let currentPage = 0;
  const pages = [
    { type: 'image', content: 'assets/page1.jpg', message: [
      '"The first time I laid eyes on her, I felt something I had never felt before."',
      '"In the school lab, she stood out—intellectual, beautiful, and effortless."',
      '"She made me question everything about myself. I was drawn to her in a way I couldn\'t explain."',
      '"But I quietly accepted that she was beyond my reach."'
    ] },
    // ... your other pages data remains the same ...
  ];

  const flipBook = document.querySelector('.flipbook');
  const pageElement = document.createElement('div');
  
  function displayPage() {
    const page = pages[currentPage];
    pageElement.classList.remove('flip', 'final');
    
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
    flipBook.innerHTML = '';
    flipBook.appendChild(pageElement);
  }

  function flipPage() {
    if (currentPage < pages.length - 1) {
      currentPage++;
      pageElement.classList.add('flip');
      setTimeout(displayPage, 500);
    } else {
      pageElement.classList.add('final');
      const messageBox = document.querySelector('.message');
      messageBox.innerHTML = '<p>And our adventure is just beginning ❤️</p>';
    }
  }

  displayPage();
  flipBook.addEventListener('click', flipPage);
});
