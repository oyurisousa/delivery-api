import { Router } from "express";
import { CreateClientController } from "./modules/clients/useCases/createClient/createClientController";
import { AuthenticateClientController } from "./modules/account/authenticateClient/authenticateClientController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/createDeliverymanController";
import { AuthenticateDeliverymanController } from "./modules/account/authenticateDeliveryman/authenticateDeliverymanController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDelivery/CreateDeliveryController";

const routes = Router()
const createClientController = new CreateClientController()
const createDeliverymanController = new CreateDeliverymanController()
const authenticateClientController = new AuthenticateClientController()
const authenticateDeliverymanController = new AuthenticateDeliverymanController()
const createDeliveryController = new CreateDeliveryController()

routes.post('/client', createClientController.handle)
routes.post('/client/authenticate', authenticateClientController.handle)


routes.post('/delivery', createDeliveryController.handle)

routes.post('/deliveryman', createDeliverymanController.handle)
routes.post('/deliveryman/authenticate', authenticateDeliverymanController.handle)



export { routes }