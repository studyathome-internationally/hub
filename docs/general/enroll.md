---
permalink: /courses/enroll/
enrollment:
  cc:
    - studyathome@technikum-wien.at
  bcc:
    -
  subject: Application / Course Enrollment (StudyATHome Internationally)
  body:
    before: >
      Dear Sir or Madam,\n\n
      I would like to enroll to the course: '{{ title }}' at the university {{ university.name }}.\n\n
    form: >
      Personal \n
       * Name:  \n
       * Surname (Family name):  \n
       * University Name: \n
       * University E-Mail: \n
       * Study Program: \n\n
    after: >
      I confirm reading and understanding the privacy information (https://hub.studyathome.technikum-wien.at/studyathome/privacy.html) and consent the data processing.\n\n
      Kind regards,\n\n
---

# Course Enrollment

Please send an **email** with your **application** to the International Office of the home university by clicking _**Write E-Mail**_ below.

The International Office will forward your application to the host university, which will decide about the acceptance within **two weeks**. You will get further information for registration and course enrollment, by email.

Please ensure to **apply before the application deadline**.

::: tip Application Deadline
June, 15^th^ 2020
:::

<CourseSelection path="/courses/" placeholder="-- Please choose a course --"/>
<UniversitySelection path="/studyathome/partner/" placeholder="-- Please choose your home university --"/>

<RequiredData title="Matriculation Data">

::: tip Application Data

- Course
  - Title
  - Host University
- Personal Data
  - Name, Surname (Family name)
  - University Name
  - University E-mail
  - Study Program

**Additional Registration Data**
_(On Request by Host University)_

- Date of Birth
- Gender
- Address
- Nationality
- Scan of passport or student id card

:::

</RequiredData>

<Disclaimer title="Privacy Disclaimer" open>

**StudyATHome Internationally**  
The data you provide us with for the purpose of the application will only be used by us to assist the application and grade recognition process. The data will not be passed on to third parties.

I confirm reading and understanding the [privacy information](https://hub.studyathome.technikum-wien.at/studyathome/privacy.html) and consent the data processing.

</Disclaimer>

::: slot confirmation
I confirm reading this information.
:::

<EMail>Write E-Mail</EMail>
