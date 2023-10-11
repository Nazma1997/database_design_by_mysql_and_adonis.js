import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'comments'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('des')
      table.integer('post_id')
      table.integer("user_id")
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
