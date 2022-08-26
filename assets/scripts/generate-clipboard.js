(() => {
  const btnClipboard = document.querySelector('.generate-clipboard');
  const element = document.getElementById("element-to-print");

  btnClipboard.addEventListener('click', () => {
    element.style.backgroundColor = "#0e1218";
    html2canvas(element, {
      allowTaint: true,
      useCORS: true
    }).then(canvas => {
      canvas.toBlob(blob => {
        const item = new ClipboardItem({ "image/png": blob });
        navigator.clipboard.write([item])
          .then(() => {
            alert('Cartão copiado com o formato png');
          }, (err) => {
            alert('Falha ao copiar o cartão');
            onError(err);
          })
      });
    });
  });
})();