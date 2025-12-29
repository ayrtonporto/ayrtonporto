document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab-btn');
  const contents = document.querySelectorAll('.project-content');
  const mainContainer = document.querySelector('main');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // 1. Remove Active from all Tabs
      tabs.forEach(t => t.classList.remove('active'));
      
      // 2. Hide all Contents
      contents.forEach(c => c.classList.remove('active'));

      // 3. Activate Clicked Tab and Target Content
      tab.classList.add('active');
      const targetId = tab.getAttribute('data-target');
      document.getElementById(targetId).classList.add('active');

      // 4. Update Global Theme based on the Tab's data-theme
      // Reset classes first
      mainContainer.className = 'container'; 
      
      const theme = tab.getAttribute('data-theme');
      if (theme) {
        mainContainer.classList.add(theme);
      }
    });
  });
});
