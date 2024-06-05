import Image from "next/image";
import { IUser } from "../types";

interface ICard {
  user: IUser;
}

const Card = ({ user }: ICard) => {
  return (
    <div className="flex items-center justify-center gap-4 md:gap-6 min-w-60 h-52 rounded-lg p-3 md:p-4  bg-white text-sm dark:border dark:border-white">
      <Image
        src={`https://robohash.org/${user.username}`}
        width={190}
        className=" md:w-28 md:h-28 w-24 h-24  rounded-full ring-2 ring-yellow-300 dark:ring-yellow-700"
        height={190}
        alt={`${user.username} profile picture`}
      />
      <div className="flex flex-col  w-56  justify-center dark:text-black ">
        <p className="font-bold text-lg">{user.username}</p>
        <p className="font-light text-md">{user.email}</p>

        <div className=" my-2 border-b border-white dark:border-black" />

        <div className="flex flex-col gap-1">
          <p>ID: {user.id}</p>
          <p>Full Name: {user.name}</p>
          <p>City: {user.city}</p>
          <p>
            Website:{" "}
            <a
              href={`https://${user.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              {user.website}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
