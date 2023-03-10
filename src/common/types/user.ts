import { Provider } from "./provider";


export class User {
  _id: string;
  provider: Provider;
  providerId: string;
  username: string;
  name?: string;
  roles?: string[];
  created_at: Date;
  updated_at: Date;
}
