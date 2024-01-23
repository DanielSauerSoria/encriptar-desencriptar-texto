function performOperation() {
    const inputText = document.getElementById('inputText').value.toLowerCase();
    const operation = document.getElementById('operation').value;
    let outputText = '';
    console.log(inputText);
    if (operation === 'encrypt') {
        outputText = encryptText(inputText);
    } else if (operation === 'decrypt') {
        outputText = decryptText(inputText);
    }
    
    document.getElementById('outputText').value = outputText;
}

function encryptText(text) {
    return text.replace(/e/g, 'enter')
                .replace(/i/g, 'imes')
                .replace(/a/g, 'ai')
                .replace(/o/g, 'ober')
                .replace(/u/g, 'ufat');
}

function decryptText(text) {
    return text.replace(/enter/g, 'e')
                .replace(/imes/g, 'i')
                .replace(/ai/g, 'a')
                .replace(/ober/g, 'o')
                .replace(/ufat/g, 'u');
}

function copyToClipboard() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}  