import Knex from 'knex';

export async function up(knex: Knex) {
    //Criar a tabela
    return knex.schema.createTable('items', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('title').notNullable();
    });
}

export async function down(knex: Knex) {
    //Voltar a ação (Deletar uma tabela)
    return knex.schema.dropTable('items');
}