<template>
	<main>
		<Transition name="fade" appear mode="out-in">
			<HomeView v-if="currentView === 'home'"/>
			<RateView v-else-if="currentView === 'rate'" />
			<TeamView v-else-if="currentView === 'team'" />
			<TestimonialView v-else-if="currentView === 'testimonial'" />
		</Transition>
	</main>
</template>

<script setup>
import HomeView from '@/components/mainViews/HomeView.vue'
import RateView from '@/components/mainViews/RateView.vue'
import TeamView from '@/components/mainViews/TeamView.vue'
import TestimonialView from '@/components/mainViews/TestimonialView.vue'

defineProps({
	currentView : {
		type: String,
		default: 'home'
	}
})

</script>

<style scoped>
@import url('../../node_modules/animate.css/source/fading_entrances/fadeIn.css');
@import url('../../node_modules/animate.css/source/fading_exits/fadeOut.css');
.fade-enter-active {
	animation: fadeIn .3s;
}

.fade-exit-active {
	animation: fadeOut .3s;
}

main {
  grid-area: content;
  background-color: white;
}
</style>