function initTabNav(){
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');
  if(tabMenu.length && tabContent){
    tabContent[0].classList.add('ativo');
    function activeTab(index){
      tabContent.forEach((section) =>{
        section.classList.remove('ativo');   
    });
    console.log(tabContent[index].dataset.anime)
    tabContent[index].classList.add('ativo');
    }
    
    tabMenu.forEach((itemMenu, index) =>{
      itemMenu.addEventListener('click', function(){
        activeTab(index);
      });
    });
  }  
}
initTabNav();

function initAccordion(){
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
  const activeClass = 'ativo';
  if(accordionList.length){
    accordionList[0].classList.add('ativo');
    accordionList[0].nextElementSibling.classList.add('ativo');
    
      function activeAccordion(event){
        this.classList.toggle('ativo');
        this.nextElementSibling.classList.toggle('ativo');
      }
    
    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    })
  }
  
}

initAccordion();

function initScrollSuave(){
const linksInterno = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');
function scrollToSection(event){
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href');
  const section = document.querySelector(href);
  section.scrollIntoView({
    behavior: 'smooth',
    block:  'start',
  });
/* Forma Alternativa
  const topo = section.offsetTop;
  window.scrollTo({
    top: topo,
    behavior: 'smooth',
  }) */
}
linksInterno.forEach((link) =>{
  link.addEventListener('click', scrollToSection)
    });
}
initScrollSuave();

function initAnimacaoScroll(){

const sections = document.querySelectorAll('[data-anime="scroll"]');
if(sections.length){
const windowMetade = window.innerHeight * 0.6;
function animaScroll(){
  sections.forEach((section) =>{
    const sectionTop = section.getBoundingClientRect().top - windowMetade;
    const isSectionVisible = (sectionTop - windowMetade) < 0;
      if(sectionTop < 0){
        section.classList.add('ativo');
      }
  })
}
animaScroll();
window.addEventListener('scroll', animaScroll);
}
}

initAnimacaoScroll();