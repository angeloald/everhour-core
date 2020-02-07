const axios = require("axios");

const get = (url, headers) => {
  return axios({
    url: url,
    method: "GET",
    headers: headers
  });
};

const post = (url, headers, data) => {
  return axios({
    url: url,
    method: "POST",
    headers: headers,
    data: data
  });
};

const put = (url, headers, data) => {
  return axios({
    url: url,
    method: "PUT",
    headers: headers,
    data: data
  });
};

const del = (url, headers) => {
  return axios({
    url: url,
    method: "DELETE",
    headers: headers
  });
};

module.exports = {
  get,
  put,
  post,
  del
};
