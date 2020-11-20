<template>
    <div class="formSelect" >
        <select :name="obj[0].name"  @change="changeSelect($event)" data-home="false">
+            <option >請選擇▼</option>
+            <option v-for="item of obj[1]" :key="item" :value="item.no" :kind="item.kind">{{ item.title }}</option>
         </select>
         <div></div>
    </div>
</template>
<script>
import store from '@/store';
export default {
    props: ['obj'],
    data (props){
        
        return {
            obj : this.obj,
            move : store.state.move
        }
    },
    created()
    {
    },
    watch : {

        
    },
    methods:{
   changeSelect(e)
        {
            let select = e.target;
            if(select.value != null)
            {
               select.setAttribute('data-home',true); 
               this.move(e);
               let option = select.options[select.selectedIndex];
            //    console.log(option.value,option.innerHTML ,option.getAttribute('kind'));
               store.state[select.getAttribute('name')] = {
                   no : option.value,
                   title : option.innerHTML,
                   kind : option.getAttribute('kind')
               }

                 console.log(store.state);
            }
            else
            {
              select.setAttribute('data-home',false);  
            }
        }
    }
}
</script>

<style  scoped>
    .formSelect{
        width: 100%;
        text-align: center;
        display: flex;
        flex-direction: row;
        justify-content: center;
        
    }

    .formSelect select{
      
        font-size: 4vmin;
        border: none;
        background-color: rgba(255,255,255,0); 
        box-sizing : border-box; 
        background: url('./../../media/component/radioButton2.png') no-repeat;
        background-size: cover;
        appearance: none;  
        width: 80%;
        outline: none;
        padding: 2vmin 10vmin;
        color: white;

        text-align:justify;
        text-align-last:justify; 
        
      /**  border-color:transparent;
        -webkit-appearance: none;  
        -moz-appearance: none;  
        appearance: none;      
        width: 80%;
        text-align-last: center;
        text-align: center;
        padding: 2vmin 0;
        border-radius: 5px;
        background-color: rgba(255,255,255,0);
        color: white;
        outline: none;
        border-width: 6px;
        border-style: solid;*/

      /* -moz-border-image: -moz-linear-gradient(bottom left,#d9dde0 0%, #18222e 100%);
	    -webkit-border-image: -webkit-linear-gradient(bottom left,#d9dde0 0%, #18222e 100%);
        border-image: linear-gradient(to top right,#d9dde0 0%, #18222e 100%);
	    border-image-slice: 1;*/
    }
    
   
  
</style>