function saveToFile(results, btn) {
  const data =
    'data:text/json;charset=utf-8,' +
    encodeURIComponent(JSON.stringify(results).replace(/\\n/g, '\n').replace(/['"]+/g, '').trim());
  btn.setAttribute('href', data);
  btn.setAttribute('download', 'results.json');
}

export { saveToFile };
