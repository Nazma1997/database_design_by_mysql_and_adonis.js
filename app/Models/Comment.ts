import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Post from './Post';
import Auth from './Auth';

export default class Comment extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public des: string

  @column()
  public post_id: number

  @column()
  public user_id: number


  @belongsTo(() => Post)
  public post: BelongsTo<typeof Post>;

  @belongsTo(() => Auth)
  public user: BelongsTo<typeof Auth>;
}