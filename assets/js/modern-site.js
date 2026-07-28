const menuButton=document.querySelector("#menu-button");
const navLinks=document.querySelector("#nav-links");
if(menuButton&&navLinks){
  menuButton.addEventListener("click",()=>{
    const open=navLinks.classList.toggle("open");
    document.body.classList.toggle("menu-open",open);
    menuButton.setAttribute("aria-expanded",String(open));
    menuButton.setAttribute("aria-label",open?"Close navigation":"Open navigation");
  });
  navLinks.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{
    navLinks.classList.remove("open");
    document.body.classList.remove("menu-open");
    menuButton.setAttribute("aria-expanded","false");
  }));
}
document.querySelectorAll("[data-year]").forEach(node=>node.textContent=new Date().getFullYear());
const items=document.querySelectorAll(".reveal");
if(matchMedia("(prefers-reduced-motion: reduce)").matches||!("IntersectionObserver"in window)){
  items.forEach(item=>item.classList.add("visible"));
}else{
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target)}
  }),{threshold:.1});
  items.forEach(item=>observer.observe(item));
}
