async function classifyImages({ images, classifier, domImage }) {
  let results = '\n';

  for (let i = 0; i < images.length; i++) {
    domImage.src = images[i];

    await classifier.classify(
      domImage,
      (err, predictions) =>
        (results += `${i + 1}~${predictions[0].label}\n`)
    );

    if (i === images.length - 1) {
      const getPredictions = new CustomEvent('getPredictions', {
        bubbles: true,
        detail: { results },
      });

      domImage.dispatchEvent(getPredictions);
    }
  }
}

export { classifyImages };
