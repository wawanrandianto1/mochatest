# mochatest

1. npm install -g mocha (untuk install di komputer)
2. npm install --save-dev mocha (untuk install di project)
3. npm install --save-dev chai (untuk lakukan http request)

untuk menjalankan , ketik npm run test di terminal / command line

npm run test ada pada script di dalam package.json (silakan dibuka)
didalam json kita deklarasi "mocha" jadi npm run test == mocha
hal ini akan melakukan pengetesan pada file2 yang ada pada folder test
jika ingin spesifik file, maka ketik perintah mocha/<nama_folder>/<nama_file>

link referensi: https://codeburst.io/javascript-unit-testing-using-mocha-and-chai-1d97d9f18e71

ketik perintah untuk test:
mocha test/test1.js
mocha test/test2.js
mocha test/testapi.js


ketika clone project ini, ketik perintah: npm i