console.log("connected");

const one = {
	template: `
		<div class="text-center">
			<h3>An oil painting of a Muni bus</h3>
			<img class="img-fluid" src="img/muni.jpg" alt="an oil painting of a Muni bus">
		</div>
	`
}
const two = {
	template: `
		<div class="text-center">
			<h3>A mixed media image of SF and a heart</h3>
			<img class="img-fluid" src="img/heartSF.jpg" alt="A mixed media image of SF and a heart">
		</div>
	`
}
const three = {
	template: `
		<div class="text-center">
			<h3>A watercolor painting of a woman holding rosemary</h3>
			<img class="img-fluid" src="img/rosemary.jpg" alt="A watercolor painting of a woman holding rosemary">
		</div>
	`
}

const router = new VueRouter({
	routes: [
		{
			path: '/one',
			component: one
		},
		{
			path: '/two',
			component: two

		},
		{
			path: '/three',
			component: three

		}
	]
})

var routeTest = new Vue({
	router,
	el: '#app',
	data: {

	},
	methods: {

	}
}).$mount('#app')



