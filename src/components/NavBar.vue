<template>
    <Menubar p-menubar :model="items" />
    
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            items: [
                {
                   label:'Äänet',
                   icon:<i class="icon-volume-off"></i>,
                },
                {
                   label:'Edit',
                   icon:'pi pi-fw pi-pencil',
                }
                
            ]
        }
    },
    props: {
    },
    methods: {

    }
}
</script>


<style scoped>

</style>