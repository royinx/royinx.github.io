---
layout: post
title: (AI) - Minimize giant model 
date: 2020-01-06 12:00:00 +0800
description: Method of deploy giant model
img: giant.jpg # Add image post (optional)
fig-caption: # Add figcaption (optional)
tags: [AI, deployment]
---
---
Most of the people believe AI can do anything, like driving, recieving the phone call, auto-replying the email etc. The truth is AI just applied on video recommendation, SEO, Recommender system. 
If we want to create the general AI, the model must be large.
Every month must be a new model comes up, maybe OpenAI, Google or Microsoft, the 1st of the error scoreboard keep refreshing.

Let's say the [scoreboard](https://paperswithcode.com/sota/image-classification-on-imagenet) on image classification. The model which has great result always over 300M params, FixResNeXt-101 that has 829M.
For those model like sequence logic like NLP, that need much more params. Recently OpenAI released a large transformer based language model - GPT-2 with 1.5B params, trained on a dataset of 8M web pages. 
Salesforce published CTRL with 16B params, Nvidia created Megatron transformer with 80B params, Google Meena with 26B params. 

These industrial leader made a consensus that keep researching on a giant model.
All we know that the model is too large and expensive on computing power and lack of efficient.

---
- Problem:

  * Disk - model size that very large like GPT-2 need 5GB disk space.
  * VRAM - another meaning that model also cost a lot memory, model may split into few GPU and memory. 
  * Throughput - computing power, put it on GPU that need few seconds. Let's say 3 seconds, compare with light weight model that around 3ms only , that's 1000x !!!!

---
- Solution:

  * Model 
    * [Knowledge distillation](https://www.itread01.com/content/1547235795.html) - compressing model in ensemble method.
    * Remove Layer - learning Layer like batch norm, bottleneck can be remove by [TensorRT](https://developer.nvidia.com/tensorrt). 
  * Hardware
  	* Deploy to Cloud - To implement the real time inference, Cloud Service is best choice, multiple GPU and dataflow streaming only Tesla GPU supported. [[AWS](https://aws.amazon.com/ec2/instance-types/)], 
		* CPU 
			* BF16 - benefits of BF16 make CPU inference possible - [AWS Inf1](https://aws.amazon.com/ec2/instance-types/inf1/)
		* GPU 
			* Nvidia - T4 is an GPU which designed for Cloud service inference - [AWS G4](https://aws.amazon.com/ec2/instance-types/g4/).
			* AMD - A [github commit](https://github.com/ROCmSoftwarePlatform/rocBLAS/commit/88d4409ac09542670e6b5ed423a92a2bf08baa8d) suggests BF16 in coming AMD GPU. BF16 has a lot of benefits that may widely use in ARM mobile chipset.
  	* Embedded system
		* FPGA is another method deploy the model from zero to hero but time consuming on research and fine-tuning. 



---


