"use client";

import { useEffect, useState } from "react";
import CardList from "./components/CardList";
import Searchbox from "./components/SearchBox";
import { useDebounce } from "./hooks/useDebounce";
import { TApiResponse, TUser } from "./types";
import { getUserList } from "./utils";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState<TApiResponse<TUser[]>>();

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
