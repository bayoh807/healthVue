<template>
    <div class="formSelect" >
        <select :name="obj[0].name"  @change="changeSelect($event)" data-home="false">
            <option >Choose...</option>
            <option v-for="item of obj[1]" :key="item" :value="item.no" :kind="item.kind">{{ item.title }}</option>
        </select>
    </div>
</template>
<script>

import store from '@/store';

export default {
    props: ['obj'],
    data (props){
        console.log(this.obj);
        return {
            obj : this.obj,
            move : store.state.move
        }
    },
    created()
    {
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

</style>