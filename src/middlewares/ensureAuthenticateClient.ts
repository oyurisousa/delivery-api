import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string
}

export async function ensureAuthenticateClient(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    return response.status(401).send({
      message: "token is missing!"
    })
  }

  const [_, token] = authHeader.split(" ")

  try {
    const { sub } = verify(token, '158193559058d796c2a922037b217daa') as IPayload

    request.id_client = sub

    return next()
  } catch (error) {
    return response.status(400).send({
      message: 'token invalid'
    })
  }
} 