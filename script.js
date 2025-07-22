console.log("hello")


document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.createElement("div");
  cursor.id = "neon-cursor";
  document.body.appendChild(cursor);

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });
});


document.addEventListener("DOMContentLoaded", () => {


 
  const menuToggle = document.getElementById("menu-toggle");
  const navbar = document.querySelector(".navbar");
  menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });
});
