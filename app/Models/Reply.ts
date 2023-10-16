
import { BaseModel, BelongsTo, HasMany, belongsTo, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Post from './Post'
import Auth from './Auth'
import Comment from './Comment'


export default class Reply extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public reply_des: string

  @column()
  public post_id: number

  @column()
  public auth_id: number

  @column()
  public comment_id: number

  @column()
  public authId: number;

  // @column()
  // public postId: number;

  @column() 
  commentId: number


  @belongsTo(() => Comment)
  public comments: BelongsTo<typeof Comment >

  // @belongsTo(() => Post)
  // public post: BelongsTo<typeof Post>;

  @belongsTo(() => Auth)
  public user: BelongsTo<typeof Auth>;


 
 
}
