document.getElementById('collect-key').addEventListener('click', () => {
    let keysCollected = parseInt(document.getElementById('keys-collected').innerText, 10);
    document.getElementById('keys-collected').innerText = keysCollected + 1;
  });
  