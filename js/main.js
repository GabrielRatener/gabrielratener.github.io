
// component imports
import bio from "../components/bio.vue"
import services from "../components/services.vue"
import contact from "../components/contact.vue"

Vue.use(VueRouter);

window.onload = () => {
	const routes = [
		{name: 'Bio', path: '/', component: bio},
		{name: 'Services', path: '/services', component: services},
		{name: 'Contact', path: '/contact', component: contact}
	];

	const router = new VueRouter({routes});

	const app = new Vue({
		router,
		el: document.getElementById('app'),
		data: {
			routes
		}
	});
}