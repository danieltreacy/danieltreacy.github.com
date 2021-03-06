---
layout: post
title: On back-end vendors
---

I get how companies like <a href="http://www.stackmob.com">StackMob</a> are trying to make it easier for developers to get their apps up and running quickly and take a lot of the hassle out of setting up boilerplate services. I've played around with StackMob and the tools certainly seem helpful and easy to use. Wholistically, I think they're doing a good thing.

<!-- more start -->

The disappointing side of the rise of these kind of services is that new developers may be tempted to opt in for a vendor like StackMob to provide an API endpoint rather than face the challenges and thought-processes involved in writing it themselves.

Writing a core service yourself gives you fine-grain control over your business logic. StackMob does let you upload custom code, a feature I admittedly haven't tried yet, but the concept seems clumsy (you have to JAR up your code then upload it).

Further, needless to say, you learn a lot when you do something yourself. You don't just gain mastery over the technical steps involved, you can also achieve big conceptual milestones when you need to deeply think about a problem on your own. There's a big difference between hearing someone tell you that HTTP is a stateless protocol and learning <a href="https://twitter.com/#!/danieltreacy/status/129080404480241664">what that actually means</a>.

In doing something like setting up a REST endpoint you will probably reach the same ultimate destination as the current best-practice thought, simply because you will make mistakes that teach you _why_ these patterns are considered best practice. More power to you.

At the end of the day, think of it this way: which would a potential employer value more: your familiarity with a vendor SDK or some lessons learned from the school of hard knocks?

<!-- more end -->