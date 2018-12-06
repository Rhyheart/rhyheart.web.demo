<template>
    <router-view/>
</template>

<script>
export default {
    data() {
        return {
            common : {
                name : "home",
                message : "welcome to  home page..."
            }
        }
    },
    mounted() {
        this.$ele.Message.success(this.common.message);
    }    
}
</script>
