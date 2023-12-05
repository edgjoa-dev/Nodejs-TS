import { IUser } from "../interfaces";

const users:IUser[] = [
  {
    id: 1,
    name: 'John Doe',
  },
  {
    id: 2,
    name: 'Jane Doe',
  }
];


export const getUserById = ( id: number, callback: (err?: string, user?: IUser) => void ) => {
  const user = users.find( function(user){
    return user.id === id;
  });

  if( !user ) {
    return callback(`User not found with id ${id}`);
  }

  return callback( undefined, user );
}
