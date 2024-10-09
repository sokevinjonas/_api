import { RegisterUserValidator } from '#validators/register_user'
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  public async register({ request, response }: HttpContext) {
    const payload = await request.validateUsing(RegisterUserValidator)
    return (
      response.status(200).json({
        messages: 'Utilisateur recuperer',
        data: payload,
      }),
      401
    )
  }
}
