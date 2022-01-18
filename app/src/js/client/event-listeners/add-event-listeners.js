function addEventListeners(arr) {
  arr.map((item) => {
    const element = item[0];
    const action = item[1];
    const handler = item[2];

    element.addEventListener(action, handler);
  });
}

export { addEventListeners };
