import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'user_reacts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('react_id')
      table.integer('auth_id')
      table.integer('post_id')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
