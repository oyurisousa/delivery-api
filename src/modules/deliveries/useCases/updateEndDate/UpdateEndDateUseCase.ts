import { prisma } from '../../../../database/prismaClient'

interface IUpdateEndDate {
  idDelivery: string
  idDeliveryman: string
}

export class UpdateEndDateUseCase {
  async execute({ idDelivery, idDeliveryman }: IUpdateEndDate) {
    const result = await prisma.deliveries.updateMany({
      where: {
        id: idDelivery,
        id_deliveryman: idDeliveryman,
      },
      data: {
        end_at: new Date(),
      },
    })

    return result
  }
}
