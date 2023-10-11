import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Comment from 'App/Models/Comment'

export default class CommentsController {

    public async createComment({request, response }: HttpContextContract) {

        try {
            const data = request.only(['des', 'post_id','auth_id'])
            const comment = await Comment.create(data)
            return response.status(201).json(comment)
            
        } catch (error) {
            console.log('error', error)
            return response.status(500).json(error)
        }
    }

    public async allComments({ response }: HttpContextContract) {
        try {
            const all_comments = await Comment.all()
            return response.status(200).json({ message: 'All post with their comments', all_comments })
        } catch (error) {
             console.log(error)
        }
    }


    
    public async updateComment({ params, request, response }: HttpContextContract) {
        try {
            const updateData = await Comment.findOrFail(params.id)
            if (!updateData) {
                return response.status(400).json({ message: 'data can not found' })
            }
            const data = request.only(['des', 'post_id','auth_id'])
            updateData.merge(data)
            await updateData.save()
            return response.status(200).json(updateData)
        } catch (error) {
            return response.status(500).json({ message: 'Internal Server Error' })

        }
    }

    public async deleteComment({ params, response }) {
        try {
            const data = await Comment.findOrFail(params.id)

            if (!data) {
                return response.status(400).json({ message: 'data can not found' })
            }
            await data.delete()
            return response.status(204).json({ message: 'data deleted successfully', data })
        } catch (error) {
            return response.status(500).json({ message: 'Internal server error' })
        }
    }
}
