<template>
<transition name="modal">
 <div class="modal" >
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">
          Modal title
        </h4>
      </div>
      
      <div class="modal-body">
      </div>
      
      <div class="modal-footer">
      </div>
    </div>
  </div>
</div>
</transition> 
</template>

<script>


    export default {

        data () {
            return {
                showModal: false,
                errored: false
            }
        }
    }

</script>
<style type="text/css">
	.modal-active{
	display:block;
}
</style>