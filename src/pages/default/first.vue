<template>
<div>
    <p>这是首页</p>
    <p v-for="(item,index) in common.list" :key="index">welcome to {{index}} item .</p>
</div>
</template>

<script>
export default {
    data(){
        return {
            common : {
                name : 'first',
                list : new Array(20)
            }
        }
    }
}
</script>
