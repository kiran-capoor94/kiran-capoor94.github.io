<template>
  <Layout :show-logo="false">
    <section class="hero is-link is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container">
          <div class="pt-3">
            <Author />
          </div>
          <hr style="width:70%; margin-left:auto;" />
          <div class="columns is-mobile is-centered">
            <div class="column is-3-desktop is-hidden-mobile"></div>
            <div class="column has-background-white-bis">
              <p class="subtitle has-text-justified px-5 pb-5 pt-3">
                Following the general cultures prevalent in an Indian household, education was an
                emphasis all-through. He has a bachelor’s degree in Chemistry, that allows him today
                to mix all the creative strategies and systemic thinking into a brand new ‘solution’ (pun intended).
                <br />
                <br />Finances being the lifeblood of business, he went on to get a master’s degree in finance.
                He uses the same effect to do his data analytics and negotiations, and all the trend analysis
                charts you will see from him as a client. An entrepreneur at the core, he went on to grab
                a couple of certificates in marketing and mastering ‘Python’ (a development language for computers).
                <br />
                <br />He has come in a long way, training, learning, and unlearning the varied aspects of the
                business. From being a reserved, quiet, and shy boy with a sheepish grin, he’s transformed
                into a leader who closes deals and speaks to the influencers of the industries he caters to.
                He mastered the soft skills he needed for business, went around speaking to people, and being
                himself, and today that is one of the biggest assets for Texmith. People connect with him easily,
                and trust and credibility come over and above business objectives to him. In 2017 what began as a
                one-another startup in the market providing quality software, Texmith today is metamorphosized to
                be a digital solutions provider. Kiran has successfully managed to do on-the-job training for himself,
                finding investors, getting clients, gathering a team of experts in varied fields to work with him,
                as well as to create an environment conducive for growth.
                <br />
                <br />He faced his share of the rollercoaster ride and today from one person to many and one client to
                fifty-plus clients, he is the motivator and entertainer who keeps his team alive. He has a unique
                approach that allows him to add value to clients in a sustainable and growth-based format. Texmith
                finished its first 100 projects in a span of three years, by 2020 and looks to deliver many-more under
                the leadership of this young, dynamic, and jovial leader.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import Author from "~/components/Author.vue";

export default {
  name: "AboutMe",
  components: {
    Author,
  },
  metaInfo: {
    title: "Hi! I'm Kiran Capoor",
  },
};
</script>

<style>
</style>
