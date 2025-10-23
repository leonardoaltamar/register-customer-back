import { AppRoutes } from "./app.routes";
import { Server } from "./server/Server";


(async () => {
    main();
})();



function main(){
    console.log('main');

    const server = new Server({port: 3000, routes: AppRoutes.routes}); 

    server.start();

}
