---
layout: post
title:  "GameofLife"
date:   2014-01-27 20:13:17
categories: 
---

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js">
</script>
<script src="/javascripts/game_of_life.js">
</script>
<p>计数器: <span id="counter">0</span></p>
<a id="controlLink" href="javascript:void(0)">开始/暂停</a>
<a id="clearLink" href="javascript:void(0)">清空</a>
<a id="RandomLink" href="javascript:void(0)">随机</a>
<br/>
<canvas id="grid" width="500" height="500"></canvas>
<br/>
<p>每个元胞:</p>
<p>最少与</p>
<select id="minimumSelect">
					<option value="1" selected="yes">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
				</select><p>相邻，</p>
<br/>
<p>最多与</p>
<select id="maximumSelect">
					<option value="1">One</option>
					<option value="2">Two</option>
					<option value="3" selected="yes">Three</option>
					<option value="4">Four</option>
					<option value="5">Five</option>
					<option value="6">Six</option>
				</select><p>相邻</p>。
<br/>
<p>当相邻数恰好为</p>
<select id="spawnSelect">
					<option value="1">One</option>
					<option value="2">Two</option>
					<option value="3" selected="yes">Three</option>
					<option value="4">Four</option>
					<option value="5">Five</option>
					<option value="6">Six</option>
				</select><p>时生成新元胞。</p>
