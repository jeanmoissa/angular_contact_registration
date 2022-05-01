angular.module("listaTelefonica", ["ngMessages"]);
		angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, uppercaseFilter) {
			$scope.app = "Lista Telefônica";
			$scope.contatos = [
				{nome: "Jeferson", telefone: "8855-8458", data: new Date(), operadora: {nome: "Oi", codigo: 14, categoria: "Celular"}},
				{nome: "Leticia", telefone: "9194-1321", data: new Date(), operadora: {nome: "Vivo", codigo: 15, categoria: "Celular"}},
				{nome: "Marina", telefone: "9844-1235", data: new Date(), operadora: {nome: "Tim", codigo: 41, categoria: "Celular"}}
			];
			$scope.operadoras = [
				{nome: "Oi", codigo: 14, categoria: "Celular", preco: 2},
				{nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1},
				{nome: "Tim", codigo: 41, categoria: "Celular", preco: 3},
				{nome: "GVT", codigo: 25, categoria: "Fixo", preco: 1},
				{nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 2}
			];
			$scope.adicionarContato = function (contato) {
				$scope.contatos.push(angular.copy(contato));
				delete $scope.contato;
				$scope.contatoForm.$setPristine();
			};
			$scope.apagarContatos = function (contatos) {
				$scope.contatos = contatos.filter(function (contato) {
					if (!contato.selecionado) return contato;
				});
			};
			$scope.isContatoSelecionado = function (contatos) {
				return contatos.some(function (contato) {
					return contato.selecionado;
				});
			};
			$scope.ordenarPor = function (campo) {
				$scope.criterioDeOrdenacao = campo;
				$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
			};
		});