<template>
	<div v-if="hasProduct">
		<h1>{{ product.title }}</h1>
		<hr>
		<div class="alert alert-success">
			{{ product.price }}
		</div>
		<hr>
		<product-controls :id="id"></product-controls>
		<hr>
		<router-link :to="{name: 'products'}">
			Back to products
		</router-link>
		<hr>
		<div class="mb-3">
			Current Product Rating: N
		</div>
		<div class="row">
			<div class="col col-2">
				<div><small>Your last mark: N </small></div>
				<div><small>Your current mark: N</small></div>
			</div>
			<div class="col col-8">
				<b-form-rating v-model="userMark"></b-form-rating>
			</div>
			<div class="col col-2">
				<button class="btn btn-primary">Send</button>
			</div>
		</div>
		<hr>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis voluptate necessitatibus ullam dolorum laudantium, eos deleniti cupiditate atque magnam autem dignissimos aliquam aut aliquid quae vero, quaerat consectetur eius animi!</p>
		<p>Iusto facere fuga, voluptatum numquam optio eos modi aliquam, odit a ad alias ex laborum quis voluptates, iste incidunt! Veritatis rem fuga aspernatur, sapiente saepe iste libero ab quo aliquid.</p>
		<p>Consequatur nulla voluptates cum minus illo tempore architecto magnam dolorem reiciendis saepe, recusandae eaque nihil beatae mollitia minima quae natus, facilis. Maxime dolore, nobis. Iusto numquam eligendi amet enim inventore!</p>
		<p>Qui reprehenderit quae, ipsam odio tempore minima molestias placeat vel, eius quidem itaque assumenda sed dolores a commodi, quibusdam fuga eveniet cum. Doloremque, assumenda rem. Vel perferendis architecto, ab magnam.</p>
	</div>
	<app-404 v-else /> 
</template>
<script>
	import App404 from '@/components/E404';
	import ProductControls from '@/components/ProductControls';
	import { mapGetters } from 'vuex';
	import { BFormRating } from 'bootstrap-vue'

	export default {
		components: {
			App404,
			ProductControls,
			BFormRating
		},
		data(){
			return {
				userMark: 0
			}
		},
		computed: {
			...mapGetters('products', { productProxy: 'one' }),
			id(){
				return +this.$route.params.id; // may be better
			},
			product(){
				return this.productProxy(this.id);
			},
			hasProduct(){
				return typeof this.product !== 'undefined';
			}
		}
	}
</script>