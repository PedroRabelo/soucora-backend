export interface UserToken {
  token: string;
  userData: {
    id: string;
    name: string;
    email: string;
    role: string;
  };
}
