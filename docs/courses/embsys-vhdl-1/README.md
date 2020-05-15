---
# sidebar: false
sidebar: auto

tags:
  - VHDL
  - FPGA
  - Embedded Systems

state: true

semester: Winter
license: uastw
link: https://moodle.technikum-wien.at/
ects: 6

attendees:
  total: 5
  free: 5
degrees:
  - Bachelor
language:
  - English

media:
  main:
    src: https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Mux-Symbol_DIN40900.svg/170px-Mux-Symbol_DIN40900.svg.png
    # src: /assets/img/courses/VHDL1Cover.png
    alt: Symbol of a block element.

schedule:
  # CW45 2020
  start: 02.11.2020
  # CW2 2021
  end: 11.01.2021
  duration: 10 weeks

lecturers:
  - /studyathome/partner/uastw/lecturer/andreas-puhm.html

university:
  page: /studyathome/partner/uastw/
  faculty: Electronic Based Systems
  program: Electronics and Business
---

# Specialization Embedded Systems (VHDL Part I)

::: slot description
[Lorem ipsum](https://loremipsum.de/) dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
At vero eos et accusam et justo duo dolores et ea rebum.
Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
At vero eos et accusam et.
:::

## Overview

### Contents

<!-- FIXME:
* Bild mit ./ wird nicht angezeigt
* Bild unter /assets/... wird bei base="/hub-public/" nicht angezeigt
 -->

![8 Bit Adder block element](assets/img/courses/vhdl-adder.png)

<!-- ![8 Bit Adder block element](./img/vhdl-adder.png) -->

- VHDL Basics
- Combinational Logic
- Synchronous Logic
- Finite State Machines
- Verification and Designflow

### Outcomes

After passing this course successfully students are able to

- describe the basic components of digital logic designs
- implement the basic components of digital logic designs via VHDL and interpret VHDL code
- design a verification environment in VHDL for a given design specification
- verify a VHDL design by simulation in Modelsim

### Methods

| Type        | Effort \[h\] |
| :---------- | :----------- |
| Independent | 30           |
| Lecture     | 4            |

## Assessment

They students will have to do several assignments using the [Modelsim FPGA simulator](https://www.intel.com/content/www/us/en/software/programmable/quartus-prime/model-sim.html).

### Example Assignment

Write an 8 Bit Adder element in VHDL.

![8 Bit Adder block element](assets/img/courses/vhdl-adder.png =300x)

### Final Exam

The final exam will be a moodle based multiple choice test.

### Methods

| Type                      | Points/Percent |
| :------------------------ | :------------- |
| **Continuous Assessment** |                |
| Assignments               | 50%            |
| Final Exam                | 50%            |

### Criteria

| Grade | Grade (letter) | Scale            |
| :---- | :------------- | :--------------- |
| 5     | Nicht Genügend | < 50 points      |
| 4     | Genügend       | 50 to 62 points  |
| 3     | Befriedigend   | 63 to 74 points  |
| 2     | Gut            | 75 to 87 points  |
| 1     | Sehr gut       | 88 to 100 points |

## Requirements

### Skills

- Boolean Algebra (nice-to-have)

### Equipment

- No hardware required
- [Software ModelSim (free)](https://www.intel.com/content/www/us/en/software/programmable/quartus-prime/model-sim.html):
  The course distance learning letters reference **ModelSim Version 10.5b** which can be downloaded from the moodle course itself, newer version may differ slightly but will provide all mechanisms / features needed for the course.
