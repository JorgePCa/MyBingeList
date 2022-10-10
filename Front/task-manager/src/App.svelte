<script>
  import ToDoInputForm from "./ToDoInputForm.svelte"
  import ToDoList from "./ToDoList.svelte"
  let nameEntered = false

  let Name = ""
  let Email = ""
  let Mdp = ""

  function handleSubmit() {
  if (Name && Email && Mdp) {
    nameEntered = true
  }
}
</script>

<main>
{#if nameEntered}
    <h1>Welcome to task manager, {Name}!</h1>
    <ToDoInputForm userName={Name} />
    <ToDoList />
{:else}
	<h1>Connectez vous pour accéder à votre liste</h1>
  	<h3>Entrez vos informations</h3>
	  <form on:submit|preventDefault={handleSubmit}>
  	<div>
    	<input bind:value={Name} type="text" placeholder="Nom" required>
  	</div>
	<div>
    	<input bind:value={Email} type="text" placeholder="Email" required>
  	</div>
  	<div>
    	<input bind:value={Mdp} type="password" placeholder="Mot de Passe"  required>
  	</div>
	<button on:click={handleSubmit}>Commencez à gérer les tâches</button>
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

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>