---
# sidebar: false
sidebar: auto

tags:
  - CAN
  - FlexRay
  - Network Simulation
  - car2x
  - LIN
  - Automotive Ethernet

state: true
enrollment: true

semester: Summer
license: WIT
link: https://moodle.wit.ie/login/index.php
ects: 5

attendees:
  total: 5
  free: 5
degrees:
  - Bachelor
language:
  - English

# Brendan will provide image or video
# What about the videos below? I simply linked them, so there shouldn't be copyright issues.
# But maybe you should nevertheless check it with Vector?
media:
  main:
    # src: https://assets.vector.com/cms/_processed_/d/c/csm_CANoe12_stage_image_5fc723944b.jpg
    src: /assets/img/courses/can-oe.jpg
    # src: https://www.youtube.com/watch?v=vWfvNN2Vj_0
    alt: Picture of a car and a screenshot of the CANNoe software.
  description:
    # src: https://www.youtube.com/watch?v=vWfvNN2Vj_0
    src: https://youtu.be/DUNWZnhneiI

schedule:
  # application deadline: 2 months in advance. would be good to market it in June for Winter semester and in November for Summer Semester
  start: 17.01.2022
  end: 29.04.2022
  duration:

lecturers:
  - /studyathome/partner/wit/lecturer/brendan-jackman.html

university:
  page: /studyathome/partner/wit/
  faculty: Science and Computing
  program: Applied Computing Automotive & Automation Systems
---

# The Connected Car


*[ECUs]: Electronic Control Units
*[CAN]: Controller Area Network
*[LIN]: Local Interconnect Network

::: slot information
Modern vehicles contain a large number of Electronic Control Units (ECUs) that look after everything from powering the vehicle’s motion to the operation of the windscreen wipers.
These control units exchange a huge amount of information with each other over various data networks to ensure the safe, secure and efficient operation of the vehicle.
Think of it as like having a small internet inside your car.
Additionally these networks are now being interconnected with the Internet itself to allow data from the vehicle to be shared with other road users for improved road safety and to access cloud services.
This module will teach you how to design vehicle networks using modern vehicle network protocols and simulation tools.
:::

## Overview

### Contents

In this module you will learn all about the most widely used network protocols in today’s vehicles, such as:

- A simple, low cost, single-wire protocol used to connect switches and motors to systems such as climate control and electric windows (the LIN bus).
- The most popular vehicle network and its various modern derivatives, used for real-time control systems and vehicle diagnostics (the CAN bus and CAN-FD).
- A robust, safety-critical network protocol used for drive-by-wire applications (FlexRay)
- A fast, high bandwidth protocol used for advanced driver assistance systems, multimedia, service-oriented applications and remote diagnostics (Automotive Ethernet).

You will learn how to use the standard automotive industry Vector CANoe application to simulate, analyse and test the various vehicle network protocols.
A fully operational demo version of CANoe is available for use on this module.

### Outcomes

On successful completion of this module, a student will be able to:

- Distinguish the characteristics of the different network protocols.
- Compare and contrast common automotive protocols.
- Formulate application networking requirements.
- Design gateway network protocols.
- Evaluate security requirements for a connected vehicle.
- Set up and appraise industry standard network development and testing tools.

### Methods

- Combination of lectures and laboratory-based practicals.
- Self-directed learning.

| Type                 | Effort \[h\] |
| :------------------- | :----------- |
| Independent Learning | 87           |
| Practical            | 24           |
| Lectures             | 24           |

## Assessment

<!-- Describe Assessment procedure verbally -->
The grade is comprised of a main assignment (70%) and a minor assignment (30%), which is typically an essay or a research report investigating some protocol in more detail.

### Example Assignment

<!-- Describe an example assignment definition -->
Implement a CAN network on the Vector CANoe simulator software to test a **car climate control system** according to a given interface description.

### Methods

| Type                      | Points/Percent |
| :------------------------ | :------------- |
| **Continuous Assessment** |                |
| Assignment                | 30%            |
| Assignment                | 70%            |

### Criteria

| Grade (Description)                                                                                                     | Percentage |
| :---------------------------------------------------------------------------------------------------------------------- | :--------- |
| Inability to specify a coherent network design.                                                                         | < 40%      |
| Able to describe the basic network design concepts.                                                                     | 40%–49%    |
| All the above and in addition is able demonstrate a technical understanding of the common automotive network protocols. | 50%–59%    |
| In addition, is able to develop and test a network using two or more protocols connected with a gateway.                | 60%–69%    |
| All of the above and able to debug network issues at a low level.                                                       | 70%–100%   |

## Requirements

### Skills

- No Prerequisites

### Equipment

- Computer
- [CANoe SW for Simulation](https://www.vector.com/int/en/products/products-a-z/software/canoe/)
