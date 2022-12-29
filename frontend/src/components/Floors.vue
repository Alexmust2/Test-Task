<template>
    <div class="container">
        <FirstFloor></FirstFloor>
        <SecondFloor></SecondFloor>
        <ThirdFloor></ThirdFloor>
        <FourthFloor></FourthFloor>
        <FifthFloor></FifthFloor>
    </div>
</template>

<script>
import FirstFloor from './UI/FirstFloor.vue';
import SecondFloor from './UI/SecondFloor.vue';
import ThirdFloor from './UI/ThirdFloor.vue';
import FourthFloor from './UI/FourthFloor.vue';
import FifthFloor from './UI/FifthFloor.vue';

    export default {
        components:{
            FirstFloor,
            SecondFloor,
            ThirdFloor,
            FourthFloor,
            FifthFloor
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
        background-color:red
    }
}

</style>