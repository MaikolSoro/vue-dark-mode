<template>
	<div class="content">

		<h3>This is {{mode}} mode</h3>
		<div class="image-grid">
			<div class="col">
				<img src="https://assets.investsuite.com/about-us/jobs/jobs-frontend-dev-2.jpg"/>
			</div>
			<div class="col">
				<img src="https://shape.design/wp-content/uploads/2018/10/studio-republic-644339-unsplash-1024x683.jpg" />
			</div>
			<div class="col">
				<img src="https://cdn-images-1.medium.com/max/1600/1*bRJLjkkbuHlv0BKx-QQKQg.jpeg" />
			</div>
		</div>
		<p class="para">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid laborum ut soluta id asperiores 
			fugiat placeat aspernatur ducimus. Tenetur sequi voluptates quisquam ad asperiores qui, iure expedita 
			non beatae culpa.
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid laborum ut soluta id asperiores 
			fugiat placeat aspernatur ducimus. Tenetur sequi voluptates quisquam ad asperiores qui, iure expedita 
			non beatae culpa.
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid laborum ut soluta id asperiores 
			fugiat placeat aspernatur ducimus. Tenetur sequi voluptates quisquam ad asperiores qui, iure expedita 
			non beatae culpa.
		</p>
	</div>
</template>

<script>
export default {
	props:['mode']
}
</script>
<style >
 .content{
	padding: 25px;
 }
 .content h3{
	font-size: 28px;
	text-transform: uppercase;
	font-weight: 300px;
	margin-bottom: 25px;
 }
 .image-grid {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 15px;
 }
 .image-grid .col img {
	width: 100%;
 }
 </style>