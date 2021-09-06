# Team Profile Generator 5000
 
 A team profile generator application written using Node. The inquirer prompts were a bit more complicated this time around, 
 requiring menu/sub-menu navigation and collecting data from all user-selected menus, but I eventually figured it out. 
 
 Ran into issues with several methods I tried to differentiate between intern and engineer objects. Because the user inputs 
 them in random order and length, dot case cannot be used to associate certain objects with fittingly styled HTML elements. 
 Eventually settled on pushing either an engineer or intern "status" property at the end of each prompt, mapping the 
 entire array to check for that identifier, and sending passing data to appropriate elements. 

 Working on simple HTML styling and testing next. 
