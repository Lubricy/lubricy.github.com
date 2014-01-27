---
layout: post
title:  "JQueryTest"
date:   2013-07-06 22:35:08
categories: 
---

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js">
</script>

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
<canvas width='500' height='500'></canvas>
