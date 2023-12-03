import { heroes } from "./data/heroes";



export const findHeroById = (id: number) => {
        return heroes.find(hero => hero.id === id);
    }

    const hero = findHeroById(1);
    console.log("🚀 ~ app.ts:6:", hero)
