<script>
    import RegisterForm from "./RegisterForm.svelte";

   

	let nameEntered = false

	let createAccount = false

	
	let research = ""

	function Find() {

	}
	function CreateAccountPage(){

    	createAccount = true
	}
	function handleSubmit() {
  	if (userName && Email && password) {
    	nameEntered = true
 	 }
	}
  </script>
  
  <main>


	{#if createAccount}
	  <RegisterForm/>
	{:else}
	<input bind:value={research} type="text" placeholder="Anime, catégorie, ...">
	<button on:click={Find}>Rechercher</button>
	<button on:click={CreateAccountPage}>Créez un compte</button>

	{/if}
	
  </main>
  
  
  <style>
	main {
	  text-align: center;
	  padding: 1em;
	  max-width: 450px;
	  margin: 0 auto;
	}
  </style>