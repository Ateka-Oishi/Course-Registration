# Website : Course-Registration

Live Link : https://my-course-roster-website.netlify.app/


## Q&A Sections
- Add at least 3 Project features of "Course Registration"
- Discuss how you managed the state in your assignment project.

## Add at least 3 Project features of "Course Registration"

### Features :

* In this Project any users can select the course they want to enroll and will preview it in the cart section that they have enrolled the course.

* You can see the Total Price, Total Credit Hours and Remaining Credits when you will select any course from the cart section. The Remaining Credits will be set 20 by default.

* Another amazing features is Toast alert. If the Total Credit Hours is Greater than 20 then it will show you a toast alert that "you cannot select more than 20 credits". Also if you select a course more than once it will show you another toast "Oops! already selected". Isn't it so cool👌?
* For installation of toast:
```bash
npm i react-toastify
```


## Discuss how you managed the state in your assignment project.

1. First I have created a JSON file named `course.json` with the data of courses like course_name, price, details, image live hosting by `ImgBB`, credit and stored the file in the public folder.


2. State is managed by using React useState() hook. I have used total five states here.

* **allCourses** state variable is used to load data from the JSON File. **setAllCourses** function is used to set all the data from the JSON to the State.

* **selectedCourses** state variable is initialized as an empty ARRAY.When an user click on the select button it will trigger a function called **handleSelectCourse**. Then it will pass the selected course as a Parameter. It is used to set the course the user has selected in the ARRAY. **setSelectedCourses* will set the courses the user have selected.

* **totalCredit** and **totalPrice** are another state variables initialized with 0. The state variable is used to show the totalCredit and totalPrice of the courses the user have selected. When a user selects a course it will sum all of the course price and set the values using **setTotalPrice** and **setTotalCredit**. Also **totalCredit** and **totalPrice** will be passed as a props in the components **Cart** and will preview the value of the totalCredit and totalPrice in the **Cart**

* **remaining** is a state variable initialized with 20 by default. Because credit cannot be more than 20. When a user click on the Select button then the it will be called by **setRemaining** function through the **totalCreditRemaining** variable.


# More about Course Registration
* First, run the development server:

```bash
npm run dev
```
* Open [http://localhost:5173/](http://localhost:5173/) with your browser to start your local instance of `Course Registration`.


# Deploy on Netlify

* The easiest way to deploy your React.js website is to use the [Netlify Platform]( https://app.netlify.com/) from the netlify website.


# Contributors

- [Ateka Sultana](https://github.com/programming-hero-web-course2/my-course-roster-Ateka-Oishi)
