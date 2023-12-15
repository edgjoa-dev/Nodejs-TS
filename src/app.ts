import { ServerApp } from "./presentation/server-app";
import { yarg } from "./config/plugins/args.plugin"


// console.log(process.argv)
// console.log(yarg.b);



(async()=> {
    await main();
})();


async function main() {
    console.log(yarg);

    const { b:base, l:limit, s:show } = yarg;

    ServerApp.run({base, limit, show });
}