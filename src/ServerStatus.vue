<template>
	<div>
		<p> The Status is {{status}}</p>
		<button v-on:click="changeStatus">Change Status</button>
	</div>
</template>

<script>
	export default {
		data: function(){
			return {
				status: 'Good to Go'
			}
		},
		methods: {
			changeStatus: function() {
				this.status = 'Under Maintenance';
			}
		}
	}
</script>