import { Request, Response } from 'express'
import { FindAllWithoutEndDateUseCase } from './findAllAvailableUseCase'

export class FindAllAvailableController {
  async handle(request: Request, response: Response) {
    const findAllWithoutEndDateUseCase = new FindAllWithoutEndDateUseCase()
    const deliveries = await findAllWithoutEndDateUseCase.execute()

    response.json(deliveries)
  }
}
