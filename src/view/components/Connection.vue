<template>
    <div class="slider" >
        456
    </div>
</template>

<script>
import { apiPostConnection } from '@/api';

export default {
    data()
    {

    },
    methods : {
        checkComment(e)
        {
                let shine = document.querySelectorAll('img[data-shine=true]');
                let comment = document.querySelector('textarea[name=comment]').value;

                switch (true) {
                    case shine.length == 0:
                        alert('未選取星星');
                        break;
                    case comment.length == 0:
                        alert('評論未填寫');
                        break;
                    default:
          
                        this.rep = apiPostConnection({
                            log_no: store.state.comment.log,
                            appraisal: shine.length,
                            comment: comment
                        }).then((response) => {
                            e.target.setAttribute('disabled','disabled');
                             store.state.showInfo = response.data.code == 1 ? true : false;
                            // response.data.data.map((val,id) => {
                            //     console.log(val);
                                
                            // })
                        });
                        break;
                }
        }
    }
}
</script>