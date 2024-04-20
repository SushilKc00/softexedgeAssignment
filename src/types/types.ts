export type IUsersType = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    city: string;
    geo?: {
      lat: string;
      lng: string;
    };
    suite?: string;
    zipcode: string;
  };
  company?: {
    name: string;
    bs?: string;
    catchPhrase?: string;
  };
};

export type IUsersInitialState = {
  users: IUsersType[];
  singleUserDetail: [];
  isLoading?: boolean;
  isError: {
    status: boolean;
    message: string;
  };
};
