---
permalink: /courses/enroll/
enrollment:
  cc:
    # - studyathome@technikum-wien.at
    # - test0@mail.com
  bcc:
    # - test1@mail.com
    # - test2@mail.com
  subject: Application / Course Enrollment (StudyATHome Internationally)
  body:
    before: >
      Dear Sir or Madam,\n\n
      I would like to enroll in the course: '{{ title }}' at the university {{ university.name }}.\n\n
    form: >
      Personal Data \n
       * Name:  \n
       * Surname (Family name):  \n
       * University Name: \n
       * University E-Mail: \n
       * Study Program: \n\n
    after: >
      I confirm reading and understanding the [privacy information](https://hub.studyathome.technikum-wien.at/studyathome/privacy.html) and consent to the processing of personal data.\n\n
      Kind regards,\n\n
---

# Course Enrollment

::: tip Application Deadline
November, 14^th^ 2021
:::

Please send an **email** with your **application** by clicking ```Write E-Mail``` below. The course is **free of charge** but the capacity is limited (see course description).

Please ensure to check the [FAQs](/e-learning-sharing/faq.html) regarding course recognition and **apply before the application deadline**.

## Application Process

**After the deadline**, your application must be approved by the home university and will be forwarded to the host university, which will decide about the acceptance within **two weeks**. You will get further information for registration and course enrollment, by email.

## Selection Criteria

The applicants will be nominated by their international coordinators using the following criteria:

1. Students must be in the 3^rd^ semester when doing the virtual exchange. The application can be done earlier already.
2. Grade Point Average (arithmetic average) of previously finished semester. E.g. When applying for an exchange in the 3^rd^ semester, the grades of the 1^st^ semester will be considered.

## Application

<RequiredData title="Data">

::: tip Application Data
(_Processed by **StudyATHome Hub (UAS Technikum Wien**_)

- Course
  - Title
  - Host University
- Personal Data
  - Name, Surname (Family name)
  - University Name
  - University E-mail
  - Study Program

:::

::: tip Registration Data
(_Processed by **Host University on Request**_)

- Course
  - Title
  - Host University
- Personal Data
  - Name, Surname (Family name)
  - University Name
  - University E-mail
  - Study Program
  - Date of Birth
  - Gender
  - Address
  - Nationality
  - A-Levels (University Entrance Qualification)
    - Date
    - Country of Awarding Institution
  - Scan of passport or student id card

:::

</RequiredData>

<Disclaimer title="Privacy Disclaimer" open>

**StudyATHome Internationally**  
Your **application data** is processed by the StudyATHome team (studyathome@technikum-wien.at), by the coordinators of the home university and the coordinators of the host university. The data will be transmitted by e-mail.

The data you provide will only be used to assist the application and grade recognition process. The data will not be passed on to third parties.

You can revoke this consent at any time, but this will cancel your participation at the eLearning sharing program.

</Disclaimer>

Select course (you cannot select courses of your home university):
<CourseSelection path="/courses/" placeholder="-- Please choose a course --"/>
Select home university:
<UniversitySelection path="/studyathome/partner/" placeholder="-- Please choose your home university --"/>

<Confirmation>

I confirm reading and understanding the full [privacy information](/studyathome/privacy.md) text and consent to processing of personal data.

</Confirmation>

<EMail>Write E-Mail</EMail>

## Troubleshooting

In case of problems with the ```Write E-Mail``` button, simply open your e-mail client of choice and write an e-mail to

[studyathome@technikum-wien.at](mailto:studyathome@technikum-wien.at)

**Subject**: Application / Course Enrollment (StudyATHome Internationally)

**Body**: **Application Data** (see **Data** above)