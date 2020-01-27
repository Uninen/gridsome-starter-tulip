<template>
  <Layout>
    <!-- Replace everything inside this Layout with your own content -->
    <!-- The main container CSS classes are in `src/layouts/Default.vue` -->

    <div class="mt-8 md:mt-16 flex flex-wrap items-center justify-center">
      <div>
        <h1 class="font-maintitle text-5xl sm:text-7xl block text-center sm:pr-8 text-gray-700">
          {{ $static.metadata.siteName }}
        </h1>
      </div>

      <g-image
        class="block h-32 sm:h-64 w-auto"
        alt="Tulip"
        src="~/assets/img/tulip.jpg"
      />
    </div>

    <h2>Single page starter for <a href="https://gridsome.org">Gridsome</a></h2>

    <p class="text-2xl font-sans text-gray-700 pb-2">No blog, tags or other cruft; <br> just a <strong>single page</strong> for your your content.</p>

    <ul class="text-lg leading-relaxed">
      <li><strong><a href="https://tailwindcss.com">Tailwind CSS</a></strong> w/ minimal base styles</li>
      <li><strong>Single page</strong> for your content, nothing else.</li>
      <li class="text-base text-gray-800">Ready if you need them: <strong>Google Analytics</strong> and <strong>Open Graph meta tags</strong></li>
    </ul>

    <h3>Installation And Configuration</h3>

    <p>Installing and configuring tulip is very easy. You'll get your site up and running in less
      than 5 minutes. There's nothing special about Tulip, it's just a Gridsome site,
      which is again is nothing more than some clever bits around <a href="https://vuejs.org/">Vue</a>.</p>

    <p>This short document is not intended to familiarize you with either of these tools, you should
      read Gridsome documentation and Vue documentation for more detailed information about
      respective projects.</p>

    <h4>1. Install Tulip</h4>

    <p>Use <code>gridsome create</code> command to install Tulip:</p>

    <code>gridsome create my-website https://github.com/Uninen/gridsome-starter-tulip.git</code>

    <h4>2. Add your content and configure meta data</h4>

    <ul>
      <li>There's only one layout and one page configured, put all your content into <code>src/pages/Index.vue</code></li>
      <li>You should also fill out or delete whatever meta data you like in <code>src/main.js</code></li>
      <li>Open up <code>./gridsome.config.js</code> and fill in <code>siteName</code>. You'll find other configurations (like title template and favicon) here as well.</li>
      <li>If you want to use Google Analytics, add your own ID in <code>./gridsome.config.js</code>. If no ID is set, the plugin is not loaded at all. (You should, however, manually remove the associated entry in <code>package.json</code> if you're not using it.)</li>
    </ul>

    <h4>3. Tweak or replace default styles</h4>

    <p>As <a href="https://tailwindcss.com/docs/preflight/">Tailwind Preflight styles</a> are not meant to be used as is, Tulip comes with some very basic base styles (the ones you see on this page) that you can use or replace. These base styles live in <code>src/assets/css/base.postcss</code> and are imported in <code>src/main.js</code>.</p>

    <p>If you have existing styles you want to use, you can just copy them into <code>assets/css/</code> and import them (either in <code>main.js</code> or in <code>Index.vue</code>), or just add them in the style-section of the <code>Index.vue</code> page.</p>

    <p>(Note: if your existing styles arent based on Tailwind, you'll probably want to remove the Tailwind plugin also as the Preflight normalizations are automatically imported and might affect your old styles.)</p>

    <p>That's it, you're done! 🎉</p>

    <h3>Developing</h3>

    <ul>
      <li>Run <code>gridsome develop</code> to start the local development server</li>
      <li>If you want to file a bug report or fork the repo, you'll find <a href="https://github.com/Uninen/gridsome-starter-tulip">the code on GitHub</a></li>
      <li>Finally, <a href="https://gridsome.org/docs/">Gridsome docs</a> and <a href="https://vuejs.org/v2/guide/">Vue docs</a> will guide you forward</li>
    </ul>

    <p class="pt-4"><strong>You can host your built Gridsome site just about anywhere</strong> (it's just a static site). <a href="https://www.netlify.com/">Netlify</a> is one of the easiest and free ways for automatically deploy with every push. You can <a href="https://app.netlify.com/start/deploy?repository=https://github.com/Uninen/gridsome-starter-tulip">test it via this link</a> and have your own deployment running in about a minute!</p>

    <p>
      <a href="https://app.netlify.com/start/deploy?repository=https://github.com/Uninen/gridsome-starter-tulip"><img
          src="https://www.netlify.com/img/deploy/button.svg"
          class="h-8 mx-auto"
          alt="Deploy to Netlify"
        ></a>
    </p>

    <h3>Never Asked Questions</h3>

    <dl class="list-none">
      <dt>But Why?</dt>
      <dd>Because at the time of writing this all Gridsome starters had way too much going on and I
        wanted a super clean and fast way to get started with Gridsome. The goal was to have a starter template that would involve as few modifications and deletions to get something simple yet production quality stuff published.</dd>

      <dt>What if I want multiple page styles, a blog, authors, tags etc?</dt>
      <dd>If you are just starting, then Tulip is not for you. Try some other awesome <a href="https://gridsome.org/starters/">Gridsome starter</a> (But if you're building your site a bit by bit, tweaking Tulip is as easy as any other Gridsome site &ndash; it's basically just Vue!)</dd>
    </dl>

    <p class="text-center mt-16 mb-8 text-xs">
      Vue + Gridsome is ❤️ <br />
      &copy; Ville Säävuori (<a
        class="underline text-blue-700"
        href="https://twitter.com/uninen"
      >@uninen</a>) 2020, MIT License
    </p>
  </Layout>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  metaInfo: {
    title: "Tulip - Single Page Gridsome Starter"
  }
};
</script>
