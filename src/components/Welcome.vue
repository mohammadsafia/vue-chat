<template>
    <div class="welcome container">
      <div class="card">
        <div class="card-content center-align">
          <h2 class="teal-text">Welcome</h2>
          <form action="" @submit.prevent="enterChat">
            <label for="name">
              Enter your name:
              <input type="text" name="name" v-model="name">
            </label>

            <button class="btn teal">Enter Chat</button>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      name:null
    }
  },
  methods:{
    enterChat(){
      console.log(this.name)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .welcome {
    max-width: 400px;
    margin-top: 100px;
  }
  .welcome h2{
    font-size: 3em;
  }
  .welcome button {
    margin: 30px;
  }
</style>
