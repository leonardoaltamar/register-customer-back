import { env } from "process";
import { AppRoutes } from "./app.routes";
import { Server } from "./server/Server";
import { envs } from "./config";


(async () => {
    main();
})();



function main(){
    console.log('main');

    const server = new Server({port: envs.PORT, routes: AppRoutes.routes}); 

    server.start();

}
