# web-calculator
a web calculator challenge for 3 weeks

Icons Resources
Ionicons - Free and cool icons available at your grasp, but you can't find all.
Link -
```
<script type="module" src="https://unpkg.com/ionicons@5.4.0/dist/ionicons/ionicons.esm.js"></script>
<script nomodule="" src="https://unpkg.com/ionicons@5.4.0/dist/ionicons/ionicons.js"></script>
```

Font Awesome - Free/Paid icons, almost all icons are available, but you will have to pay fro the better ones
Link - [fontawesom](https://fontawesome.com/)


fall back code(refactored code to add all buttons to one event listener to a function)
```
allNum.forEach(function(num) {
    num.addEventListener('click', function() {
        console.log('it worked');
    })
})
```