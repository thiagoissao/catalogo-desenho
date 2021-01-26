# Catálogo de Animes

Este é um projeto que utiliza uma api externa que traz diversas informações sobre milhares de desenhos japoneses (animes).

## Como executar o projeto na sua máquina

- Clone o repositório
- Instale as dependências com `yarn` ou `yarn install`
- Rode o projeto com `yarn dev`

## Estrutura do projeto

O projeto é dividido em diversos diretórios, na raiz do projeto existem as seguintes divisões:

- **PAGES**: Pertence ao next.js e representa as rotas que são acessadas pela url do site desenvolvido. Para este projeto foram utilizados a rotas `/` e `animes/[id]`. A raiz mostra o catálogo de animes disponíveis, com paginação e filtro, enquanto a rota `animes/[id]` apresenta os detalhes do *anime* selecionado. <br> Um detalhe a ser destacado é que não foi utilizado as pré-renderizações que o next disponibiliza (getStaticPaths, getStaticProps e getServerSideProps) e sim, foi utilizado a biblioteca `SWR` para as buscas dos dados na api.

- **SERVICES**: Diretório para serviços externos, nesse projeto o único intuito dela foi para fazer requisições na api utilizando `axios`.

- **UTILS**: Este diretório armazena toda a configuração da aplicação que pode ser utilizada em diversos locais, para este app o único arquivo criado foram para as constantes presentes. Nela poderia ser armazenada também um arquivo de `strings` (Ex: placeholders, nome da aplicação, etc), `formatadores` (ex: formatador monetário) e utilitários em geral.

- **STYLES**: Estilização global para a aplicação e padronização no layout.

- **COMPONENTS**: Aqui ficam todas os componentes react desenvolvidos, é possívelmente o diretório mais importante da aplicação. Este diretório foi dividido em outros diretórios na qual cada pasta representa uma "tela" desenvolvida. No caso deste projeto, existem as pastas `home`, que representa a tela inicial e a `details`, que representa a tela de detalhes do *anime*. Um terceiro diretório chamado `pure` armazena todos os componentes que são genéricos, isto é, possuem propriedades que podem ser utilizadas em diversos locais, como é o caso do componente `Layout`, que padroniza o tamanho máximo que uma tela pode ter e também implementa a estrutura padrão da tela.

## Tempo de desenvolvimento

Média de tempo gasto: ~ 10 horas

## Servidores Vercel

- Link de produção: [Catálogo de Animes](https://catalogo-desenho-84p82w55b.vercel.app/)
