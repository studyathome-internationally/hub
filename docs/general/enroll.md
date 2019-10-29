---
layout: Enrollment
enrollment:
  cc:
    - studyathome@technikum-wien.at
  bcc:
    - studyathome.bcc@technikum-wien.at
  subject: Matriculation / Course Enrollment (StudyATHome Internationally)
  body:
    before: >
      Dear Sir or Madam,\n\n
      I would like to enroll to course: {{ title }} (cf. {{ link }}).\n\n
    form: >
      Personal \n
       * Name:  \n
       * Surname (Family name):  \n
       * Date of Birth:  \n
       * Sex:  \n
       * Nationality:  \n\n
       * Address:  \n
       * Post Code:  \n
       * Municipality:  \n
       * Country:  \n
       * University:  \n\n
      A-Levels (University Entrance Qualification, e.g. High School)  \n
       * Date:  \n
       * Country of Awarding Institution:  \n\n
    after: >
      Kind regards,\n\n
---

# Course Enrollment

The course enrollment requires your matriculation first.
Please send an email containing your **matriculation data** to the International Office of the University holding the course by clicking `{{ $frontmatter.mailerLabel }}` below.

:::: slot matriculation-data
::: tip Matriculation Data
* Course Name / Link
* Personal
  * Name, Surname (Family name)
  * Date of Birth
  * Sex
  * Nationality
  * Address
  * University
* A-Levels (University Entrance Qualification)
  * Date
  * Country of Awarding Institution
:::
If you are studying a Master degree, please also provide that entrance qualification (Bachelor degree).
::: tip Master Entrance Qualification (Optional)
* Date
* Country of Awarding Institution
:::
Then you will get an email containing the **matriculation receipt** and the **course login information**.

Please ensure to enroll before the matriculation deadline.
:::tip Matriculation Deadline
January, 26^th^ 2020
:::
::::

:::: slot disclaimer
**StudyATHome Internationally**  
The data communicated to us by you for the purpose of the application will be used by us exclusively for the processing of the application on the basis of pre-contractual or contractual purposes and will not be passed on to third parties with the exception described below in case of uncertainties regarding the entry requirements.
If there is no further contact or enrollment, your data will be deleted after three years.

If you have any questions, please contact us at studyathome@technikum-wien.at.

::::

:::: slot disclaimer-ctu
**Czech Technical University Prague**  
The data communicated to us by you for the purpose of the application will be used by us exclusively for the processing of the application on the basis of pre-contractual or contractual purposes and will not be passed on to third parties with the exception described below in case of uncertainties regarding the entry requirements.
If there is no further contact or enrollment, your data will be deleted after three years.

Information on your data subject rights can be found [here](https://www.technikum-wien.at/information-ueber-ihre-rechte-gemaess-datenschutz-grundverordnung/).

If you have any questions, please contact us at dsvgo@cvut.cz.

**Data Processing Office**  
České vysoké učení technické v Praze  
Jugoslávských partyzánů 1580/3  
160 00 Praha 6 - Dejvice  
Česká republika  
e: cvut@cvut.cz
::::

:::: slot disclaimer-uastw
**University of Applied Sciences Technikum Wien**  
The data communicated to us by you for the purpose of the application will be used by us exclusively for the processing of the application on the basis of pre-contractual or contractual purposes and will not be passed on to third parties with the exception described below in case of uncertainties regarding the entry requirements.
If there is no further contact or enrollment, your data will be deleted after three years.

Information on your data subject rights can be found [here](https://www.technikum-wien.at/information-ueber-ihre-rechte-gemaess-datenschutz-grundverordnung/).

If you have any questions, please contact us at datenschutz@technikum-wien.at.

**Data Processing Office**  
University of Applied Sciences Technikum Wien  
Höchstädtplatz 6  
1200 Wien
::::

:::: slot disclaimer-ukim
**Ss. Cyril and Methodius University Skopje**  
The data communicated to us by you for the purpose of the application will be used by us exclusively for the processing of the application on the basis of pre-contractual or contractual purposes and will not be passed on to third parties with the exception described below in case of uncertainties regarding the entry requirements.
If there is no further contact or enrollment, your data will be deleted after three years.

Information on your data subject rights can be found [here](https://www.technikum-wien.at/information-ueber-ihre-rechte-gemaess-datenschutz-grundverordnung/).

If you have any questions, please contact us at dsvgo@ukim.edu.mk.

**Data Processing Office**  
Бул. „Гоце Делчев“ бр. 9, 1000 Скопје  
Република Северна Македонија  
Тел.: 3293-293 (централа), Факс: 3293-202  
e: ukim@ukim.edu.mk
w: www.ukim.edu.mk
::::

:::: slot disclaimer-wit
**Waterford Institute of Technology**  
The data communicated to us by you for the purpose of the application will be used by us exclusively for the processing of the application on the basis of pre-contractual or contractual purposes and will not be passed on to third parties with the exception described below in case of uncertainties regarding the entry requirements.
If there is no further contact or enrollment, your data will be deleted after three years.

Information on your data subject rights can be found [here](https://www.technikum-wien.at/information-ueber-ihre-rechte-gemaess-datenschutz-grundverordnung/).

If you have any questions, please contact us at dsvgo@wit.ie.

**Data Processing Office**  
Main Campus Cork Road  
Waterford City  
Co. Waterford, Ireland  
t: +353 51 30 2000  
e: info@wit.ie  
::::