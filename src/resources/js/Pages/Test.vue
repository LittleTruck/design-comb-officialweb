<template>
    <div :style="isScale ? transformPosition:'top:10rem; left:10rem;'"
         class="absolute duration-1000">
        <div style="transform: rotate(15deg)" :style="isScale?'transform:scale(2.8) rotate(15deg)':''"
             class="w-72 h-72 relative flex flex-col justify-center items-center duration-1000" @click="getClickPosition">
            <div class="w-1/3 h-1/3" @click="isScale = !isScale;transformPosition = topCenter">
                <svg id="圖層_1" data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 259.81"><title>黃色六邊形</title>
                    <polygon points="75.29 259.31 0.58 129.9 75.29 0.5 224.71 0.5 299.42 129.9 224.71 259.31 75.29 259.31"
                             style="fill:#c5aa64"/>
                    <path
                        d="M224.42,1.1,298.85,130,224.42,258.9H75.58L1.15,130,75.58,1.1H224.42m.58-1H75L0,130,75,259.9H225L300,130,225,.1Z"
                        transform="translate(0 -0.1)" style="fill:#c5aa64"/>
                </svg>
            </div>
            <div class="w-1/3 h-1/3" @click="isScale = !isScale;transformPosition = center">
                <svg id="圖層_1" data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 259.81"><title>黃色六邊形</title>
                    <polygon points="75.29 259.31 0.58 129.9 75.29 0.5 224.71 0.5 299.42 129.9 224.71 259.31 75.29 259.31"
                             style="fill:#c5aa64"/>
                    <path
                        d="M224.42,1.1,298.85,130,224.42,258.9H75.58L1.15,130,75.58,1.1H224.42m.58-1H75L0,130,75,259.9H225L300,130,225,.1Z"
                        transform="translate(0 -0.1)" style="fill:#c5aa64"/>
                </svg>
            </div>
            <div class="w-1/3 h-1/3" @click="isScale = !isScale;transformPosition = bottomCenter">
                <svg id="圖層_1" data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 259.81"><title>黃色六邊形</title>
                    <polygon points="75.29 259.31 0.58 129.9 75.29 0.5 224.71 0.5 299.42 129.9 224.71 259.31 75.29 259.31"
                             style="fill:#c5aa64"/>
                    <path
                        d="M224.42,1.1,298.85,130,224.42,258.9H75.58L1.15,130,75.58,1.1H224.42m.58-1H75L0,130,75,259.9H225L300,130,225,.1Z"
                        transform="translate(0 -0.1)" style="fill:#c5aa64"/>
                </svg>
            </div>
            <div style="transform: translate(90%, 52%)" class="w-1/3 h-1/3 absolute" @click="isScale = !isScale;transformPosition = bottomRight">
                <svg id="圖層_1" data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 259.81"><title>黃色六邊形</title>
                    <polygon points="75.29 259.31 0.58 129.9 75.29 0.5 224.71 0.5 299.42 129.9 224.71 259.31 75.29 259.31"
                             style="fill:#c5aa64"/>
                    <path
                        d="M224.42,1.1,298.85,130,224.42,258.9H75.58L1.15,130,75.58,1.1H224.42m.58-1H75L0,130,75,259.9H225L300,130,225,.1Z"
                        transform="translate(0 -0.1)" style="fill:#c5aa64"/>
                </svg>
            </div>
            <div style="transform: translate(-90%, 52%)" class="w-1/3 h-1/3 absolute" @click="isScale = !isScale;transformPosition = bottomLeft">
                <svg id="圖層_1" data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 259.81"><title>黃色六邊形</title>
                    <polygon points="75.29 259.31 0.58 129.9 75.29 0.5 224.71 0.5 299.42 129.9 224.71 259.31 75.29 259.31"
                             style="fill:#c5aa64"/>
                    <path
                        d="M224.42,1.1,298.85,130,224.42,258.9H75.58L1.15,130,75.58,1.1H224.42m.58-1H75L0,130,75,259.9H225L300,130,225,.1Z"
                        transform="translate(0 -0.1)" style="fill:#c5aa64"/>
                </svg>
            </div>
            <div style="transform: translate(90%, -52%)" class="w-1/3 h-1/3 absolute" @click="isScale = !isScale;transformPosition = topRight">
                <svg id="圖層_1" data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 259.81"><title>黃色六邊形</title>
                    <polygon points="75.29 259.31 0.58 129.9 75.29 0.5 224.71 0.5 299.42 129.9 224.71 259.31 75.29 259.31"
                             style="fill:#c5aa64"/>
                    <path
                        d="M224.42,1.1,298.85,130,224.42,258.9H75.58L1.15,130,75.58,1.1H224.42m.58-1H75L0,130,75,259.9H225L300,130,225,.1Z"
                        transform="translate(0 -0.1)" style="fill:#c5aa64"/>
                </svg>
            </div>
            <div style="transform: translate(-90%, -52%)" class="w-1/3 h-1/3 absolute" @click="isScale = !isScale;transformPosition = topLeft">
                <svg id="圖層_1" data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 259.81"><title>黃色六邊形</title>
                    <polygon points="75.29 259.31 0.58 129.9 75.29 0.5 224.71 0.5 299.42 129.9 224.71 259.31 75.29 259.31"
                             style="fill:#c5aa64"/>
                    <path
                        d="M224.42,1.1,298.85,130,224.42,258.9H75.58L1.15,130,75.58,1.1H224.42m.58-1H75L0,130,75,259.9H225L300,130,225,.1Z"
                        transform="translate(0 -0.1)" style="fill:#c5aa64"/>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Test",
    data() {
        return {
            isScale: false,
            transformPosition:'',
            bottomRight: 'top:0; left:0',
            bottomLeft: 'top:30vh; left:93vw',
            bottomCenter: 'top:0; left:30vw',
            topRight: 'top:70vh; left:0',
            topLeft: 'top:90vh; left:93vw',
            topCenter:'top:90vh; left:30vw',
            center:'top:50vh;left:45vw',
            clickX: '',
            clickY: ''
        }
    },
    methods: {
        getClickPosition(e) {
            document.body.addEventListener('click', (e) => {
                    this.clickX = e.clientX + window.pageXOffset
                    this.clickY = e.clientY + window.pageYOffset
                }
            )
        }
    }
}
</script>

<style scoped>

</style>
