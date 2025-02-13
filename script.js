document.addEventListener('DOMContentLoaded', () => {
  let currentPage = 0;
  const pages = [
    { type: 'image', content: 'assets/page1.jpg', message: [
      '"The first time I laid eyes on her, I felt something I had never felt before."',
      '"In the school lab, she stood out—intellectual, beautiful, and effortless."',
      '"She made me question everything about myself. I was drawn to her in a way I couldn\'t explain."',
      '"But I quietly accepted that she was beyond my reach."'
    ] },
    { type: 'image', content: 'assets/page2.jpg', message: [
      '"As we grew closer, our bond deepened. We became best friends"',
      '"Sharing everything but our unspoken feelings."',
      '"That day, right before the school assembly, she fixed my button with such care."',
      '"We didn’t need words to know that we were meant to be together, even if neither of us had said it out loud yet."',
      '"I was sure, one day, I’d find a way to show her."'
    ] },
    { type: 'image', content: 'assets/page3.jpg', message: [
      '"Three years after the lockdown, and after so many life-changing moments we finally met again on her birthday."',
      '"June 28th, 2024. I gave her a blue orchid bouquet—it means a lot to me."',
      '"That day, as we looked into each other’s eyes, it clicked again. The feelings, the certainty."',
      '"The bond. Six days later, on July 4th, I proposed."'
    ] },
    { type: 'image', content: 'assets/page4.jpg', message: [
      '"It isn’t easy, being in a long-distance relationship. But every time we see each other after so much time apart."',
      '"Everything feels right. We met at the mall, and walked to the top of the stairs."',
      '"There, in the quiet peace of that moment, we shared a kiss, surrounded by nothing but the bliss of being together again."'
    ] },
    { type: 'text', content: '', message: [
      '"My love, there’s something I need to say. I know I\'ve messed up, and I’m really sorry. I care about you more than anything in this world, and I love you with all my heart."',
      '"But I also know that despite how much I care for you, I’ve been struggling. I sometimes don’t understand you the way I should, and it\'s hurtful to both of us."',
      '"There have been times when I’ve let little things bother me too much—too much to the point where I overthink and distance myself from you."',
      '"And I know that made you stop sharing with me, and for that, I’m truly sorry. I never wanted that to happen."',
      '"This feeling, this love, it’s something I’ve never experienced before. And sometimes, it makes me act in ways I can\'t even explain."',
      '"I feel so guilty for the constant fights, and I promise, from the bottom of my heart, I’ll do better. I’ll always be here, I’ll work on myself, and I’ll stay with you forever. I’m not perfect, but I want to be better for you. I love you more than words can say, and I’m sorry for making you feel like this."'
    ] }
  ];

  const flipBook = document.querySelector('.flipbook');
  const pageElement = document.createElement('div');
  
  function displayPage() {
    const page = pages[currentPage];
    const pageContent = page.type === 'image' ? `<img src="${page.content}" alt="Page image">` : '';
    pageElement.classList.remove('flip', 'final');
    pageElement.innerHTML = pageContent;
    
    // Add messages for this page
    page.message.forEach((msg, index) => {
      const message = document.createElement('p');
      message.classList.add('message');
      message.innerText = msg;
      pageElement.appendChild(message);
    });

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
      const messageBox = document.querySelector('.message');
      messageBox.innerHTML = '<p>And our adventure is just beginning ❤️</p>';
    }
  }

  displayPage();
  
  flipBook.addEventListener('click', flipPage);
});
