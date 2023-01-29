import axios from 'axios';

const serverUrl = process.env.REACT_APP_SERVER_URL;

export const saveUser = async (userId) => {
  try {
    const res = await axios.post(`${serverUrl}/user/new`, { userId });

    return res.data;
  } catch (err) {
    throw new Error(err.response.data.message);
  }
};

export const getUser = async (userId) => {
  try {
    const res = await axios.post(`${serverUrl}/user`, { userId });

    return res.data;
  } catch (err) {
    throw new Error(err.response.data.message);
  }
};

export const addToFavorites = async (userId, _id) => {
  try {
    const res = await axios.patch(`${serverUrl}/user/favorites/add`, {
      userId,
      _id,
    });

    return res.data;
  } catch (err) {
    throw new Error(err.response.data.message);
  }
};

export const removeFromFavorites = async (userId, _id) => {
  try {
    const res = await axios.patch(`${serverUrl}/user/favorites/remove`, {
      userId,
      _id,
    });

    return res.data;
  } catch (err) {
    throw new Error(err.response.data.message);
  }
};
