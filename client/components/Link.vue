<template>
  
    <a :class="getClass()" href="#"><slot></slot></a>
  
</template>

<script>
export default {
    name: 'link',

    props: {
        animated: {
            default: null
        },
        rightMargin: {
            default: null
        },
        history:{
            default: null
        }
    },
    methods: {
        getClass() {
            if (this.animated === ''){
                this.animated = 'link_animated';
            
            } 
            if (this.rightMargin === ''){
                this.rightMargin = 'link_right-margin';
                
            }

            if (this.history === ''){
                this.history = 'link_history';
                
            }

            return 'link ' +  this.rightMargin + ' ' + this.animated + ' ' + this.history;
          
        }
    }

}
</script>

<style lang="scss">


.link {
    color: #fff;
    font-size: 13px;
    line-height: 19px;
    font-weight: 500;
    text-decoration: none;
  
    &_animated {
        transition: all 0.2s linear;
	}

    &_animated:hover {
        border-bottom: 3px solid rgb(255, 255, 255);
    }

    &_right-margin {
        margin-right: 30px;
    }

    &_history {
        color: #B0B0B0;
        font-size: 17.33px;
        line-height: 26px;
        font-weight: 500;
        text-decoration: none;
    }
}

</style>