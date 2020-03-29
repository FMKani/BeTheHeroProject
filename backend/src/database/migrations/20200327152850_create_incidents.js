
exports.up = function(knex) {
  //Cria a tabela 'incidents'
  return knex.schema.createTable('incidents', function(table){
    //Primary key
    table.increments();
    //Campos da tabela
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();
    //Relacionamento
    table.string('ong_id').notNullable();
    //Chave estrangeira
    table.foreign('ong_id').references('id').inTable('ongs');
  });
};

//Excluir tablela
exports.down = function(knex) {
    return knex.schema.dropTable('icidents');
};
