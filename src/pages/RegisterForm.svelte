
<script>

	let nameEntered = false

	function handleSubmit() {
  	if (userName && Email && password) {
    	nameEntered = true
 	 }
	}
    let Email = ""
	let userName = ""
	let password = ""
  </script>
  
  <h1>Créez un compte</h1>
  <form on:submit|preventDefault={handleSubmit} href="/">
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

<style>
    form {
	  text-align: center;
	  padding: 1em;
	  max-width: 450px;
	  margin: 0 auto;
	}
    h1 {
	  text-align: center;
	  padding: 1em;
	  max-width: 450px;
	  margin: 0 auto;
	}
</style>