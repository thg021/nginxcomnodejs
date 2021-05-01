
create database if not exists desafio;
use desafio;

create table if not exists people (
    id int(11) auto_increment,
    name VARCHAR(255),
    PRIMARY KEY (id)
);

insert into people(name) value('Thiago Silva');
