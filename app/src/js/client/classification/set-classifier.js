function setClassifier() {
  return ml5.imageClassifier('/app/model/model.json');
}

export { setClassifier };
