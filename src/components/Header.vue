<template>
	<header>
		<h1>{{ mode }} Mode</h1>
		<nav>
			<div class="nav-link">Home</div>
			<div class="nav-link">About</div>
			<div class="nav-link">Portfolio</div>
			<div class="nav-link">Contact</div>
		</nav>
	</header>
</template>

<script>
export default {
	props:['mode']
}
</script>