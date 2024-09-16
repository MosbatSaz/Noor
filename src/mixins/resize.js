export default{
    methods: {
        onResize () {
            if (window.innerWidth >= 1904){ //xlarge ;
                this.viewport = 'xl'
            }
            else if (window.innerWidth >= 1264 && window.innerWidth < 1904){ //large
                this.viewport = 'lg'  
            }
            else if (window.innerWidth >= 960 && window.innerWidth < 1264){ //medium
                this.viewport = 'md' 
            }
            else if (window.innerWidth >= 600 && window.innerWidth < 960){ //small
                this.viewport = 'sm'  
              }
            else{ //xsmall
                this.viewport = 'xs'
            }

            return this.viewport
    },
    
}
}