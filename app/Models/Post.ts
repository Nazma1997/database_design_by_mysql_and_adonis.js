import { BaseModel, BelongsTo, HasMany, belongsTo, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Comment from './Comment'
import Auth from './Auth'

export default class Post extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public short_des: string

  @column()
  public full_des: string

  @column()
  public auth_id: number

  
  // @column()
  // public authId: number;

  @belongsTo(() => Auth)
  public user: BelongsTo<typeof Auth>;


  @hasMany(() => Comment)
  public comments: HasMany<typeof Comment>;


}
