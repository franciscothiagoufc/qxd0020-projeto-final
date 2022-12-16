# :checkered_flag: Deliver.Me

Um sistema onde entregadores autonomos podem divulgar e prestar seus serviços.

## :technologist: Membros da equipe

415199, Francisco Thiago dos Santos Gonçalves. Engenharia de Computação.
473825, Carlos Eduardo Costa Nunes. Engenharia de Software.

## :people_holding_hands: Papéis ou tipos de usuário da aplicação

- Usuário não logado
- Usuário Logado(Autenticated)
- Entregador(Deliver)
- Administrador(Admin)
## :spiral_calendar: Entidades ou tabelas do sistema

- Usuário (User)
- Entegador (Deliver)
- Pedido (Order)

## :triangular_flag_on_post:	 Principais funcionalidades da aplicação

- Usuário não logado pode pesquisar por entregadores baseado em seus nomes ou locais de atuação e obter uma descrição básica.
- O usuário não logado pode se cadastrar no sistema, adicionando uma nova entrada na tabela User, onde, por padrão, ele recebe o papel(role) de usuário autenticado (Autenticated).
- Ainda na tela de cadastro, o usuário pode encolher se afiliar ao site, logo se tornando um entregador. Nesse caso, seu papel(role) é atualizado para Deliver e uma nova entrada é adicionada a tabela Deliver, onde sua descrição e local de atuação são cadastrados.
- O usuário logado pode pesquisar entregadores além de contratar seus serviços por meio do botão contratar, disponível apenas para usuários autenticados. Ao realizar o contrato, um novo elemento na entidade Order é criado. A interação com Order varia de acordo com o tipo do usuário.
  -O usuário autenticado que fez o pedido pode cancelar ou finalizar o pedido atribuindo uma nota ao serviço. Essa interação é feita na rota /myorders 
  -O usuário Deliver que recebeu o pedido pode visualizar o pedido e, caso tenha sido finalizado, visualizar a nota recebida. Essa interação é feita na rota /deliver
- O usuário que possue um elemento na tabela entregadores pode editar suas informações.
- O administrator pode excluir e alterar o nome e o email de qualquer usuário.

----

:warning::warning::warning: As informações a seguir devem ser enviadas juntamente com a versão final do projeto. :warning::warning::warning:


----

## :desktop_computer: Tecnologias e frameworks utilizados

**Frontend:**

Vue, Vue Cli,Vue Router, Axios, Bootstrapi, Css, Html, JavaScript,

**Backend:**

Strapi.


## :shipit: Operações implementadas para cada entidade da aplicação


| Entidade| Criação | Leitura | Atualização | Remoção |
| --- | --- | --- | --- | --- |
| User | X |  X  | X | X |
| Deliver | X |  X  |  X |  |
| Order | X |    | X | X |

> Lembre-se que é necessário implementar o CRUD de pelo menos duas entidades.

## :neckbeard: Rotas da API REST utilizadas

| Método HTTP | URL |
| --- | --- |
| GET | api/users/|
| POST | api/users/|
| PUT | api/users/|
| DELETE | api/users/|
| GET | api/delivers/|
| POST | api/delivers/|
| PUT | api/delivers/|
| GET | api/orders/|
| POST | api/orders/|
| DELETE | api/orders/|
