<template>
 <div class="third_floor-container">
            <div class="third_floor">
                
            </div>
            <h2 style="margin-left: 15px;">3</h2>
            <button :class="{ active: isActive }" @click="isActive = !isActive"><div class="circle"></div></button>
        </div>
</template>

<script>
    export default {
        data(){
            return {
                isActive: this.$store.state.isActive
            }
        },
    }
</script>

<style lang="scss">

.third_floor-container {
    width: 250px;
    height: 180px;
    display: flex;
    .third_floor {
        width: 135px;
        height: 180px;
        border-top: 1px solid grey;
        border-bottom: 1px solid grey;
    }
}


</style>