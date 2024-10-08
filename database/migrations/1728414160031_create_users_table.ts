import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('code_atelier').unique().notNullable() // Code unique pour chaque atelier
      table.string('nom_etablissement').notNullable() // Nom de l'atelier de couture
      table.string('nom_proprietaire').notNullable() // Nom du propriétaire
      table.string('indicatif_pays').notNullable().unique() // Numéro de téléphone unique
      table.string('telephone').unique().notNullable() // Indicatif du pays (ex: +226)
      table.string('password').notNullable()
      table.enum('role', ['admin', 'employer']).defaultTo('employer').notNullable() // Role de l'utilisateur
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
