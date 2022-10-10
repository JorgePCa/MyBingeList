import { writable } from "svelte/store"

export const toDoItems = writable([
    {text: 'Réfléchir à un projet ', status: true},
    {text: 'Proposer un sujet de projet', status: false},
    {text: 'Envoyer le compte Github', status: false}
])