/**
 * @GSAP pour gérer l'animation de la section d'accueil
 */
if (window.innerWidth > 900) {
    let tl = gsap.timeline()
    
        tl.from('.letters', {
        duration: 0.75,
        opacity: 0,
        stagger: 0.1, 
        color: "#F76B15"
    })
    //
    tl.to('.prenom', {
        duration: 1,
        y : "-250px",
        x : "460px"
    })
    tl.to('.nom', {
        duration: 1,
        y : "-150px",
    }, "<0")
    
    tl.from('.section_image', {
        duration: 1,
        delay: 0,
        x : "-600px",    
    },"<0")
    
    tl.from('.introduction', {
        duration: 1,
        x : "800px"
    
    },"<0")
    tl.to('.introduction', {
        duration: 1,
        x : "-100px",
        y: "50px"
        
    },"<0")
    
    
    
    tl.from('.header', {
        duration: 1,
        opacity: 0,
        backgroundColor:"red"
    },"<0")
    
    }
    /**
     * Pour afficher et masquer les détails du " À PROPOS"
     */
    let informations = document.querySelectorAll('.apropos_information')
    let aproposItem = document.querySelectorAll('.voir_plus')
    let fermer = document.querySelectorAll('.fermer')
    
    function masqueInfo(ListeElements){
        ListeElements.forEach(element => {
            element.classList.remove('active')
        });
    }
    
    aproposItem.forEach((element, index) => {
        element.addEventListener('click', (e) =>{
            e.preventDefault()
            masqueInfo(informations)
            informations[index].classList.add('active')
    });
    })
    
    
    fermer.forEach(element => {
        element.addEventListener('click', (e)=>{
            e.preventDefault()
            masqueInfo(informations)
        })
    });
    
    /**
     * Slide pour les afficher les diplomes 
     */
    const imageDiplomes = document.querySelectorAll('.image_diplome')
    const entreprisesItem = document.querySelectorAll('.entreprise_item_image')
    const nbrImageDiplome = imageDiplomes.length
    
    let currentImage = 0
    
    setInterval(() => {
        currentImage =(currentImage+1)%nbrImageDiplome
        masqueInfo(imageDiplomes)
        imageDiplomes[currentImage].classList.add('active')
    }, 2000);
    
    
    
    function slideElement(afficherPlus, afficherMoins,divToSlide, currentIndex = null,itemWidth,itemsCount) {
        afficherPlus.addEventListener('click', ()=>{
             if (currentIndex < itemsCount-1) {
                currentIndex++
                updateCarousel();
             }
        })
        afficherMoins.addEventListener('click', ()=>{
            if (currentIndex > 0) {
                currentIndex--
                updateCarousel();
            }
        })
        function updateCarousel() {
            let translateX = -itemWidth*currentIndex
            divToSlide.style.transform = `translateX(${translateX}px)`
            divToSlide.style.transition = "transform 1s";
        }
    }
    
    //const competenceImage = document.querySelector('.competence_image')
    let currentIndex = 0;
    const itemWidth = document.querySelector('#section2 .competences .competence_items .entreprises .entreprises_item').offsetWidth;
    const itemsCount = document.querySelectorAll('.entreprises_item').length;
    
    const afficherPlus =  document.querySelector('.afficherPlus')
    const afficherMoins = document.querySelector('.afficherMoins')
    
    const entrePrises = document.querySelector('.entreprises')
    
    
    
    document.addEventListener('DOMContentLoaded', function () {
        
        slideElement(afficherPlus, 
            afficherMoins,
            entrePrises,
            currentIndex,
            2*itemWidth,
            itemsCount-2)    
    })
    
    document.addEventListener('DOMContentLoaded', function() {
        slideElement(
            document.querySelector("#afficherPlus"),
            document.querySelector("#afficherMoins"),
            document.querySelector(".projets"),
            0,
            document.querySelector(".projets_item").offsetWidth,
            document.querySelectorAll(".projets_item").length
        )
        
    })