<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
import {throttle} from 'lodash';
export default {
    props:[
        
    ],
    data(){
        return {
            
        }
    },
    mounted(){
        let originalOffsetTop = this.$el.offsetTop;
        let thisIsFixed = (isFixed) => {
            this.$emit('is-fixed-e', isFixed);
            console.log("called");
        }
        window.addEventListener('scroll', 
            throttle(function(e){
                if(window.scrollY >= originalOffsetTop){
                    thisIsFixed(true);
                } else {
                    thisIsFixed(false);
                }
            }, 50)
        );
    },
}
</script>

<style lang="sass">
    nav{
        background-color: cornflowerblue;
        color: white;
        height: 50px;
        ul, li{
            height: 50px;
            padding-left: 20px;
            a{
                line-height: 50px;
            }
        }
    }
    body{
        padding: 0;
        height: 3000px;
    }
</style>