---
layout: post
title: "MySQL scales because Facebook uses it."
---

When people talk about MySQL and it's ability to scale they often refer to Facebook's <a href="https://www.facebook.com/MySQLatFacebook">extensive use</a> of it to power most of their database infrastructure.

<!-- more start -->

What many fail to mention is that Facebook's <a href="http://gigaom.com/cloud/facebook-trapped-in-mysql-fate-worse-than-death/">MySQL implementation</a> is split into around 4000 shards that sit behind 9000 instances of Memcached that are required to service the traffic volume. So simply stating that MySQL scales fine because Facebook uses it is rather shallow and quite inaccurate.

It's a shame that posts like <a href="http://tatiyants.com/nosql-no-more-lets-double-down-with-moresql/">these</a>&nbsp;only paint the "MoreSQL" movement as simply a rebuttal of the NoSQL hype rather than an eloquent discourse on the many benefits of using a relational database.

<!-- more end -->