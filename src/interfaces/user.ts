import Review from './review';

export default interface User {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  description: string;
  password?: string;
  profilePic: string;
  createdAt: Date;
  updateedAt: Date;
  reviews?: any[] | undefined;
  favourites?:
    | {
        id: string;
        createdAt: Date;
        updatedAt: Date;
      }
    | undefined;
}
