---
layout: post
title: (CV) - HSV on color extraction
date: 2020-01-06 12:00:00 +0800
description: An Intro on HSV
img: HSV-Color-Space-Chart2.jpg # Add image post (optional)
fig-caption: # Add figcaption (optional)
tags: [RGB, HSV, Color, Color Extraction, Computer Vision]
---
---
## Intro

<!-- ![I and My friends]({{site.baseurl}}/assets/img/HSV-Color-Space-Chart2.jpg) -->
HSV presented as Hue, Saturation, Value
* Hue

   Using the Protractor present different color in 0°～360° with Counterclockwise. Angle present the Hue as following:

	```
0° - Red
60° - Yellow
120° - Green
180° - Cyan
240° - Blue
300° - Magenta
	```
* Saturation

   Saturation states the level in mixing spectral color with white, higher saturation closer to spectral color, vice versa. 

   [H, 0, 100] in (H,S,V) represents white, while the Saturation = 0, Value = 100, whatever wt hue it is. 

   When Saturation is 0, indicated gray scale. 

* Value

   Value related to brightness. The color on an object is a reflection and absorption of color. 

   Value located in range 0~100%, higher value lighter gray scale. 

---
* How to extract color on a cloth?

   using dockerfile to build the container and run the [srcipt](http://github.com/royinx/blog/color_extract/color_extract.py)

   ```
docker build -t color .
docker run --rm -it -v ~/Download/blog:/blog -w /blog/color_extract color bash
   ```


---
Reference : 

[RGB to HSV (scikit-image.org)](https://scikit-image.org/docs/dev/auto_examples/color_exposure/plot_rgb_to_hsv.html)

[Clothes and color extraction with Generative Adversarial Network](https://towardsdatascience.com/clothes-and-color-extraction-with-generative-adversarial-network-80ba117e17e6)

