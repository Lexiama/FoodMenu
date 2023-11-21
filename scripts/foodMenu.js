let menu = {
    drinks : [
     "Water", "Tea", "Sweet Tea",
     "Coke", "Dr. Pepper", "Sprite"
     ],
    entrees : [
  "Hamburger w/ Fries",
     "Grilled Cheese w/ Tater Tots",
    "Grilled Chicken w/ Veggies",
     "Chicken Fried Steak w/ Mashed Potatoes",
    "Fried Shrimp w/ Coleslaw",
     "Veggie Plate"
    ],
    desserts: [
     "Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"
     ]
    };

    window.onload = ()=>{
        let categorySelect = document.getElementById("categorySelect")
        categorySelect.onchange = getCategory
    };

    function getCategory(event){
        let category = event.target.value
        let selectMenu = document.getElementById("selectMenu")
        selectMenu.innerHTML = '<option value="" selected>Select Menu</option>'
        menu[category].forEach(m => {
            let op = document.createElement("option")
            op.innerText = m;
            op.value = m;
            selectMenu.appendChild(op)
        });
    }