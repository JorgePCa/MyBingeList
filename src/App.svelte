<script>

    import RegisterForm from "./pages/RegisterForm.svelte";
	import Home from "./pages/Home.svelte";
	import NotFound from "./pages/NotFound.svelte";

	import router from 'page';
   
	let page;
	let params;

	router('/', () => page = Home);
	router('/registerform', () => page = RegisterForm);
	router('/content/:id', (ctx, next) =>{
		params = ctx.params;
		next();
	}, () => page = Content);
	router('/*', () => (page = NotFound));

	router.start();

</script>
  

<svelte:component this={page} {params}/>
