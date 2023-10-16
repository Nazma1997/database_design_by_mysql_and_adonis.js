import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'replies'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('reply_des')
      // table.integer('post_id')
      table.integer("auth_id")
      table.integer('comment_id')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
