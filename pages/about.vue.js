let About = { 
	data: function () {
		return {
			model: {
				title: 'Sobre mi',
				name: 'Javier Baron',
				posts: [
					{ id: 1, title: 'Mi viaje con Vue' },
					{ id: 2, title: 'Blogging con Vue' },
					{ id: 3, title: 'Por qué Vue es tan divertido?' }
				]
			}
		}
	},
	template: `
		<div>
			<div class="row text-center mt-4">
				<h3>{{model.title}}<h3>
			</div>
			
			<div class="col-sm-12 row">
				<div class="col-sm-6 mb-4 justificado-izquierda">
					Mi nombre es Javier Ricardo Baron Fuentes, nací el 1 de Junio del año 1996 y en la actualidad tengo 25 años. <br><br>

					Soy egresado de las Unidades Tecnologicas de Santander (UTS), seccional bucaramanga. Institución en la cual curse una Tecnología en Desarrollo de Sistemas Informaticos y de la cual 
					me gradue en el año 2019.
					Desde ahí y hasta la actualidad me e venido enfocandome en el analisis, desarrollo y montaje de sistemas informaticos para la web usando lenguajes de programación como Java, Node y PHP mencionando este ultimo como mi fuerte y ayudandome de
					JavaScript para darle dinamismo a las paginas. <br><br>
					
					Actualmente me encuentro aprendiendo mas sobre estas tecnologias para mejorar e ir avanzando en la forma la cual escribo codigo.
				</div>
				<div class="col-sm-6 mb-4">
					<img src="../img/yo.jpg" alt="" class="img-thumbnail">
				</div>
			</div>
		</div>
	`,
};