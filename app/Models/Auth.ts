import Hash from '@ioc:Adonis/Core/Hash'
import { BaseModel, HasMany, beforeSave, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Post from './Post'
import Comment from './Comment'

export default class Auth extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string


  @hasMany(() => Post)
  public posts: HasMany<typeof Post>;


  @hasMany(() => Comment)
  public comments: HasMany<typeof Comment>


  @beforeSave()
  public static async hashPassword(user: Auth) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password);
    }
  }


}
