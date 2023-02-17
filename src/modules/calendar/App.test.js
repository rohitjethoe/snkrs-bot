const App = require('./main');

(async () => {
    const data = await App.fetchData('NL', 'nl')
    console.log(data);
})();