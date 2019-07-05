//Preciso subir o banco

//Enter porque antes sem a api funcionava e hoje não funciona mais.




Construir o software

1. Tenha a ideia do quer quer
2. Procura sites com layouts prontos para te ajudar a ter uma ideia do que quer(se tiver dinheiro contrate um UX consttuir algo qu a usabilidade dele seja testa e construida da melhor maneira possivel)
3. Você modela o banco de dados, tenha uma ideia de como ela será feita.
4. Faça o BDD contanto as histórias das regras de negócio.
5. Escolha a tecnologia que ira usar
6. Crie a configuração para o back(packagjson, index.js do ORM dentro de src/app, instale o jest, crie a pasta __test__, )
6. Faça o TDD com teste de unidade e integração - api(RED) para falhar, depois criar a funcionalidade que passe no teste(GREEN) e  refatore(BLUE) a funcionalidade da melhor maneira possivel. Use ORM para criar as migrations, ajuda no ganho de tempo. Aqui será criado a model, o controller que será chamado na rota, usa um postman ou insomnia para testar também.
7. Um projeto separado crie o front end, toda a view que conecte com a api que está no back.
8. Faça os tests de comportamemto simulando o cliente.