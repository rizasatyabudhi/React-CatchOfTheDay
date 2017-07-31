1. you can only ever return ONE parent ELEMENT
2. don't put comment above your ELEMENT inside the render()
3. in react, we want to stay away from touching the DOM as much as possible because the way react works, 
   it just modify the data 
4. State is just one object that store all of application data
5. steps to update a state :
    1. Make a function
    2. copy our state
    3. add our new fish to the copied state
    4. set the newly added fish to the existing original state
    5. add that function to the constructor 