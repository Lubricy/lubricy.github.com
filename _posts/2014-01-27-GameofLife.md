---
layout: post
title:  "GameofLife"
date:   2014-01-27 20:13:17
categories: 
---


<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js">
</script>
<script src="/javascripts/game_of_life.js">
clearLink.onclick()
</script>
<style type="text/css">
.numinput {width:30px;}
.canvas {}
</style>
<p>
计数器: <span id="counter">0</span>
速度:<input id="speed" type="text" class="numinput"/>
<a class="btn" id="controlLink" href="javascript:void(0)">开始/暂停</a>
<a class="btn" id="clearLink" href="javascript:void(0)">清空</a>
<a class="btn" id="RandomLink" href="javascript:void(0)">随机</a>
</p>
<canvas id="grid" width="500" height="500"></canvas>
<p>每个元胞最少与
<select id="minimumSelect">
					<option value="1" selected="yes">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
				</select>个元胞相邻，最多与
<select id="maximumSelect">
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3" selected="yes">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
				</select>个元胞相邻。</p>
<p>当相邻数恰好为
<select id="spawnSelect">
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3" selected="yes">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
				</select>时生成新元胞。</p>
