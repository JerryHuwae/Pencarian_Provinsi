import provs from './provs.js';
class DataSource {
  static searchProv(keyword) {
     return fetch(`http://dev.farizdotid.com/api/daerahindonesia/provinsi=${keyword}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.provinsi) {
          return Promise.resolve(responseJson.provinsi);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
}
export default DataSource;
