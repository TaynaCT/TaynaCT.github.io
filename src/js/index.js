
fetch('./src/db/who_am_i.json')
    .then(response => response.json())
    .then(data => {
      const mainHelloSection = document.getElementById('main-hello');
      
      const name = document.createElement('h1');
      name.textContent = data.name;

      const title = document.createElement('h2');
      title.textContent = data.title;

      const description = document.createElement('p');
      description.textContent = data.description;

      const hline = document.createElement('hr')

      mainHelloSection.appendChild(name);
      mainHelloSection.appendChild(hline);
      mainHelloSection.appendChild(title);
      mainHelloSection.appendChild(description); 

    })
    .catch(error => {
      console.log('Error fetching project data:', error);
    });

/*Scrolling test*/

    let lastKnownScrollPosition = 0;
    let ticking = false;

    
    function doSomething(scrollPos) {
      // Do something with the scroll position
      var gridContainer = document.querySelector(".projects-area");
      gridContainer.classList.remove("hidden");
      window.alert("SCROLIING!!" + scrollPos);
      
    }
    
    document.addEventListener("scroll", (event) => {
      lastKnownScrollPosition = window.scrollY;
     
    
      if (!ticking) {
        window.requestAnimationFrame(() => {
         /* doSomething(lastKnownScrollPosition);*/
          ticking = false;
        });
    
        ticking = true;
      }
    });
    
    