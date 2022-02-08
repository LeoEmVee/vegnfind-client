import User from "./user";
import Shop from "./shop";
import Eat from "./eat";
import Product from "./product";

export default interface Favourites {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  products?: Product[];
  shopping?: Shop[];
  eating?: Eat[];
  user: User;
}