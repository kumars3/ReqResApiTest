const fs = require('fs');
const path = require('path');

beforeAll(() => {
  const folders = [
    path.resolve('test-results'),
    path.resolve('test-results/html'),
    path.resolve('test-results/junit')
  ];

  for (const folder of folders) {
    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder, { recursive: true });
    }
  }
});