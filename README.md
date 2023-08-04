# Kasper- Website

Visit the website: [https://ayhamalahmad.github.io/Kasper-/](https://ayhamalahmad.github.io/Kasper-/)


## Description

This project contains JavaScript code that adds various interactive functionalities to a web page. It enhances user experience by providing smooth scrolling, interactive menu toggle, and counting animations.

## Features

1. **Menu Toggle**
   - To open the menu, click on an element with class "toggle-menu".
   - To close the menu, click anywhere on the page other than the menu button or the menu itself.

2. **Smooth Scrolling**
   - Clicking on any list item inside the "ullinks" class or the element with class "up" will smoothly scroll to the respective section in the page.

3. **Dynamic Year**
   - The element with class "dYear" will dynamically display the current year.

4. **Skills Progress**
   - As the user scrolls down the page, the width of the progress spans inside the "skills" section will increase based on their "data-progres" attribute.

5. **Counting Animation**
   - As the user scrolls down the page, the numbers inside elements with class "number" will count up to their respective "data-goal" attribute values.

6. **Responsive and Mobile-Friendly Design**
   - The website is fully responsive, ensuring a seamless experience across various devices and screen sizes. The layout adapts to different viewports, providing optimal user experience for both desktop and mobile users.

7. **Beautiful and Minimalist Layout**
   - The website boasts a visually appealing and clean layout. It follows a minimalist design approach, focusing on simplicity and elegance to showcase Ayham's work without distractions.


## How It Works

The JavaScript code consists of several functions:

1. The `menuBotton` variable is used to select the menu button, and when clicked, it toggles the visibility of the menu.

2. The `ullinks` variable is used to select the menu list, and clicking outside the menu (excluding the menu button and list items) will close the menu if it is open.

3. The `scrolTo` function enables smooth scrolling to the specified sections when clicking on certain elements.

4. The `showAndG` function adds or removes classes from elements and updates progress spans' width and starts counting animations based on the scroll position.

5. The `startCount` function is used to increment the content of elements with class "number" to achieve the counting animation effect.

6. The "Dynamic Year" functionality simply displays the current year in an element with class "dYear". 

