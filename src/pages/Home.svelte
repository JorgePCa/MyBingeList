<script>

    import {link} from 'svelte-spa-router'
    let research = ""

	function Find() {

	}	

</script>
<main>
    
    <div class="sidebar-skype">
        <h1>My Binge List</h1>
        <div class="align-right">
        
            <a href="registerform">Créez un compte</a>
        </div>
    </div>
    <div class="research-bar">
        <input bind:value={research} type="text" placeholder="Anime, catégorie, ...">
        <button id="search" on:click={Find}>Rechercher</button>
    </div>

</main>
  
  
<style>
    main {
        text-align: center;
	    margin: 0 auto;
        width: 90%;
        border: 1px solid darkslategrey;
	}
    .sidebar-skype{
        background-color: darkcyan;
    }
    .align-right {
        margin-left: 50%;
    }
    .research-bar{
        margin-top:1%;
    }
    h1{text-align: justify; }
    .sidebar-skype h1 {
	    display: inline-block;
        
    }
    .sidebar-skype .align-right {
	    display: inline-block;
    }
    a{
        background-color: white;
        border: 1px solid black;
        
    }
</style>