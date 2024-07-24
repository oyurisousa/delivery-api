import { Request, Response } from 'express'
import { UpdateEndDateUseCase } from './UpdateEndDateUseCase'

export class UpdateEndDateController {
  async handle(request: Request, response: Response) {
    const updateEndDateUseCase = new UpdateEndDateUseCase()

    const { id_deliveryman: idDeliveryman } = request
    const { id: idDelivery } = request.params

    const delivery = await updateEndDateUseCase.execute({
      idDelivery,
      idDeliveryman,
    })

    return response.json(delivery)
  }
}
