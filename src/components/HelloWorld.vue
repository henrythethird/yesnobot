<template>
  <div class="chat">
    <header class="header">
      <div class="title">
        Yes-No Bot
      </div>
    </header>
    <div class="history" ref="chat">
      <div class="bubble" v-for="bubble in history" :class="{ me: bubble.me }">{{ bubble.text }}</div>
    </div>
    <footer class="footer">
      <input class="input" placeholder="Type a question..." v-model="input" @keyup.enter="enter" />
      <button class="send" @click="enter"></button>
    </footer>
  </div>
</template>

<script>
import md5 from 'md5'

const yes = ['Yes', 'Sure', 'Yeah', 'Mhm', 'You know it, girl!', 'Yap', 'Definitely']
const maybe = ['Could be', 'Maybe', 'Not sure', 'Mmmmh. I\'m going to have to think about it', 'Perhaps']
const no = ['No', 'Nope', 'Nah', 'Certainly not', 'Oh hell no', 'That\'s not true', 'Don\'t think so']
const answer = [yes, maybe, no]

export default {
  name: 'HelloWorld',
  data () {
    return {
      input: "",
      history: []
    }
  },
  mounted () {
    this.addBotResponse('Hey there ;-)')
    setTimeout(() => {
      this.addBotResponse('Ask me any yes/no question and I will answer it to the best of my knowledge')
    }, 500)
  },
  methods: {
    pickRandom (arr) {
      return arr[Math.floor(Math.random() * arr.length)]
    },
    random (trueness) {
      return this.pickRandom(answer[trueness])
    },
    enter () {
      if (!this.input) {
        return
      }

      const buffer = Buffer.from(md5(this.input), 'hex')
      const yesNo = buffer[buffer.length - 1] % 3

      this.addPersonalResponse(this.input)
      setTimeout(() => {
        this.addBotResponse(this.random(yesNo))
      }, 500)

      this.input = ''
    },
    addBotResponse (text) {
      this._addResponse(false, text)
    },
    addPersonalResponse (text) {
      this._addResponse(true, text)
    },
    _addResponse (me, text) {
      this.history.push({ me, text })

      setTimeout(() => {
        let messageDisplay = this.$refs.chat
        messageDisplay.scrollTop = messageDisplay.scrollHeight;
      }, 10)
    }
  }
}
</script>
<style scoped lang="scss">
  .chat {
    margin: auto;
    background: linear-gradient(90deg, #F9FDFC, #E8EBF0);
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .footer {
    display: flex;
    background: #FBFCFD;
    border-top: 2px solid #E8EBF0;
    align-items: center;
  }

  .input {
    width: 100%;
    font-size: 16px;
    padding: 10px 20px;
    background-color: transparent;
    height: 100%;
  }

  .send {
    background: #616D79;
    flex: 0 0 auto;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    margin: 10px;
    background-image: url(../assets/send.png);
    background-repeat: no-repeat;
    background-size: 70%;
    background-position: 50% 50%;
    cursor: pointer;
  }

  .header {
    background: #FBFCFD;
    flex: 0;
    flex-basis: 50px;
    border-bottom: 2px solid #E8EBF0;
    display: flex;
    align-items: center;
    padding-left: 20px;
    color: #5B6874;
    font-weight: bold;
  }

  .history {
    padding: 20px;
    flex: 1;
    flex-direction: column;
    display: flex;
    overflow-y: scroll;
  }

  .bubble {
    background: linear-gradient(90deg, #5B6874, #5B6874);
    display: inline-block;
    align-self: flex-start;
    padding: 10px 15px;
    margin-bottom: 10px;
    max-width: 500px;
    border-radius: 5px;
    color: white;

    &.me {
      align-self: flex-end;
      background: white;
      color: black;
    }
  }
</style>
