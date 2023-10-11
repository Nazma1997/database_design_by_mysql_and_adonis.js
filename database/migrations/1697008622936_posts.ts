import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'posts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title', 255).notNullable()
      table.string('short_des', 255)
      table.string('full_des', 255)
      table.integer('auth_id')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
