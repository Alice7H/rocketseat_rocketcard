(() => {
  const btnBackground = document.querySelector('.generate-background');

  btnBackground.addEventListener('click', () => {
    const color = generateHexadecimalColor();
    const card = document.querySelector('.card');
    card.style.borderColor = color;
  });

  function generateHexadecimalColor() {
    const string = Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0');
    return `#${string}`;
  }
})();