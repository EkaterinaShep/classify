import { getElement } from './helpers/working-with-dom.js';
import { addEventListeners } from './event-listeners/add-event-listeners.js';
import { handleFileSelection } from './event-handlers/handle-file-selection.js';
import { setClassifier } from './classification/set-classifier.js';
import { classifyImages } from './classification/classify-images.js';
import { getImages } from './event-handlers/get-images.js';
import { saveToFile } from './event-handlers/save-to-file.js';
import { toggleClass } from './event-handlers/remove-class.js';

/* -------------------------- Getting Page Elements ------------------------- */
const app = getElement('.app');
const inputFileSelection = getElement('.input__file-selection');
const domImage = getElement('.image');
const btnFileDownloading = getElement('.btn__file-downloading');

/* ---------------------------- Helpful Variables --------------------------- */
let images;

/* ------------------------- Adding Event Listeners ------------------------- */
addEventListeners([
  [
    inputFileSelection,
    'change',
    (event) => {
      handleFileSelection(event);
      toggleClass(event.target.previousElementSibling, 'btn--active');
    },
  ],
]);
app.addEventListener('getFileContent', (event) => {
  images = getImages(event);
});

/* -------------------------------- Setting Classifier ------------------------------- */
const classifier = await setClassifier();

/* ------------------------- Adding Event Listeners ------------------------- */
app.addEventListener('getFileContent', () => {
  classifyImages({ images, classifier, domImage });
});
app.addEventListener('getPredictions', (event) => {
  saveToFile(event.detail.results, btnFileDownloading);
  toggleClass(btnFileDownloading, 'btn--active');
});
