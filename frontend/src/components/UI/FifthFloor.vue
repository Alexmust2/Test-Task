<template>
        <div class="fifth_floor-container">
            <div class="fifth_floor">
                
            </div>
            <h2 style="margin-left: 15px;">5</h2>
            <button :class="{ active: isActive }" @click="isActive = !isActive"><div class="circle"></div></button>
        </div>
</template>

<script>
    export default {

}    
</script>

<style lang="scss">
.fifth_floor-container {
    width: 250px;
    height: 180px;
    display: flex;
    .fifth_floor {
        width: 135px;
        height: 180px;
        border-bottom: 1px solid grey;
    }
}

.active {
    background-color: blueviolet;
}
</style>