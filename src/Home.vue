<template>
	<div>
	<app-server-list v-for="server in 5"></app-server-list>
	</div>
</template>

<script>
// Local Components

import Servers from './ServerStatus';
	export default {
		components: {
			'app-server-list': Servers
		}
	}
</script>