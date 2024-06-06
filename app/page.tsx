"use client";

import { useEffect, useState } from "react";
import { getUsers } from "./api/route";
import CardList from "./components/CardList";
import Searchbox from "./components/SearchBox";
import { useDebounce } from "./hooks/useDebounce";
import { getUserList } from "./utils";

type TUsers = Awaited<ReturnType<typeof getUsers>>;

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState<TUsers>();

  const searchDebounce = useDebounce(searchQuery);

  const fetchUsers = async () => {
    const data = await getUserList();

    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUser = users?.data?.filter((user) =>
    user?.username.toLowerCase().includes(searchDebounce.toLowerCase())
  );

  return (
    <main className="max-w-5xl mx-auto flex flex-col gap-10 md:gap-20 p-6 lg:px-0 min-h-screen ">
      <Searchbox
        value={searchQuery}
        placeholder="Search by username"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <CardList users={filteredUser} msg={users?.message} />
    </main>
  );
}
