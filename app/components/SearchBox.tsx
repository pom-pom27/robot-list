import { SearchIcon } from "./SearchIcon";

const Searchbox = (props: React.ComponentPropsWithoutRef<"input">) => {
  return (
    <div className="text-black bg-white flex  w-full p-2  rounded-lg justify-center items-center gap-1">
      <SearchIcon className="text-2xl " />
      <input
        className=" flex-1 p-2  outline-none dark:text-black rounded-lg"
        type="search"
        {...props}
      />
    </div>
  );
};

export default Searchbox;
