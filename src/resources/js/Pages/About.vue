<template>
    <div class="about">
        <kinesis-container>

            <div class="container-fluid">
                    <div class="row justify-content-center">
                        <kinesis-element class="circle-style" :strength="50"><div class="circle-inner"> 1</div></kinesis-element>
                        <kinesis-element class="circle-style" :strength="75"><div class="circle-inner"> 2</div></kinesis-element>
                        <kinesis-element class="circle-style" :strength="100"><div class="circle-inner"> 3</div></kinesis-element>
                    </div>


                    <div class="row justify-content-center">
                        <kinesis-element class="circle-style" :strength="50"><div class="circle-inner"> 4</div></kinesis-element>
                        <kinesis-element class="circle-style" :strength="75"><div class="circle-inner"> 5</div></kinesis-element>
                        <kinesis-element class="circle-style" :strength="100"><div class="circle-inner"> 6</div></kinesis-element>
                        <kinesis-element class="circle-style" :strength="125"><div class="circle-inner"> 6</div></kinesis-element>
                    </div>

                    <div class="row justify-content-center">
                        <kinesis-element class="circle-style" :strength="50"><div class="circle-inner"> 7</div></kinesis-element>
                        <kinesis-element class="circle-style" :strength="75"><div class="circle-inner"> 8</div></kinesis-element>
                        <kinesis-element class="circle-style" :strength="100"><div class="circle-inner"> 9</div></kinesis-element>
                    </div>
            </div>
        </kinesis-container>
    </div>
</template>

<script>
    import {KinesisContainer, KinesisElement} from 'vue-kinesis'

    export default {
        name: "About",
        components: {
            KinesisContainer,
            KinesisElement
        }
    }
</script>

<style scoped>

    .circle-style{
        height: 250px;
        width: 250px;
        padding: 0 !important;
        margin: 25px;
        transition: .5s;
    }
    .circle-inner{
        height: 100%;
        width: 100%;
        border: solid 1px black;
        border-radius: 100%;
        transition: .5s;
        transform-origin: center center;
    }
    .circle-inner:hover{
        transform: scale(1.2);
    }
    /*.circle-style:hover{*/
    /*    transition: .5s;*/
    /*    height: 300px;*/
    /*    width: 300px;*/
    /*}*/
</style>
