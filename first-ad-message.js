window.addEventListener("load", () => {
    const link = document.getElementById("postLink");
    const hint = document.getElementById("hint");
  
    if (link && hint) {
      const rect = link.getBoundingClientRect();
      hint.style.left = rect.right + window.scrollX + 10 + "px";
      hint.style.top = rect.top + window.scrollY + "px";
      hint.style.display = "block";
  
      setTimeout(() => {
        hint.style.display = "none";
      }, 5000);
    }
  });
   