export interface IUserAPI {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Geo {
  lat: string;
  lng: string;
}

export type TUser = {
  id: string;
  name: string;
  username: string;
  email: string;
  city: string;
  website: string;
};

type TStatusResponse = "success" | "error" | "idle";

export type TApiResponse<T> = {
  status: TStatusResponse;
  data?: T | null;
  message?: string | null;
};
