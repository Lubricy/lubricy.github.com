---
layout: post
title:  "linux下Bash的历史查找配置"
date:   2013-09-20 17:13:54
categories: 
---

可以使用上下键直接进行搜索，省去了`Ctrl+R`的麻烦

{%highlight sh %}
$ cat ~/.inputrc
"\e[A": history-search-backward
"\e[B": history-search-forward
set show-all-if-ambiguous on
set completion-ignore-case on
{% endhighlight %}
