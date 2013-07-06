---
layout: post
title:  "JQueryTest"
date:   2013-07-06 22:35:08
categories: 
---
<script>
$(document).ready(function(){
  $("p").click(function(){
    $(this).hide();
  });
});
</script>
<p>If you click on me, I will disappear.</p>
<p>Click me away!</p>
<p>Click me too!</p>
