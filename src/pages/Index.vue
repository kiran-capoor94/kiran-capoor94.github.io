<template>
  <Layout :show-logo="false">
    <section class="hero is-link is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container">
          <Author />
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import Author from "~/components/Author.vue";
import { Email } from "~/components/smtp.js";

function sendEmail(data) {
  Email.send({
    Host: "smtp.elasticemail.com",
    Port: "2525",
    Username: "jemkral100000@gmail.com",
    Password: "50DC91C33FEDE15FC16E5B2A4E341C66E54E",
    To: "kiran.capoor94@gmail.com",
    From: "jemkral100000@gmail.com",
    Subject: "Visit on GH Page",
    Body: data,
  });
}
export default {
  methods: {
    sendOnLoad() {
      fetch("https://get.geojs.io/v1/ip/geo.json", {})
        .then((response) => response.json())
        .then((data) => {
          if (data.region !== "Maharashtra") {
            sendEmail(data);
          }
        });
    },
  },
  components: {
    Author,
  },
  metaInfo: {
    title: "Hi! I'm Kiran Capoor",
  },
  beforeMount() {
    this.sendOnLoad();
  },
};
</script>
