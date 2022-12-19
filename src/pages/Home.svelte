<script>
    let research = ""
	let nameEntered = false






	function Find() {

	}	
	function CreateAccountPage(){
		
	}


</script>
<main>

	<input bind:value={research} type="text" placeholder="Anime, catégorie, ...">
	<button on:click={Find}>Rechercher</button>
	<button on:click={CreateAccountPage}>Créez un compte</button>

</main>
  
  
<style>
    main {
	  text-align: center;
	  padding: 1em;
	  max-width: 450px;
	  margin: 0 auto;
	}
</style>