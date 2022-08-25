(() => {
  const btnDownload = document.querySelector('.generate-download');

  btnDownload.addEventListener('click', () => {
    const element = document.getElementById("element-to-print");
    element.style.backgroundColor = "#0e1218";
    html2canvas(element, {
      allowTaint: true,
      useCORS: true
    }).then(canvas => {
      saveAs(canvas.toDataURL(), 'rocketcard.png');
    });
    element.style.backgroundColor = null;
  });

  function saveAs(uri, filename) {
    const link = document.createElement('a');

    if (typeof link.download === 'string') {
      link.href = uri;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(uri);
    }
  }
})();