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
}
