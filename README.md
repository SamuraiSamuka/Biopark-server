# BioPark - server

Este é o server do aplicativo gerenciador de apartamentos.
[github do cliente ](https://github.com/SamuraiSamuka/Apartamentos)

## Requisitos para rodar o sistema

* Windows com os seguintes requisitos:
 * wsl instalado - Talvez não funcione em windows mais antigos, recomendo utilizar windows 11. Para instalar basta abrir o terminal e digitar o comando 'wsl --install' e reiniciar o computador
* Docker instalado - é interessante que não haja outros container já instalados  para não dar conflito da porta ou do banco de dados.
Pode baixar o docker aqui [docker](https://docs.docker.com/desktop/install/windows-install/)
* NodeJs instalado - pode ser a versão mais recente. [nodejs](https://nodejs.org/en/download/)
* VsCode instalado - versão mais recente [vscode](https://code.visualstudio.com/download)
* É importante não ter o postgressql instalado na máquina, pois dará conflito com o postgresql do docker.


## Passo a passo para rodar a aplicação

Abrir a pasta server através do vs code e abrir o terminarl com ctrl+', e digitar os seguintes comandos:
* npm i
* docker-compose up -d
* npx prisma migrate dev Condominios
* npm run dev

Despois abrir a pasta solução/client através do vs code e abrir o terminarl com ctrl+', e digitar os seguintes comandos:´
* npm i
* npm run dev
Depois é só clicar segurando ctrl no link exibido no terminal parecido com ese: ➜  Local:   http://localhost:5173/

