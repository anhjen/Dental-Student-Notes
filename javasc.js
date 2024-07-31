function copyToClipboard() {
    const dropdown = document.getElementById('dropdown').value;
    const fillInBlank = document.getElementById('fillInBlank').value;
    const combinedText = `${dropdown}, ${fillInBlank}`; // Format text as needed
 
    navigator.clipboard.writeText(combinedText).then(() => {
        alert('Copied to clipboard: ' + combinedText);
    }).catch(err => {
        console.error('Error copying text: ', err);
    });
 }
 
