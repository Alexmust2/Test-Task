<template>
    <div class="container">
        <div class="first_floor-container">
            <div class="first_floor">
                
            </div>
            <h2 style="margin-left: 15px;">1</h2>
            <button  @click=" move(1)"><div class="circle"></div></button>
        </div>

        <div div class="second_floor-container">
            <div class="second_floor">
                
            </div>
            <h2 style="margin-left: 15px;">2</h2>
            <button  @click=" move(2)"><div class="circle"></div></button>
        </div>

        <div class="third_floor-container">
            <div class="third_floor">
                
            </div>
            <h2 style="margin-left: 15px;">3</h2>
            <button  @click="move(3)" ><div class="circle"></div></button>
        </div>

        <div class="fourth_floor-container">
            <div class="fourth_floor">
                
            </div>
            <h2 style="margin-left: 15px;">4</h2>
            <button   @click="move(4)"><div class="circle"></div></button>
        </div>

        <div class="fifth_floor-container">
            <div class="fifth_floor">
                
            </div>
            <h2 style="margin-left: 15px;">5</h2>
            <button id="btn" v-bind="queue[5]" @click="move(5)"><div  class="circle"></div></button>
        </div>


    </div>
    <div style="display:flex; justify-content:center" class="elevator_container" id="lift">
        <h2>{{ queue[queue.length - 1] }}</h2>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                stack: {
                    "-0px" : 1,
                    "-180px": 2,
                    "-360px": 3,
                    "-540px" : 4,
                    "-720px": 5,
                },
                queue: [],
                isActive: false,

            }
        },  
        methods:{
            move(value) {
                const direction = Object.keys(this.stack).find(key => this.stack[key] === value)
                const lift = document.getElementById("lift")
                lift.style.transform = `translateY(${direction})`
                this.queue.push(value)
                const queue = this.queue
                setTimeout(function(){
                    queue.shift()
                },3000)
            }   
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

button{
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

button:active {
    background-color: aqua;
}


/* elevator */

.elevator_container {
    width: 133px;
    height: 180px;
    background-color: aqua;
    position: relative;
    left: 18px;
    top: -184px;
    transition: all 3s ease-in-out;
}

</style>