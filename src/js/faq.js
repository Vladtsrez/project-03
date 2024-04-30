import Accordion from 'accordion-js';

const container = document.querySelector('.accordion-container');
const accordion = new Accordion(container, {
  duration: 600,
  showMultiple: false,
  openOnInit: [],
  elementClass: 'ac',
  triggerClass: 'ac-trigger',
  panelClass: 'ac-panel',
  activeClass: 'is-active',
  ariaEnabled: true,
  collapse: true,
  onlyChildNodes: true,
  openOnInit: [],
});
