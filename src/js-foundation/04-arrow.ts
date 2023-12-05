import { IUser } from "../interfaces";


const users: IUser[] = [
  {
    id: 1,
    name: 'John Doe',
  },
  {
    id: 2,
    name: 'Jane Doe',
  }
];


export const getUserById = ( id: number, callback: ( err?: string, user?: IUser )=> void ) => {

  const user = users.find( (user) => user.id === id );

  ( user )
    ? callback( undefined, user )
    : callback(`User not found with id ${id}`);
}