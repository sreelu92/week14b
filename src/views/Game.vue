<template>
  <div>
    <h2>Welcome to the RPS game</h2>
    <input @click="Selection(0)" type="button" value="Rock" />
    <input @click="Selection(1)" type="button" value="Paper" />
    <input @click="Selection(2)" type="button" value="Scissors" />
    <score-page></score-page>
    <div id="styling">
    <user-page></user-page>
    <computer-page></computer-page>
    </div>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import ScorePage from "../components/score.vue";
import UserPage from "../components/user.vue";
import ComputerPage from "../components/computer.vue";
import cookies from "vue-cookies";

export default {
  name: "game-page",
  components: {
    ScorePage,
    UserPage,
    ComputerPage
  },
  data() {
    return {
      computerSelect: [
        {
          name: "rock",
          image:
            "https://www.seekpng.com/png/small/816-8161371_rock-paper-scissor-icon-png.png"
        },
        {
          name: "paper",
          image:
            "https://png.pngitem.com/pimgs/s/266-2667795_rock-paper-scissors-png-transparent-png.png"
        },
        {
          name: "scissor",
          image:
            "https://s.clipartkey.com/mpngs/s/263-2633130_paper-icon-clipart-png-download-mickey-mouse-cartoon.png"
        }
      ],
      userSelect: [
        {
          name: "rock",
          image:
            "https://www.seekpng.com/png/small/816-8161371_rock-paper-scissor-icon-png.png"
        },
        {
          name: "paper",
          image:
            "https://png.pngitem.com/pimgs/s/266-2667795_rock-paper-scissors-png-transparent-png.png"
        },
        {
          name: "scissor",
          image:
            "https://s.clipartkey.com/mpngs/s/263-2633130_paper-icon-clipart-png-download-mickey-mouse-cartoon.png"
        }
      ],
      token: cookies.get("loginToken")
    };
  },
  mounted: function() {
      if(this.token==undefined) {
        this.$router.push({ name: "Login" });


      }
  },
  methods: {
    Selection(select) {
      let userSelection = this.userSelect[select];
      let computerSelection = this.computerSelect[
        Math.floor(Math.random() * 3)
      ];
      this.$store.commit("updateUser", userSelection);
      this.$store.commit("updateComputer", computerSelection);
      if (userSelection.name == "rock" && computerSelection.name == "rock") {
        this.$store.commit("updateScore", 0);
      } else if (
        userSelection.name == "rock" &&
        computerSelection.name == "paper"
      ) {
        this.$store.commit("updateScore", -1);
      } else if (
        userSelection.name == "rock" &&
        computerSelection.name == "scissor"
      ) {
        this.$store.commit("updateScore", 1);
      } else if (
        userSelection.name == "paper" &&
        computerSelection.name == "paper"
      ) {
        this.$store.commit("updateScore", 0);
      } else if (
        userSelection.name == "paper" &&
        computerSelection.name == "rock"
      ) {
        this.$store.commit("updateScore", 1);
      } else if (
        userSelection.name == "paper" &&
        computerSelection.name == "scissor"
      ) {
        this.$store.commit("updateScore", -1);
      } else if (
        userSelection.name == "scissor" &&
        computerSelection.name == "paper"
      ) {
        this.$store.commit("updateScore", 1);
      } else if (
        userSelection.name == "scissor" &&
        computerSelection.name == "rock"
      ) {
        this.$store.commit("updateScore", -1);
      } else if (
        userSelection.name == "scissor" &&
        computerSelection.name == "scissor"
      ) {
        this.$store.commit("updateScore", 0);
      }
    },
    logout() {
      cookies.remove("loginToken");
      this.$router.push({ name: "Login" });
    }
  }
};
</script>

<style scoped>
#styling{
    display: grid;
    grid-template-columns:repeat(2,1fr);
}
</style>