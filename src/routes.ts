import { Router } from 'express'
import { CreateClientController } from './modules/clients/useCases/createClient/createClientController'
import { AuthenticateClientController } from './modules/account/authenticateClient/authenticateClientController'
import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman/createDeliverymanController'
import { AuthenticateDeliverymanController } from './modules/account/authenticateDeliveryman/authenticateDeliverymanController'
import { CreateDeliveryController } from './modules/deliveries/useCases/createDelivery/CreateDeliveryController'
import { ensureAuthenticateClient } from './middlewares/ensureAuthenticateClient'
import { FindAllAvailableController } from './modules/deliveries/useCases/findAllAvailable/findAllAvailableController'
import { ensureAuthenticateDeliveryman } from './middlewares/ensureAuthenticateDeliveryman'
import { UpdateDeliverymanController } from './modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanController'
import { FindAllDeliveriesController } from './modules/clients/useCases/deliveries/FindAllDeliveiresController'
import { FindAllDeliveriesDeliverymanController } from './modules/deliveryman/useCases/deliveries/FindAllDeliveiresControllerDeliveryman'
import { UpdateEndDateController } from './modules/deliveries/useCases/updateEndDate/UpdateEndDateController'

const routes = Router()
const createClientController = new CreateClientController()
const createDeliverymanController = new CreateDeliverymanController()
const authenticateClientController = new AuthenticateClientController()
const authenticateDeliverymanController =
  new AuthenticateDeliverymanController()
const createDeliveryController = new CreateDeliveryController()
const findAllAvailableController = new FindAllAvailableController()
const updateDeliverymanController = new UpdateDeliverymanController()
const findAllDeliveriesController = new FindAllDeliveriesController()
const findAllDeliveriesDeliverymanController =
  new FindAllDeliveriesDeliverymanController()
const updateEndDateController = new UpdateEndDateController()

routes.post('/client', createClientController.handle)
routes.post('/client/authenticate', authenticateClientController.handle)
routes.get(
  'client/deliveries',
  ensureAuthenticateClient,
  findAllDeliveriesController.handle,
)

routes.post(
  '/delivery',
  ensureAuthenticateClient,
  createDeliveryController.handle,
)
routes.get(
  '/delivery/available',
  ensureAuthenticateDeliveryman,
  findAllAvailableController.handle,
)

routes.post('/deliveryman', createDeliverymanController.handle)
routes.post(
  '/deliveryman/authenticate',
  authenticateDeliverymanController.handle,
)

routes.put(
  '/delivery/updatedeliveryman/:id',
  ensureAuthenticateDeliveryman,
  updateDeliverymanController.handle,
)

routes.get(
  'deliveryman/deliveries',
  ensureAuthenticateDeliveryman,
  findAllDeliveriesDeliverymanController.handle,
)

routes.put(
  '/delivery/updateEndDate/:id',
  ensureAuthenticateDeliveryman,
  updateEndDateController.handle,
)

export { routes }
