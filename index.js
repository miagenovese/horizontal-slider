var root = document.documentElement;
const items = document.querySelectorAll('.hs');

items.forEach(item => {
  const listItems = item.querySelectorAll('.li');
  const n = item.children.length;
  item.style.setProperty('--total', n);
});
