import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Post from './Post'
import Auth from './Auth'

export default class React extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public react_name: string

  @column()
  public post_id: number

  @column()
  public auth_id: number

  @column()
  public authId: number;

  @column() 
  postId: number

  @belongsTo(() => Post)
  public posts: BelongsTo<typeof Post>;


  @belongsTo(() => Auth)
  public user: BelongsTo< typeof Auth >


}
