function getImages(event) {
  const images = [];

  event.detail.fileContent.split('data').forEach((item) => {
    if (isImage(item)) {
      images.push(`data${item}`);
    }
  });

  return images;
}

function isImage(item) {
  return String(item).includes('base64');
}

export { getImages };
