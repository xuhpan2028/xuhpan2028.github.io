---
layout: archive
title: "Sitemap"
title_zh: "网站地图"
permalink: /sitemap/
author_profile: true
---

{% include base_path %}

<div class="bilingual-page" data-bilingual-root data-lang="en">
  <section class="lang-panel lang-panel--en" lang="en" markdown="1">
    A list of all the posts and pages found on the site. For you robots out there, there is an [XML version]({{ base_path }}/sitemap.xml) available for digesting as well.
  </section>
  <section class="lang-panel lang-panel--zh" lang="zh" markdown="1">
    这里列出站点中的页面、文章和项目。也可以访问 [XML 版本]({{ base_path }}/sitemap.xml)。
  </section>
</div>

<h2><span data-i18n-en="Pages" data-i18n-zh="页面">Pages</span></h2>
{% for post in site.pages %}
  {% include archive-single.html %}
{% endfor %}

<h2><span data-i18n-en="Posts" data-i18n-zh="文章">Posts</span></h2>
{% for post in site.posts %}
  {% include archive-single.html %}
{% endfor %}

{% capture written_label %}'None'{% endcapture %}

{% for collection in site.collections %}
{% unless collection.output == false or collection.label == "posts" %}
  {% capture label %}{{ collection.label }}{% endcapture %}
  {% if label != written_label %}
  <h2>{{ label }}</h2>
  {% capture written_label %}{{ label }}{% endcapture %}
  {% endif %}
{% endunless %}
{% for post in collection.docs %}
  {% unless collection.output == false or collection.label == "posts" %}
  {% include archive-single.html %}
  {% endunless %}
{% endfor %}
{% endfor %}
