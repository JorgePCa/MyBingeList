<script>
	
	import ToDoInputForm from "./ToDoInputForm.svelte"
	import ToDoList from "./ToDoList.svelte"
	let nameEntered = false
  
	let Email = ""
	let userName = ""
	let password = ""
  
	
	function handleSubmit() {
  	if (userName && Email && password) {
    	nameEntered = true
 	 }
	}
  </script>
  
  <main>
  {#if nameEntered}
	  <h1>Welcome to task manager, {userName}!</h1>
	  <ToDoInputForm userName={userName} />
	  <ToDoList />
	{:else}
	  <h1>Créez un compte</h1>
	  <form on:submit|preventDefault={handleSubmit}>
	  <div>
		<input bind:value={Email} type="email" placeholder="Email" required>
	  </div>
	  <div>
		<input bind:value={userName} type="text" placeholder="Nom d'utilisateur" required>
	  </div>
	  <div>
		<input bind:value={password} type="password" placeholder="Mot de passe" required>
	  </div>
	  <button on:click={handleSubmit}>Enregistrer</button>
	</form>
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