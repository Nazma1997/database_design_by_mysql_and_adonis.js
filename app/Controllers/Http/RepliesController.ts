
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Reply from 'App/Models/Reply'

export default class RepliesController {

     
    public async createReply({request, response }: HttpContextContract) {

        try {
            const data = request.only(['reply_des', 'auth_id',  'comment_id'])
            const reply = await Reply.create(data)
            return response.status(201).json(reply)
            
        } catch (error) {
            console.log('error', error)
            return response.status(500).json(error)
        }
    }

    
    public async updateReply({ params, request, response }: HttpContextContract) {
        try {
            const updateData = await Reply.findOrFail(params.id)
            if (!updateData) {
                return response.status(400).json({ message: 'data can not found' })
            }
            const data = request.only(['reply_des', 'auth_id',  'comment_id'])
            updateData.merge(data)
            await updateData.save()
            return response.status(200).json(updateData)
        } catch (error) {
            return response.status(500).json({ message: 'Internal Server Error' })

        }
    }

    public async deleteReply({ params, response }) {
        try {
            const data = await Reply.findOrFail(params.id)

            if (!data) {
                return response.status(400).json({ message: 'data can not found' })
            }
            await data.delete()
            return response.status(204).json({ message: 'reply deleted successfully', data })
        } catch (error) {
            return response.status(500).json({ message: 'Internal server error' })
        }
    }
   
}
