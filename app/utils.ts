import { IUser, IUserAPI } from "./types";

export const convertUserList = (usersAPI: IUserAPI[]): IUser[] => {
  const users = usersAPI.map((user) => ({
    id: user.id.toString(),
    name: user.name,
    email: user.email,
    username: user.username,
    city: user.address.city,
    website: user.website,
  }));
  return users;
};

export const getUserList = async () => {
  const usersRes = await fetch("https://jsonplaceholder.typicode.com/users");

  const usersAPI = (await usersRes.json()) as IUserAPI[];

  return convertUserList(usersAPI);
};
