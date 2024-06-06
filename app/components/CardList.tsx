import Image from "next/image";
import { TUser } from "../types";
import Card from "./Card";

interface ICardList {
  users?: TUser[];
  msg?: string | null;
}

const CardList = ({ users, msg }: ICardList) => {
  return (
    <div className="flex gap-6 flex-wrap justify-center">
      {msg && <div>{msg}</div>}
      {users?.map((user) => (
        <Card key={user.id} user={user} />
      ))}
      {!users && !msg && (
        <Image src="/loading.svg" alt="loading" width={100} height={100} />
      )}

      {users && users.length === 0 && <div>User is not found!</div>}
    </div>
  );
};

export default CardList;
