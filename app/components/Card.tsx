import Image from "next/image";
import { TUser } from "../types";

interface ICard {
  user: TUser;
}

const Card = ({
  user: { id, city, email, name, username, website },
}: ICard) => {
  const robotImgurl = `https://robohash.org/${username}`;
  return (
    <div className="flex items-center justify-center gap-4 md:gap-6 min-w-60 h-52 rounded-lg p-3 md:p-4  bg-white text-sm dark:border dark:border-white">
      <Image
        src={robotImgurl}
        width={190}
        className=" md:w-28 md:h-28 w-24 h-24  rounded-full ring-2 ring-yellow-300 dark:ring-yellow-700"
        height={190}
        alt={`${username} profile picture`}
      />
      <div className="flex flex-col  w-56  justify-center dark:text-black ">
        <p className="font-bold text-lg">{username}</p>
        <p className="font-light text-md">{email}</p>

        <div className=" my-2 border-b border-white dark:border-black" />

        <div className="flex flex-col gap-1">
          <p>ID: {id}</p>
          <p>Full Name: {name}</p>
          <p>City: {city}</p>
          <p>
            Website:{" "}
            <a
              href={`https://${website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              {website}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
