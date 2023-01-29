import axios from 'axios';

const serverUrl = process.env.REACT_APP_SERVER_URL;

export const getAutocomplete = async (q) => {
  try {
    const res = await axios.get(`${serverUrl}/autocomplete`, { params: { q } });

    return res.data;
  } catch (err) {
    throw new Error(err.response.data.message);
  }
};

export const getCity = async (cityData) => {
  try {
    const res = await axios.post(`${serverUrl}/city`, cityData);

    return res.data;
  } catch (err) {
    console.log('err');
    throw new Error(err.response.data.message);
  }
};
