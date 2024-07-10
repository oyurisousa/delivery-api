import { Request, Response } from 'express'
import { AuthenticateClientUseCase } from './authenticateClientUseCase'

export class AuthenticateClientController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body

    const authnticateClientUseCase = new AuthenticateClientUseCase()
    const result = await authnticateClientUseCase.execute({
      username,
      password,
    })

    return response.json(result).status(200)
  }
}
