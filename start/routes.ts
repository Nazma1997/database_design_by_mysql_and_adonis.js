/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

// user end point
Route.post('/users', 'AuthController.createUser')
Route.get('/users', 'AuthController.allUser')
Route.patch('/users/:id/edit', 'AuthController.updateUser')
Route.delete('/users/:id/delete', 'AuthController.deleteUser')
Route.get('/users/:id', 'AuthController.singleUserByParams')


// post end point

Route.post('/posts', 'PostsController.createPost')
Route.get('/posts', 'PostsController.allPosts')
Route.patch('/posts/:id/edit', 'PostsController.updatePost')
Route.delete('/posts/:id/delete', 'PostsController.deletePost')


// comment end point 

Route.post('/comments', 'CommentsController.createComment')
Route.get('/comments', 'CommentsController.allComments')
Route.patch('/comments/:id/edit', 'CommentsController.updateComment')
Route.delete('/comments/:id/delete', 'CommentsController.deleteComment')


//reply end point

Route.post('/reply', 'RepliesController.createReply')
Route.patch('/reply', 'RepliesController.updateReply')
Route.delete('/reply/:id', 'RepliesController.deleteReply')


//react end point 

Route.post('/react', 'ReactsController.createReact')