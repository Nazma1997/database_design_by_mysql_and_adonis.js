import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import React from 'App/Models/React'

export default class ReactsController {

    public async createReact({request, response }: HttpContextContract) {
       
        try {
            const data = request.only(['react_name', 'post_id','auth_id'])
            const react = await React.create(data)
            return response.status(201).json(react)
            
        } catch (error) {
            console.log('error', error)
            return response.status(500).json(error)
        }
    }

    public async allReact({ response }: HttpContextContract) {
        try {
            const all_comments = await React.query()
            
            return response.status(200).json({ message: 'All post with their comments', all_comments })
        } catch (error) {
             console.log(error)
        }
    }


    
    public async updateReact({ params, request, response }: HttpContextContract) {
        try {
            const updateData = await React.findOrFail(params.id)
            if (!updateData) {
                return response.status(400).json({ message: 'data can not found' })
            }
            const data = request.only(['react_name', 'post_id','auth_id'])
            updateData.merge(data)
            await updateData.save()
            return response.status(200).json(updateData)
        } catch (error) {
            return response.status(500).json({ message: 'Internal Server Error' })

        }
    }

   
}
