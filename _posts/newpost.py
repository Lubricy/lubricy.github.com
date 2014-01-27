#!/usr/bin/python
#-*- encoding:utf-8 -*-
import os
import time

now = time.strftime('%Y-%m-%d',time.localtime(time.time()))
title = raw_input("title:\t");
categories = raw_input("categories:\t");
filename = "%s-%s.md" % (now,title)
f = open(filename,'w')
now = time.strftime('%Y-%m-%d %H:%M:%S',time.localtime(time.time()))
text = """---
layout: post
title:  "%s"
date:   %s
categories: %s
---

""" % (title,now,categories)
f.write(text)
f.close()
os.system("vim " + filename)
