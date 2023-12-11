let Resource = Vue.component('Resource', {
    data: function() {
        return {
            model: {
                title: 'Recursos',
                backend: [{
                        name: 'PHP',
                        icono: '',
                        frameworks: [{
                                name: 'Laravel',
                                icono: '../img/icons/laravel.png',
                                estado: ''
                            },
                            {
                                name: 'Codeigniter',
                                icono: '../img/icons/codeigniter.png',
                                estado: ''
                            }
                        ]
                    },
                    {
                        name: 'JAVA',
                        icono: '',
                        frameworks: [{
                            name: 'SpringFramework',
                            icono: '../img/icons/spring.png',
                            estado: ''
                        }]
                    },
                    {
                        name: 'NODE',
                        icono: '',
                        frameworks: [{
                            name: 'Express',
                            icono: '../img/icons/express.png',
                            estado: ''
                        }]
                    },
                ],
                fronted: [{
                        name: 'JavaScript',
                        icono: '',
                        frameworks: [{
                                name: 'JQuery',
                                icono: '../img/icons/jquery.png',
                                estado: ''
                            },
                            {
                                name: 'Vue.js, Vue 2',
                                icono: '../img/icons/vue.png',
                                estado: ''
                            },
                            {
                                name: 'Angular js',
                                icono: '../img/icons/angular.svg',
                                estado: ''
                            },
                            {
                                name: 'React js',
                                icono: '../img/icons/react.png',
                                estado: ''
                            }
                        ]

                    },
                    {
                        name: 'Css',
                        icono: '',
                        frameworks: [{
                                name: 'Element UI',
                                icono: '../img/icons/element-ui.png',
                                estado: ''
                            },
                            {
                                name: 'Bootstrap',
                                icono: '../img/icons/boostrap.png',
                                estado: ''
                            },
                            {
                                name: 'Bootstrap-Vue',
                                icono: '../img/icons/boostrapvue.png',
                                estado: ''
                            },
                            {
                                name: 'FontAwesome',
                                icono: '../img/icons/fontawesome.svg',
                                estado: ''
                            },
                            {
                                name: 'PrimeFaces',
                                icono: '../img/icons/primefaces.png',
                                estado: ''
                            }
                        ]

                    }
                ],
                entornos: [{
                    name: 'Entornos Nativos',
                    icono: '',
                    nativos: [{
                            name: 'Expo (basado en react-native)',
                            icono: '../img/icons/expo.png',
                            estado: ''
                        },
                    ]
                }],
                bd: [{
                    name: 'Relacionales',
                    icono: '',
                    db: [{
                            name: 'MySql',
                            icono: '../img/icons/mysql.png',
                            estado: ''
                        },
                        {
                            name: 'PostgreSql',
                            icono: '../img/icons/postgresql.svg',
                            estado: ''
                        },
                        {
                            name: 'SqlServer',
                            icono: '../img/icons/sqlserver.png',
                            estado: ''
                        },
                        {
                            name: 'SQLite',
                            icono: '../img/icons/sqlite.png',
                            estado: ''
                        },
                    ]
                }],
                versionadores: [{
                    name: 'Git',
                    icono: '',
                    lista: [{
                            name: 'GitHub',
                            icono: '../img/icons/github.png',
                            estado: ''
                        },
                        {
                            name: 'GitLab',
                            icono: '../img/icons/gitlab.svg',
                            estado: ''
                        }
                    ]
                }, ],
            }
        }
    },
    mounted() {
        this.cargando()
    },
    methods: {
        cargando() {
            window.document.getElementById('cargando').style.display = ""
            window.document.getElementById('contenido').style.display = "none"
            setTimeout(function() {
                window.document.getElementById('cargando').style.display = "none"
                window.document.getElementById('contenido').style.display = ""
            }, 600)
        }
    },
    template: `
		<div class="mt-3">
			<div class="text-center mt-4 col-sm-12 row">
				<div class="col-sm"></div>
				<div class="col-sm box-title">
					<h3 class="font-title">{{model.title}}</h3>
				</div>
				<div class="col-sm"></div>
			</div>

			<div class="preloaderPadre" id="cargando">
				<div class="preloaderHijo">
				</div>
			</div>
			
			<div class="col-sm-12 mx-auto row" id="contenido">
                <div class="card mb-4" style="background-color:#f3f3f3">
					<div class="card-body">
                        <div class="mt-4 col-sm-12 row mb-2">
                            <div class="d-inline-flex p-2 bd-highlight">
                                <h3 class="font-subtitle">Lenguajes Backend</h3>
                            </div>
                        </div>
                        <div class="container row">
                            <div class="col-sm-4 mb-4" v-for="(lbackend, index1) in model.backend">
                                <div class="card" style="height: 100%!important">
                                    <div class="card-body">
                                        <h5 class="card-title text-center">{{lbackend.name}}</h5>
                                        <p class="card-text">{{lbackend.icono}}</p>
                                        <ul v-for="(fbackend, index2) in lbackend.frameworks" class="p-0">
                                            <l1><img :src="fbackend.icono" style="height: 2rem; width: 2rem;" alt="">{{fbackend.name}}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-4 col-sm-12 row mb-2">
                            <div class="d-inline-flex p-2 bd-highlight">
                                <h3 class="font-subtitle">Lenguajes Frontend</h3>
                            </div>
                        </div>
                        <div class="container row">
                            <div class="col-sm-4 mb-4" v-for="(lfronted, index3) in model.fronted">
                                <div class="card" style="height: 100%!important">
                                    <div class="card-body">
                                        <h5 class="card-title text-center">{{lfronted.name}}</h5>
                                        <p class="card-text">{{lfronted.icono}}</p>
                                        <ul v-for="(ffrontend, index4) in lfronted.frameworks" class="p-0">
                                            <l1><img :src="ffrontend.icono" style="height: 2rem; width: 2rem;" alt="">{{ffrontend.name}}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-4 col-sm-12 row mb-2">
                            <div class="d-inline-flex p-2 bd-highlight">
                                <h3 class="font-subtitle">Entornos Nativos</h3>
                            </div>
                        </div>
                        <div class="container row">
                            <div class="col-sm-4 mb-4" v-for="(enativos, index5) in model.entornos">
                                <div class="card" style="height: 100%!important">
                                    <div class="card-body">
                                        <h5 class="card-title text-center">{{enativos.name}}</h5>
                                        <p class="card-text">{{enativos.icono}}</p>
                                        <ul v-for="(enativos, index6) in enativos.nativos" class="p-0">
                                            <l1><img :src="enativos.icono" style="height: 2rem; width: 2rem;" alt="">{{enativos.name}}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-4 col-sm-12 row mb-2">
                            <div class="d-inline-flex p-2 bd-highlight">
                                <h3 class="font-subtitle">Bases de datos</h3>
                            </div>
                        </div>
                        <div class="container row">
                            <div class="col-sm-4 mb-4" v-for="(database, index7) in model.bd">
                                <div class="card" style="height: 100%!important">
                                    <div class="card-body">
                                        <h5 class="card-title text-center">{{database.name}}</h5>
                                        <p class="card-text">{{database.icono}}</p>
                                        <ul v-for="(db, index8) in database.db" class="p-0">
                                            <l1><img :src="db.icono" style="height: 2rem; width: 2rem;" alt="">{{db.name}}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-4 col-sm-12 row mb-2">
                            <div class="d-inline-flex p-2 bd-highlight">
                                <h3 class="font-subtitle">Versionamiento</h3>
                            </div>
                        </div>
                        <div class="container row">
                            <div class="col-sm-4 mb-4" v-for="(version, index9) in model.versionadores">
                                <div class="card" >
                                <div class="card-body">
                                    <h5 class="card-title text-center">{{version.name}}</h5>
                                    <p class="card-text">{{version.icono}}</p>
                                    <ul v-for="(lversionadores, index10) in version.lista" class="p-0">
                                        <l1><img :src="lversionadores.icono" style="height: 2rem; width: 2rem;" alt="">{{lversionadores.name}}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
			</div>
		</div>
	`,
});