<template>
    <div class="modal">
        <header class="modal-header">
            <slot name="header">
                <span>This is the header</span>
            </slot>
            <span class="close-btn" @click="closeModal(false)">x</span>
        </header>

        <main class="modal-body">
            <slot name="body">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, doloremque?</p>
            </slot>
        </main>
        
        <footer class="modal-footer">
            <slot name="footer">
                <button  @click="closeModal(false)" class="cancel">Cancel</button>
                <button @click="closeModal(true)" class="confirm">Confirm</button>
            </slot>
        </footer>
    </div>
</template>

<script>
    export default {
        methods:{
            closeModal(status){
                this.$emit(status ? 'confirm' : 'cancel')
            }
        }
    }
</script>

<style lang="scss">
.modal{
    --spacing: 10px;
    --radius: 10px;

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-color: #597682;
    min-width: 30vw;
    min-height: 20vh;

    border-radius: 10px;
    box-shadow: 1px 1px 3px #444141;

    header{
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 10px;
        height: 2em;

        background-color: lightblue;
        border-radius: var(--radius) var(--radius) 0 0;

        .close-btn{
            cursor: pointer;
        }
    }
    .modal-body{
        padding: var(--spacing);
        color: beige;
    }
    footer {
        position: absolute;
        inset: auto var(--spacing) var(--spacing) auto;
        button{
            margin-inline-start: var(--spacing);
            min-height: 2em;

            background-color: lightblue;
            border-radius: 4px;
            border: none;
            cursor: pointer;
        }
        .cancel{
            background-color: whitesmoke;
        }
    }
}
</style>