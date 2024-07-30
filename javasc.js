function copyToClipboard() {
    const dropdown = document.getElementById('dropdown').value;
    const fillInBlank = document.getElementById('fillInBlank').value;
    const combinedText = `${dropdown} - ${fillInBlank}`;

    // Create a temporary textarea to copy the text
    const tempTextarea = document.createElement('textarea');
    tempTextarea.value = combinedText;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextarea);

    alert('Copied to clipboard: ' + combinedText);
}
