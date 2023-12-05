export interface MakeBuildPersonOpt {
    getUUID: () => string;
    getAge: ( birthdate: string  ) => number;
}

export interface PersonOpt{
    name: string;
    birthdate: string;
}