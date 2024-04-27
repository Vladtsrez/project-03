import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';

const container = document.querySelector('.accordion-container');
const accordion = new Accordion(container, {
  duration: 600,
  showMultiple: true,
  openOnInit: [],
  elementClass: 'ac',
  triggerClass: 'ac-trigger',
  panelClass: 'ac-panel',
  activeClass: 'is-active',
  ariaEnabled: true,
  collapse: true,
  onlyChildNodes: true,
  openOnInit: [],
  onOpen: currEl => console.log('Open!', currEl),
});
