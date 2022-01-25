let About = { 
	data: function() {
		return {
			model: {
				title: 'Hola mundo',
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
			<h3>{{model.title}}</h3>
			<h3>{{model.name}}</h3>
		</div>
	`,
};