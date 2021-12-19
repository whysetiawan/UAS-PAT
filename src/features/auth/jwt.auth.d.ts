declare interface jwtPayload {
  user: IUser;
}

interface IUser {
  username: string;
  firstName: string;
  lastName: string;
  id: number;
  iat: number;
  exp: number;
}
