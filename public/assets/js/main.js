if (window.innerWidth > 900) {
  document.addEventListener('DOMContentLoaded', function(e) {
      e.preventDefault()
      moveSection()
  })
  
  document.addEventListener('wheel', upDownScroll);
  document.addEventListener('keydown', keyUpDownLeftRight);
  
  let sections = document.querySelectorAll('section');
  const nbreSection = sections.length - 1;
  let currentSection = 0;
  let isScrollingAllowed = true;
  
  function upDownScroll(event) {
      if (!isScrollingAllowed) return;
      isScrollingAllowed = false;
      setTimeout(() => isScrollingAllowed = true, 400);
      if (event.deltaY > 0 && currentSection < nbreSection) {
          moveSection('down');
      } else if (event.deltaY < 0 && currentSection > 0) {
          moveSection('up');
      }
  }
  
  function keyUpDownLeftRight(event) {
      if (event.key === "ArrowDown" || event.key === "ArrowRight") {
          if (currentSection < nbreSection) moveSection('down');
      } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
          if (currentSection > 0) moveSection('up');
      }
  }
  
  
  function moveSection(direction) {
      let previousSection = currentSection;
      /*const color_header = ["#ccf381", "#3d155f","#1D3B31"]
      let header = document.querySelectorAll('.top_bar a')*/
     
      
      
      if (direction === 'down') {
          if (currentSection < nbreSection) {
              currentSection++;
          }
      } else {
          if (currentSection > 0) {
              currentSection--;
          }
      }
      let etat = previousSection === currentSection
      //console.log(color_header[Math.min(currentSection,2)])
  
      
      // Gérer l'animation de la section précédente
      if (!etat) {
          sections[previousSection].classList.remove('active');
          if (direction === 'up') {
              sections[previousSection].style.animation = 'slideOutToTop 0.9s forwards';
          }
      }
      // Gérer l'animation de la section actuelle
      sections[currentSection].style.display = 'flex';
      if (direction === 'down') {
          sections[currentSection].style.animation = 'slideInFromBottom 0.9s none';
      }
      sections[currentSection].classList.add('active');
      /*header.forEach((element) => {
          setTimeout(() =>{element.style.color= color_header[Math.min(currentSection,2)]},900)
          
      })*/
  }
  }
  
  