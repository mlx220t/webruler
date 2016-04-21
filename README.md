# Webruler - Simple Ruler for the web developers.
You can change the width, drag, change position of the ruler.

You can see the Demo here: http://web.kupibo.com.ua/demo/js/ruler/index.html

#### You should add:

  - jquery-1.11.0.min.js
  - jquery-ui.js
  - jquery.ruler.css
  - jquery.ruler.js

#### Initialisation

    <div id="line"></div>
    
#

    <script>
  		$(document).ready(function (){
  			$('#line').ruler(3000);
  		});
	  </script>
		
Where 3000 - the width of your ruler. You can add differend values.
