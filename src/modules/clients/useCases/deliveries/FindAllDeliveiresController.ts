import { Request, Response } from 'express'
import { FindAllDeliveriesUseCase } from './FindAllDeliveriesUseCase'

export class FindAllDeliveriesController {
  async handle(request: Request, response: Response) {
    const findAllDeliveriesUseCase = new FindAllDeliveriesUseCase()
    const { id_client: idCliente } = request

    const deliveries = findAllDeliveriesUseCase.execute(idCliente)

    return response.json(deliveries)
  }
}
