<template>
    <div id="containter" class="container">
        <div class="first_floor-container">
            <div class="first_floor">
                
            </div>
            <h2 style="margin-left: 15px;">1</h2>
            <button id="button_1" @click=" move(1), isActive(1)"><div class="circle"></div></button>
        </div>

        <div div class="second_floor-container">
            <div class="second_floor">
                
            </div>
            <h2 style="margin-left: 15px;">2</h2>
            <button  id="button_2" @click=" move(2), isActive(2)"><div class="circle"></div></button>
        </div>

        <div class="third_floor-container">
            <div class="third_floor">
                
            </div>
            <h2 style="margin-left: 15px;">3</h2>
            <button id="button_3"  @click="move(3), isActive(3)" ><div class="circle"></div></button>
        </div>

        <div class="fourth_floor-container">
            <div class="fourth_floor">
                
            </div>
            <h2 style="margin-left: 15px;">4</h2>
            <button id="button_4"   @click="move(4),isActive(4)"><div class="circle"></div></button>
        </div>

        <div class="fifth_floor-container">
            <div class="fifth_floor">
                
            </div>
            <h2 style="margin-left: 15px;">5</h2>
            <button id="button_5"  @click="move(5), isActive(5)"><div  class="circle"></div></button>
        </div>


    </div>
    <div style="display:flex; justify-content:center" class="elevator_container" id="lift">
        <h1>{{ numberqueue[0] }}</h1>
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
                buttonqueue: [],
                numberqueue: [],
                disabled: false,

            }
        },  
        methods:{
            move(value) {
                const direction = Object.keys(this.stack).find(key => this.stack[key] === value)
                const lift = document.getElementById("lift")
                const queue = this.queue
                const numberqueue = this.numberqueue
                console.log()
                numberqueue.push(value)
                queue.push(direction)
                lift.style.transform = `translateY(${queue[0]})`
                localStorage.setItem("resultat", JSON.stringify(this.queue));
                },

                isActive(value) {
                    const button = document.getElementById(`button_${value}`)
                    const buttonqueue = this.buttonqueue
                    buttonqueue.push(value)
                    console.log(buttonqueue)
                    if (buttonqueue.includes(value) == true) {
                        button.style.background = 'blue'
                    }   else {
                        button.style.background = 'white'
                    }
                },

                removefromqueue(){
                    const queue = this.queue
                    const timer = window.setInterval(function(){
                    if(queue.length > 0){
                       queue.shift();
                       document.getElementById("lift").style.transform = `translateY(${queue[0]})`
                    }
                    else
                        window.clearInterval(timer);
                    }, 6000)
                },

                disableActive() {
                    const buttonqueue = this.buttonqueue
                    const Activetimer = window.setInterval(function(){
                    if(buttonqueue.length > 0){
                        document.getElementById(`button_${buttonqueue[0]}`).style.background = 'white'
                        buttonqueue.shift()
                    }
                    else
                        window.clearInterval(Activetimer);
                    },4500)
                },
                RemoveNumberFromQueue(){
                    const numberqueue = this.numberqueue
                    const numberqueuetimer = window.setInterval(function(){
                    if(numberqueue.length > 0){
                        numberqueue.shift()
                    }
                    else
                        window.clearInterval(numberqueuetimer);
                    }, 6000)
                },

                shake() {
                    const queue = this.queue
                    const shaketimer = window.setInterval(function(){
                    if(queue.length > 0){
                        setTimeout(function(){
                            document.getElementById('lift').className = 'elevator_container'
                        }, 2000)
                        document.getElementById('lift').className = 'shake'

                    }
                    else
                        window.clearInterval(shaketimer);
                    }, 4500)
                },
                
        },
        beforeMount(){
            this.removefromqueue()
            this.RemoveNumberFromQueue()
            this.disableActive()
            this.shake()
        },
        mounted() {
        },
        created() {
            this.queue = JSON.parse(localStorage.getItem("queue") || '[]')
        },
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

.shake {
    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both infinite;
    transform: translate3d(0, 0, 0);
    width: 133px;
    height: 180px;
    position: relative;
    top: -184px;
    left: 18px;
    background-color: aqua;
    transition: all 3s ease-in-out;
}

@keyframes shake {
  10%{background: rgb(25, 26, 26);}

  50%{background: aqua;}

  90%{background: rgb(25, 26, 26);}
  
  100%{background: aqua;}

}

</style>