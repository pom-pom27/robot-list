import Image from "next/image";
import { IUser } from "../types";
import Card from "./Card";

interface ICardList {
  users?: IUser[];
}

const CardList = ({ users }: ICardList) => {
  return (
    <div className="flex gap-6 flex-wrap justify-center">
      {users?.map((user) => (
        <Card key={user.id} user={user} />
      ))}
      {!users && (
        <Image src="/loading.svg" alt="loading" width={100} height={100} />
      )}

      {users && users.length === 0 && <div>User is not found!</div>}
    </div>
  );
};

export default CardList;
