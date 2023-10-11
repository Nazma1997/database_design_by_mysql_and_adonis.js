import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Auth from 'App/Models/Auth'

export default class AuthController {


    public async createUser({ request, response }: HttpContextContract) {

        try {
            const data = request.only(['name', 'email', 'password'])

            const existingUser = await Auth.findBy('email', data.email)

            if (existingUser) {
                return response.status(400).json({ message: 'Email already used' })
            }
            const user = await Auth.create(data)
            return response.status(201).json(user)



        } catch (error) {

            console.log('error', error)
            return response.status(500).json(error)
        }
    }


    // public async allUser({ response }: HttpContextContract) {
    //     const all_user = await Auth.all();
    //     return response.status(200).json({ message: 'All user', all_user })
    // }
    public async allUser({ response }: HttpContextContract) {
        try {
            const all_users = await Auth.query().preload('posts').preload('comments')

            // console.log('all user', all_users)
            return response.status(200).json({ message: 'All users with their posts', all_users })
        } catch (error) {
             console.log(error)
        }
    }
}
