import { Request, Response } from 'express'
import { FindAllDeliveriesDeliverymanUseCase } from './FindAllDeliveriesDeliverymanUseCase'

export class FindAllDeliveriesDeliverymanController {
  async handle(request: Request, response: Response) {
    const findAllDeliveriesDeliverymanUseCase =
      new FindAllDeliveriesDeliverymanUseCase()
    const { id_deliveryman: idDeliveryman } = request

    const deliveries =
      findAllDeliveriesDeliverymanUseCase.execute(idDeliveryman)

    return response.json(deliveries)
  }
}
