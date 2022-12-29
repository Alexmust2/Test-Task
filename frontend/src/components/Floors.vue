<template>
    <div class="container">
        <div class="first_floor-container">
            <div class="first_floor">
                
            </div>
            <h2 style="margin-left: 15px;">1</h2>
            <button :class="{ active: isActive }" @click="isActive = !isActive, move('translateY(0)')"><div class="circle"></div></button>
        </div>

        <div div class="second_floor-container">
            <div class="second_floor">
                
            </div>
            <h2 style="margin-left: 15px;">2</h2>
            <button :class="{ active: isActive }" @click="isActive = !isActive, move('translateY(-180px)')"><div class="circle"></div></button>
        </div>

        <div class="third_floor-container">
            <div class="third_floor">
                
            </div>
            <h2 style="margin-left: 15px;">3</h2>
            <button :class="{ active: isActive }" @click="isActive = !isActive, move('translateY(-360px)')" ><div class="circle"></div></button>
        </div>

        <div class="fourth_floor-container">
            <div class="fourth_floor">
                
            </div>
            <h2 style="margin-left: 15px;">4</h2>
            <button :class="{ active: isActive }" @click="isActive = !isActive, move('translateY(-540px)')"><div class="circle"></div></button>
        </div>

        <div class="fifth_floor-container">
            <div class="fifth_floor">
                
            </div>
            <h2 style="margin-left: 15px;">5</h2>
            <button id="btn" :class="{active: isActive}" @click="isActive = !isActive, move('translateY(-720px)')"><div  class="circle"></div></button>
        </div>


    </div>
    <div class="elevator_container" id="lift">

    </div>
</template>

<script>
    export default {
        data() {
            return {
                isActive: this.$store.state.isActive
            }
        },  
        methods:{
            move(value) {
                document.getElementById("lift").style.transform = value;
                delay(3000)
            },
        }
    }
</script>

<style lang="scss">
/* container */
.container {
    margin-top: 2px;
    margin-left: 15px;
    display: flex;
    flex-direction: column-reverse;
    border: 4px solid black;
    width: 140px;
}

/* floors */

.first_floor-container {
    width: 250px;
    height: 180px;
    display: flex;
    .first_floor {
        border-top: 1px solid grey;
        width: 135px;
        height: 180px;
    }
}

.second_floor-container {
    width: 250px;
    height: 180px;
    display: flex;
    
    .second_floor {
        width: 135px;
        height: 180px;
        border-top: 1px solid grey;
        border-bottom: 1px solid grey;
    }
}

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

.fourth_floor-container {
    width: 250px;
    height: 180px;
    display: flex;
    .fourth_floor {
        width: 135px;
        height: 180px;
        border-top: 1px solid grey;
        border-bottom: 1px solid grey;
    }
}

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

button {
    width:50px;
    height: 50px;
    align-self: center;
    margin-left: 15px;
    border-radius: 50%;
    border: 1px solid grey;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    .circle {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background:red
    }
}


/* elevator */

.elevator_container {
    width: 133px;
    height: 180px;
    background-color: aqua;
    position: relative;
    left: 18px;
    top: -184px;
    transition: all 2s ease-in-out;
}

</style>