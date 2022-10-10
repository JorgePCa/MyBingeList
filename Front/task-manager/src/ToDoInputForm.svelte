<script>
    import { toDoItems } from "./store.js"
    import { onMount } from "svelte"
  
    export let userName
    let newItem = ""
    let newItemInputForm = null
  
    onMount(() => {
      newItemInputForm.focus()
    })
  
    function addToList() {
      $toDoItems = [...$toDoItems, {text: newItem, status: false}]
      newItem = ""
    }
</script>
  
<input bind:value={newItem} bind:this={newItemInputForm} type="text" placeholder="Ajouter une nouvelle tâche">
<button on:click={addToList}>Ajouter</button>
  
  
<h3>Liste de tâches de {userName}:</h3>