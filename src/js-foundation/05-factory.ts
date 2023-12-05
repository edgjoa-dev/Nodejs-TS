
// const { getUUID } = require('../plugins/get-id.plugin');
// const { getAge } = require('../plugins/get-age.plugin');
// const { getAge, getUUID } = require('../plugins');

import { MakeBuildPersonOpt, PersonOpt } from "../interfaces"

export const buildMakePerson  = ({ getUUID, getAge }: MakeBuildPersonOpt) => {

  return ({ name, birthdate }: PersonOpt) => {

    return {
      id: getUUID(),
      name: name,
      birthdate: birthdate,
      age: getAge(birthdate),
    }
  }

}


// const obj = { name: 'John', birthdate: '1985-10-21' };

// const john = buildPerson( obj );


// console.log(john);
