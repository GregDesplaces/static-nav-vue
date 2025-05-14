import HomeView from '@/views/HomeView.vue'

export const routes = [
		{
			path: '/',
			name: 'home',
			component: HomeView
		},
		{
			path: '/rate',
			name: 'rate',
			component: () => import('@/views/RateView.vue')
		},
		{
			path: '/team',
			name: 'team',
			component: () => import('@/views/TeamView.vue')
		},
		{
			path: '/testimonial',
			name: 'testimonial',
			component: () => import('@/views/TestimonialView.vue')
		}
	
	]