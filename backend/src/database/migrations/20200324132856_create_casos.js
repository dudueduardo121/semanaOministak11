
exports.up = function(knex) {
    return knex.schema.createTable('casos', function(table){
        table.increments();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        // relacionamento com a table ong
        table.string('ong_id').notNullable();

        // chave estrangeira que referencia o id da tabela ong
        table.foreign('ong_id').references('id').inTable('ongs');
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('casos');
};
