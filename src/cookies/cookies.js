import Cookies from 'js-cookie';
import { nanoid } from 'nanoid';

const USER_ID = 'USER_ID';

export const saveUserOnCookie = () => {
  Cookies.set(USER_ID, JSON.stringify(nanoid()), {
    expires: 365,
    sameSite: 'strict',
    // secure: true,
  });
};

export const deleteUserOnCookie = () =>
  Cookies.remove(USER_ID, { sameSite: 'strict' });

export const getUserFromCookie = () => {
  const userId = Cookies.get(USER_ID);
  if (userId === undefined) return null;

  return JSON.parse(userId);
};
