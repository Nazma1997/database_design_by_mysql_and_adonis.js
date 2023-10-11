import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'

export default class PostsController {

    
    public async createPost({request, response }: HttpContextContract) {

        try {
            const data = request.only(['title', 'short_des', 'full_des', 'auth_id'])
            const post = await Post.create(data)
            return response.status(201).json(post)
            
        } catch (error) {
            console.log('error', error)
            return response.status(500).json(error)
        }
    }

    public async allPosts({ response }: HttpContextContract) {
        try {
            const all_posts = await Post.query().preload('comments')
            return response.status(200).json({ message: 'All post with their comments', all_posts })
        } catch (error) {
             console.log(error)
        }
    }

    public async updatePost({ params, request, response }: HttpContextContract) {
        try {
            const updateData = await Post.findOrFail(params.id)
            if (!updateData) {
                return response.status(400).json({ message: 'data can not found' })
            }
            const data = request.only(['title', 'short_des', 'full_des', 'auth_id'])
            updateData.merge(data)
            await updateData.save()
            return response.status(200).json(updateData)
        } catch (error) {
            return response.status(500).json({ message: 'Internal Server Error' })

        }
    }

    public async deletePost({ params, response }) {
        try {
            const data = await Post.findOrFail(params.id)

            if (!data) {
                return response.status(400).json({ message: 'data can not found' })
            }
            await data.delete()
            return response.status(204).json({ message: 'post deleted successfully', data })
        } catch (error) {
            return response.status(500).json({ message: 'Internal server error' })
        }
    }
   
}
