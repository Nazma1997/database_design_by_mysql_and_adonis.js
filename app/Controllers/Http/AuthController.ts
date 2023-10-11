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

    public async allUser({ response }: HttpContextContract) {
        try {
            const all_users = await Auth.query().preload('posts').preload('comments')

            console.log('all user', all_users)
            return response.status(200).json({ message: 'All users with their posts', all_users })
        } catch (error) {
             console.log(error)
        }
    }
    public async updateUser({ params, request, response }: HttpContextContract) {
        try {
            const user = await Auth.findOrFail(params.id)
            if (!user) {
                return response.status(400).json({ message: 'User can not found' })
            }
            const userData = request.only(['name', 'email', 'password'])
            user.merge(userData)
            await user.save()
            return response.status(200).json(user)
        } catch (error) {
            return response.status(404).json({ message: 'User not found' })

        }
    }

    public async deleteUser({ params, response }) {
        try {
            const user = await Auth.findOrFail(params.id)

            if (!user) {
                return response.status(400).json({ message: 'User can not found' })
            }
            await user.delete()
            return response.status(204).json({ message: 'User deleted successfully', user })
        } catch (error) {
            return response.status(404).json({ message: 'User not found' })
        }
    }


    public async singleUserByParams({params, response}){
        try {
            const user = await Auth.query()
            .where('id', params.id) 
            .preload('posts')
            .preload('comments')
            .firstOrFail()

            if (!user) {
                return response.status(400).json({ message: 'User can not found' })
            }

            return response.status(200).json({message: 'get single user', user})
        } catch (error) {
            console.log(error)
        }
    }
}
