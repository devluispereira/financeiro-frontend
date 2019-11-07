# Front End Sistema de controle de finanças pessoais	
### Introdução:
O sistema foi construido em [REACT JS](https://pt-br.reactjs.org/) utilizando também o [Material Ui](https://material-ui.com/pt/) como estilo dos componentes do sistema. 



### Tela Inicial

![enter image description here](https://lh3.googleusercontent.com/23N5PO7LIC-SwwW2k7fmyg4zPCucZtZK4po8xC02geLDDXQ5Pdo7GutesYtALGhglvfvOvb8Kj9M "Tela de Login")

Após a confirmação do usuário , a tela  vai para o dashboard que contem algumas métricas de metas divididos por macro categorias:

#### Tela de Dashboard :
É feita uma chamada a api recuperando os metadados dos grupos e as despesas gerais do mês. Assim fazemos a atribuição de cada gráfico a respectiva despesa , tornando-se um gráfico dinâmico .
![enter image description here](https://lh3.googleusercontent.com/IlJOLQhvVncBMduMzTdEZSfSUHdcQ-FyW2saRF-kKeLTJOIP7b3JQX_pkrLf6-6jBxi9ka4z-1p1 "Dashboard")

#### Tela de Despesas x Receitas
Esta tela já faz um comparativo geral de despesas e receitas.
![enter image description here](https://lh3.googleusercontent.com/Wh2KYxEA8RJA1I_ObCailtIBtyi8LWfdZaMeys784E-DR3yV_SSkzyUKfTs6jSwlQxQ490-RTtVQ "Tela despesas e receitas")

#### Menu :
O menu foi feito ultilizando o APPBAR do Material UI que consta as nossas despesas, receitas e dashborad.

![enter image description here](https://lh3.googleusercontent.com/8xMrvTZKV-_4eWkranOwJ0OlJmuBmZnLosiztKN2BOurD6iGhuIYhZXKdDrqhus_vYxHydGvTjHv "Menu Appbar")
#### Contas a Pagar
O Contas a pagar esta todas as contas referente ao mês a serem pagas; Será desenvolvido futuramente um filtro de tempo para selecionar e visualizar melhor as contas.
![
](https://lh3.googleusercontent.com/f1VErNoWvgzHo4vhtvoJjxkVb445Bf8kHwyplriSFwHVgGb30u9DPRNC_Vg0btmtNxe616-fLKPg "Contas a pagar")


### Codigo.

O restante do código está disponível no repositório. 

para iniciar o front end bastar digitar no terminas `yarn start` . Porem para melhor experiencia é necessário o back-end que se encontra [aqui](https://github.com/devluispereira/financeiro-back-end) .
