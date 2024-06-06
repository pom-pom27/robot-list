import { IUserAPI, TApiResponse, TUser } from "./types";

export const convertUserList = (usersAPI: IUserAPI[]): TUser[] => {
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
  let apiRespnse: TApiResponse<TUser[]> = {
    status: "idle",
    data: null,
    message: null,
  };

  try {
    const usersRes = await fetch("https://jsonplaceholder.typicode.com/users");
    const usersAPI = (await usersRes.json()) as IUserAPI[];
    const userList = convertUserList(usersAPI);

    apiRespnse = { ...apiRespnse, status: "success", data: userList };
  } catch (error) {
    apiRespnse = {
      ...apiRespnse,
      status: "error",
      message: "Unable to fetching the user list. Check your connections.",
    };
  } finally {
    return apiRespnse;
  }
};
