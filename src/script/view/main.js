import '../component/prov-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';
const main = () => {
  const searchElement = document.querySelector('search-bar');

  const provListElement = document.querySelector('prov-list');

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchProv(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = (results) => {
    provListElement.provs = results;
  };

  const fallbackResult = (message) => {
    provListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};
export default main;
