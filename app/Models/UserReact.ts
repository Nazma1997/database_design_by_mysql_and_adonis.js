import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class UserReact extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public react_id: number

  @column()
  public post_id: number

  @column(
    
  )



}
