interface RunOptions {
    base: number,
    limit: number,
    show: boolean
}




export class ServerApp {

    static run(options:RunOptions ){
        console.log('Server run...');
        console.log(options);
    }


}
