function handleFileSelection(event) {
  const input = event.target;
  const file = input.files[0];
  const fileReader = new FileReader();

  fileReader.readAsText(file);

  fileReader.onload = () => {
    const getFileContent = new CustomEvent('getFileContent', {
      bubbles: true,
      detail: { fileContent: fileReader.result },
    });

    input.dispatchEvent(getFileContent);
  };
}

export { handleFileSelection };
