---
layout: post
title: Multi-agent Deployment Problem
image: Multi-agent-Deployment.png
description: Non-convex deployment algorithms with decaying awareness functions
---

<div class="row">
    <div class="col-md-6">
        <img src="/public/files/visibility_time_10botv2_1k_end.gif" alt-text="Time varying density function"/>
    </div>
    <div class="col-md-6">
        <img src="/public/files/motion_plot_static_10botv2_1k_end.gif" alt-text="Time varying density agent movement"/>
    </div>
</div>
<h6 class="subtext"> Left: Movement of 10 robots through unknown, nonconvex space. Right: Evolution of the density function over time - darker being more dense. You can see that the robots eventually establish patterns of movement. </h6><br>


For my ES 159: Introduction to Robotics class, I wanted to look at a SLAM algorithm that would explore a space while also maintaining observational capabilities in that space - what is termed the deployment problem. I found a paper by Kantaros et al., which addressed a known version of the problem.

With help from Yiannis Kantaros at UPenn, I was able to replicate their results, as well as demonstrating feasibility in unknown environments. In addition, I added patrol behavior by using time-varying density functions to modify robot motion, which has interesting theoretical and practical considerations. You can see the draft [here](/public/files/VQ_ES_159_Final_Project_060820.pdf)

​I'm currently working on expanding this concept into a submitted paper for review - more news on this soon!

Skills: MATLAB, Controls, Robotics


