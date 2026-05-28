const copyButton = document.getElementById('copy-prompt-button');

if (copyButton) {

  copyButton.addEventListener('click', () => {

    const prompt = document.getElementById('starter-prompt');

    navigator.clipboard.writeText(prompt.value);

    copyButton.innerText = 'Copied';

  });

}