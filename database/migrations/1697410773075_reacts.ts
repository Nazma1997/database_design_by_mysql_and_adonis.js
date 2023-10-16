import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'reacts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('react_name')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
