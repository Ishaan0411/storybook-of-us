document.addEventListener('DOMContentLoaded', () => {
  let currentPage = 0;
  const pages = [
    { type: 'image', content: 'images/first-meeting.jpg', message: 'Our first meeting in the school lab, where I felt something new and unforgettable.' },
    { type: 'image', content: 'images/aashu-smart.jpg', message: 'You stood out, both intellectual and so pretty, making me feel a little self-conscious.' },
    { type: 'image', content: 'images/friendship.jpg', message: 'We became best friends, and little did we know, our bond would lead us to something even more special.' },
    { type: 'image', content: 'images/blue-orchid.jpg', message: 'On your birthday, June 28, 2024, I gave you a blue orchid bouquet, and everything changed.' },
    { type: 'image', content: 'images/proposal.jpg', message: 'Just five days later, I proposed to you, and I knew we were meant to be together.' },
    { type: 'image', content: 'images/reunion.jpg', message: 'Though we were long-distance for a while, our reunion at the mall was unforgettable.' },
    { type: 'text', content: '', message: 'And our adventure is just beginning ❤️' }
  ];

  const flipBook = document.querySelector('.flipbook');
  const messageBox = document.querySelector('.message');
  const pageElement = document.createElement('div');
  
  function displayPage() {
    const page = pages[currentPage];
    const pageContent = page.type === 'image' ? `<img src="${page.content}" alt="Page image">` : '';
    messageBox.innerHTML = `<p>${page.message}</p>`;
    pageElement.classList.remove('flip', 'final');
    pageElement.innerHTML = pageContent;
    pageElement.classList.add('page');
    flipBook.innerHTML = '';
    flipBook.appendChild(pageElement);
  }

  function flipPage() {
    if (currentPage < pages.length - 1) {
      currentPage++;
      pageElement.classList.add('flip');
      displayPage();
    } else {
      pageElement.classList.add('final');
      messageBox.innerHTML = '<p>And our adventure is just beginning ❤️</p>';
    }
  }

  displayPage();
  
  flipBook.addEventListener('click', flipPage);
});
