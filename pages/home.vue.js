let Home = Vue.component('Home', {
	data: function () {
		return {
			model: {
				title: 'Bienvenido',
				posts: [
					{ id: 1, title: 'Mi viaje con Vue' },
					{ id: 2, title: 'Blogging con Vue' },
					{ id: 3, title: 'Por qué Vue es tan divertido?' }
				]
			}
		}
	},
	mounted(){
		this.cargando()
	},
	methods: {
		cargando(){
			window.document.getElementById('cargando').style.display = ""
			window.document.getElementById('contenido').style.display = "none"
			setTimeout(function(){
				window.document.getElementById('cargando').style.display = "none"
				window.document.getElementById('contenido').style.display = ""
			}, 600)
		}
	},
	template: `
		<div >
			<div class="row text-center mt-4">
				<h3>{{model.title}}<h3>
			</div>

			<div class="preloaderPadre" id="cargando">
				<div class="preloaderHijo">
				</div>
			</div>
			
			<div class="col-sm-12 row" id="contenido">
				<div class="col-sm-6 mb-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cumque incidunt in magni quidem at voluptate velit earum sed laboriosam vero excepturi ea dolore accusamus, blanditiis fugiat tempore, nemo exercitationem?
				</div>
				<div class="col-sm-6 mb-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cumque incidunt in magni quidem at voluptate velit earum sed laboriosam vero excepturi ea dolore accusamus, blanditiis fugiat tempore, nemo exercitationem?
				</div>
				<div class="col-sm-6 mb-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cumque incidunt in magni quidem at voluptate velit earum sed laboriosam vero excepturi ea dolore accusamus, blanditiis fugiat tempore, nemo exercitationem?
				</div>
				<div class="col-sm-6 mb-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cumque incidunt in magni quidem at voluptate velit earum sed laboriosam vero excepturi ea dolore accusamus, blanditiis fugiat tempore, nemo exercitationem?
				</div>
				<div class="col-sm-6 mb-4">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cumque incidunt in magni quidem at voluptate velit earum sed laboriosam vero excepturi ea dolore accusamus, blanditiis fugiat tempore, nemo exercitationem?
				</div>
				<div class="col-sm-6 mb-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cumque incidunt in magni quidem at voluptate velit earum sed laboriosam vero excepturi ea dolore accusamus, blanditiis fugiat tempore, nemo exercitationem?
				</div>
				<div class="col-sm-6 mb-4">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cumque incidunt in magni quidem at voluptate velit earum sed laboriosam vero excepturi ea dolore accusamus, blanditiis fugiat tempore, nemo exercitationem?
				</div>
				<div class="col-sm-6 mb-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cumque incidunt in magni quidem at voluptate velit earum sed laboriosam vero excepturi ea dolore accusamus, blanditiis fugiat tempore, nemo exercitationem?
				</div>
				<div class="col-sm-6 mb-4">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cumque incidunt in magni quidem at voluptate velit earum sed laboriosam vero excepturi ea dolore accusamus, blanditiis fugiat tempore, nemo exercitationem?
				</div>
				<div class="col-sm-6 mb-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cumque incidunt in magni quidem at voluptate velit earum sed laboriosam vero excepturi ea dolore accusamus, blanditiis fugiat tempore, nemo exercitationem?
				</div>
				<div class="col-sm-6 mb-4">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cumque incidunt in magni quidem at voluptate velit earum sed laboriosam vero excepturi ea dolore accusamus, blanditiis fugiat tempore, nemo exercitationem?
				</div>
				<div class="col-sm-6 mb-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cumque incidunt in magni quidem at voluptate velit earum sed laboriosam vero excepturi ea dolore accusamus, blanditiis fugiat tempore, nemo exercitationem?
				</div>
			</div>
		</div>
	`,
})

