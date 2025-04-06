// Galaxy particle trail cursor effect (simple example)
document.addEventListener('mousemove', (e) => {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = `${e.pageX}px`;
    star.style.top = `${e.pageY}px`;
    document.body.appendChild(star);
  
    setTimeout(() => {
      star.remove();
    }, 1000);
  });
  
  // Add stars CSS
  const style = document.createElement('style');
  style.innerHTML = `
    .star {
      position: absolute;
      width: 5px;
      height: 5px;
      background: white;
      border-radius: 50%;
      opacity: 0.8;
      animation: fadeOut 1s forwards;
    }
    @keyframes fadeOut {
      0% { opacity: 0.8; }
      100% { opacity: 0; transform: scale(2); }
    }
  `;
  document.head.appendChild(style);
  