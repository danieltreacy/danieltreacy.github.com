---
layout: post
title: Getting my Ruby in a knot
---

I've been working on a side project (nothing new there). The app is fairly CRUD-ish with a few spicy features thrown in. Upon first thought, the most appropriate development framework seemed to be Ruby on Rails, as I could get something up and running quite quickly with minimal annoyances.

So I started churning out the typical Rails patterns and got the views, stylesheet, and basic config set up. First step was to create a user registration page so I can at least have a user session with which to build the rest of the business rules on. I've been dabbling into Rails for a little over a year, but this was my first time building a Rails app with the view to it actually reaching production. Big difference in paradigm, especially with regards to security. And that was when I hit a roadblock. I won't bore you with the details but, long story short - I <a href="https://twitter.com/#!/danieltreacy/status/71444769741602816" target="_blank">got fed up</a> with my lack of knowledge in Ruby, particularly design patterns, and found myself tapping into Java design patterns, which due to Rails' "convention over configuration", often didn't work. Convention over configuration is all well and good, but not if you don't know what the conventions are in the first place! I concluded I didn't have a deep enough working knowledge of Ruby to write a production app end-to-end.

So, naturally, I decided to fall back on my strengths and write the app in Java/Spring/Hibernate. A few Maven commands later I was up and running in the JVM, only to remember how much I hated Java view templates (like Tiles). I was using <a href="http://www.haml-lang.com/" target="_blank">HAML</a> and <a href="http://www.sass-lang.com/" target="_blank">SASS</a> in my Rails app, and to move to JSTL and Tiles was like jumping into a car and realizing it's only got 2 gears and a top speed of 40km/h. And no cup-holders.

So, I am now looking into JRuby. All the power of the JVM with Ruby's syntactic sugar and flexibility plus Rails' convention-driven design - what could possibly go wrong?

I guess I'll wait and see.

*UPDATE:* Have ported the Rails app over to JRuby and so far it's not disappointing! As a side note: highly recommend <a href="http://www.jetbrains.com/ruby/" target="_blank">RubyMine</a> from JetBrains (creators of IntelliJ) as a Ruby IDE. Just as good for Ruby/Rails as IntelliJ is for Java/Spring.