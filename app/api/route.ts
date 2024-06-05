import { getUserList } from "../utils";

export async function getUsers() {
  const userList = await getUserList();

  return userList;
}
