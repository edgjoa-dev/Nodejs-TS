import { findHeroById } from "./services/hero.service"




const hero = findHeroById(2)
console.log("🚀 ~ file: app.ts:9:", hero?.name ?? 'No exist hero')
console.log("🚀 ~ file: app.ts:9:", hero?.owner ?? 'No exist hero')
