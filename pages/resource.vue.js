let Resource = {
	data: function () {
		return {
			model: {
				title: 'Recursos',
				backend: [
					{
						name: 'PHP',
						icono: '',
						frameworks: [
							{
								name: 'Laravel',
								icono: '../img/laravel.png',
								estado: ''
							},
							{
								name: 'Codeigniter',
								icono: '../img/codeigniter.png',
								estado: ''
							}
						]
					},
					{
						name: 'JAVA',
						icono: '',
						frameworks: [
							{
								name: 'JavaServer Faces',
								icono: '../img/laravel.png',
								estado: ''
							},
							{
								name: 'Hibernate',
								icono: '../img/hibernate.svg',
								estado: ''
							},
							{
								name: 'SpringFramework',
								icono: '../img/spring.png',
								estado: ''
							}
						]
					},
					{
						name: 'NODE',
						icono: '',
						frameworks: [
							{
								name: 'Express',
								icono: '../img/express.png',
								estado: ''
							}
						]
					},
				],
				fronted: [
					{
						name: 'JavaScript',
						icono: '',
						frameworks: [
							{
								name: 'JQuery',
								icono: '../img/jquery.png',
								estado: ''
							},
							{
								name: 'Vue.js',
								icono: '../img/vue.png',
								estado: ''
							},
							{
								name: 'Vue 2',
								icono: '../img/vue.png',
								estado: ''
							},
							{
								name: 'Angular js',
								icono: '../img/angular.svg',
								estado: ''
							}
						]

					},
					{
						name: 'Css',
						icono: '',
						frameworks: [
							{
								name: 'Element IO',
								icono: '../img/laravel.png',
								estado: ''
							},
							{
								name: 'Bootstrap',
								icono: '../img/boostrap.png',
								estado: ''
							},
							{
								name: 'Bootstrap-Vue',
								icono: '../img/boostrapvue.png',
								estado: ''
							},
							{
								name: 'FontAwesome',
								icono: '../img/fontawesome.svg',
								estado: ''
							},
							{
								name: 'PrimeFaces',
								icono: '../img/primefaces.png',
								estado: ''
							}
						]

					}
				],
				bd: [
					{
						name: 'Relacionales',
						icono: '',
						db: [
							{
								name: 'MySql',
								icono: '../img/mysql.png',
								estado: ''
							},
							{
								name: 'PostgreSql',
								icono: '../img/postgresql.svg',
								estado: ''
							},
							{
								name: 'SqlServer',
								icono: '../img/sqlserver.png',
								estado: ''
							}
						]
					}
				],
				versionadores: [
					{
						name: 'Git',
						icono: '',
						lista: [
							{
								name: 'GitHub',
								icono: '../img/github.png',
								estado: ''
							},
							{
								name: 'GitLab',
								icono: '../img/gitlab.svg',
								estado: ''
							}
						]
					},
				],
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
		<div>
			<div class="row text-center mt-4">
				<h3>{{model.title}}<h3>
			</div>

			<div class="preloaderPadre" id="cargando">
				<div class="preloaderHijo">
				</div>
			</div>
			
			<div class="col-sm-12 row" id="contenido">
				<div calss="row">
					Lenguajes Backend
				</div>
				<div class="col-sm-4 mb-4" v-for="(lbackend, index3) in model.backend">
					<div class="card" >
						<div class="card-body">
							<h5 class="card-title text-center">{{lbackend.name}}</h5>
							<p class="card-text">{{lbackend.icono}}</p>
							<ul v-for="(fbackend, index4) in lbackend.frameworks" class="p-0">
								<l1><img :src="fbackend.icono" style="height: 2rem; width: 2rem;" alt="">{{fbackend.name}}</li>
							</ul>
						</div>
					</div>
				</div>
				<div calss="row">
					Lenguajes Frontend
				</div>
				<div class="col-sm-4 mb-4" v-for="(lfronted, index1) in model.fronted">
					<div class="card" >
						<div class="card-body">
							<h5 class="card-title text-center">{{lfronted.name}}</h5>
							<p class="card-text">{{lfronted.icono}}</p>
							<ul v-for="(ffrontend, index4) in lfronted.frameworks" class="p-0">
								<l1><img :src="ffrontend.icono" style="height: 2rem; width: 2rem;" alt="">{{ffrontend.name}}</li>
							</ul>
						</div>
					</div>
				</div>
				<div calss="row">
					Bases de datos
				</div>
				<div class="col-sm-4 mb-4" v-for="(database, index5) in model.bd">
					<div class="card" >
						<div class="card-body">
							<h5 class="card-title text-center">{{database.name}}</h5>
							<p class="card-text">{{database.icono}}</p>
							<ul v-for="(db, index6) in database.db" class="p-0">
								<l1><img :src="db.icono" style="height: 2rem; width: 2rem;" alt="">{{db.name}}</li>
							</ul>
						</div>
					</div>
				</div>
				<div calss="row">
					Versionadores de codigo
				</div>
				<div class="col-sm-4 mb-4" v-for="(version, index7) in model.versionadores">
					<div class="card" >
					<div class="card-body">
						<h5 class="card-title text-center">{{version.name}}</h5>
						<p class="card-text">{{version.icono}}</p>
						<ul v-for="(lversionadores, index8) in version.lista" class="p-0">
							<l1><img :src="lversionadores.icono" style="height: 2rem; width: 2rem;" alt="">{{lversionadores.name}}</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	`,
};