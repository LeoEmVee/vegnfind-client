import Review from './review';

export default interface User {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password?: string;
  profilePic: string;
  createdAt: Date;
  updateedAt: Date;
  reviews?: Review[] | undefined;
  favourites?: {
    id: string;
    createdAt: Date;
    updatedAt: Date;
  } | undefined;
}