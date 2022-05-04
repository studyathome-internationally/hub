---
# sidebar: false
sidebar: auto

tags:
  - IoT
  - Sensors
  - Actuators
  - Wireless
  - Web APIs
  - MQTT

state: true
enrollment: true

semester: Summer
license: CC by SA?
link: =course link=
ects: 5

attendees:
  total: 5
  free: 5
degrees:
  - Bachelor
language:
  - English

media:
  main:
    src: https://wit-computing.github.io/IoT-Standards-Protocols-2018/topic-01/talk-1/talk-1.jpg
    # src: https://www.youtube.com/watch?v=72o9Tbmhtss
    alt: Picture of the globe with internet of things items connected to it.
  description:
    src: https://www.youtube.com/watch?v=72o9Tbmhtss

schedule:
  start: 04.01.2022
  end: 30.04.2022
  duration: =course duration=

lecturers:
  - /studyathome/partner/wit/lecturer/frank-walsh.html

university:
  page: /studyathome/partner/wit/
  faculty: Computing and Mathematics
  program: Bachelor of Science (Honours) in the Internet of Things
---

# IoT-Standards-Protocols

::: slot information
The _Internet of Things_ (IoT) encompasses a broad range and scale of devices and applications.
This module examines the protocols and standards used to interconnect the various devices and applications in the Internet of Things.
:::

## Overview

### Contents

::: image-triplet
<img src="./img/talk-1.jpg" title="Internet of Things sensor" alt="PCB of a sensor">
<img src="./img/topic-5.png" title="Pictrogram of radio signal sending tower" alt="Pictrogram of radio signal sending tower">
<img src="./img/topic-7.png" title="Diagram illustrating publish and subscribe mechanism" alt="Diagram illustrating publish and subscribe mechanism.">

:::

The [course material](https://tutors-svelte.netlify.app/#/course/iot-protocols-2021.netlify.app) can be found online, the major topics are:

- The Internet of Things protocol stack
- Device level communication bus protocols
  - Event-driven bus protocols
  - serial communication
- Device interfacing and embedded application APIs
- Wireless communication for the IoT
  - Introduction to Wireless Networks
  - wireless protocols for low power devices
  - short-range wireless technologies
- Messaging protocols for the Internet of Things
  - Request-Response
  - Publish-Subscribe

### Testimonials

::: testimonial SS 2021

The lectures started on Monday 25th January 2021 and ended Friday 30th April 2021. We had a 1-hour theory lecture and a 3-hour practical lab exercise per week. For the labs we got a written step-by-step instruction in advance, and the lecturer was present for additional hints and to answer questions. We used the CISCO Packet Tracer, Raspberry Pi, Python/JavaScript. 

The project started in February by first submitting a short proposal (short description what it will be and which technologies in use (protocols, devices, programming language, …)). On May 9th was the submission of the finished project (Git Repository with all code and resources, 10 min video showing the work), a few days later a zoom meeting to present/discuss the work. 

The grading was 100% project.

:::

### Outcomes

On successful completion of this module, a student will be able to:

1. Distinguish between the communication and data requirements for the general Web protocol stack and Internet of Things protocol stack.
2. Create an appropriate physical layer specification for wireless networked devices based on application requirements.
3. Use low power, low overhead, wireless communication protocols to interconnect resource constrained sensors, actuators and other devices.
4. Apply lightweight messaging solutions that mediate between device level sensors and higher layer applications and services.
5. Use IoT gateway solutions to connect devices and higher level service layer networks.
6. Design domain-specific IoT solutions (e.g. health care) using suitable IoT protocols and standards.

### Methods

- Combination of lectures and computer/network laboratory work.
- Labs will provide practical knowledge into the design and implementation of IoT-specific communication protocol solutions.
- Lectures will provide the theoretical knowledge of IoT protocols and standards.
- As part of the lectures, case studies will be used to illustrate real-world IoT solutions using the standards and protocols covered in lectures(e.g. smart spaces).

| Type        | Effort \[h\] |
| :---------- | :----------- |
| Independent | 40           |
| Practical   | 40           |
| Lecture     | 40           |

## Assessment

<!-- Describe Assessment procedure verbally -->
The course consists of several labs which can be done from at home if you have the respective [equipment](#equipment).

Additionally, the student will have to do a project assignment in a virtual team.

#### Lab

<!-- Describe an example assignment definition -->
Please have a look at the [lab descriptions](https://tutors-svelte.netlify.app/#/wall/lab/iot-protocols-2021.netlify.app).

#### Project Assignment

<!-- The final exam will be ... -->
Please have a look at the [project assignment description](https://tutors-svelte.netlify.app/#/topic/iot-protocols-2021.netlify.app/topic-000-Assessments).

### Methods

| Type                      | Points/Percent |
| :------------------------ | :------------- |
| **Continuous Assessment** |                |
| Project Assignment        | 100%           |

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

* Programming Skills

### Equipment

If you don't have the hardware at home ask your lab assistent at the home university or write to [studyathome@technikum-wien.at](mailto:studyathome@technikum-wien.at)

- [Raspberry Pi 3](https://www.raspberrypi.org/)  
  ![Raspberry Pi PCB](./img/raspberry-pi-3.png =x300)
- [Raspberry Pi Camera Module 2](https://www.raspberrypi.com/products/camera-module-v2/)  
  ![Rasbperry Pi Camera Module 2](https://images.prismic.io/rpf-products/68fe7e4cb53767ad6c033bf3b46da3452188a24a_pi-camera-front-1-1426x1080.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=50&w=600&h=400 =x300)
- [SenseHAT Add-On board](https://www.raspberrypi.org/products/sense-hat/)  
  ![SenseHAT Add-On board](./img/sensehat.png =x300)
- [SiPy development board + PyCom expansion board](https://tutors-design.netlify.app/lab/iot-protocols-2020.netlify.app/topic-07/book-1/Equipment)
