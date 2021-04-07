const isIntersecting=(entry)=>{
  return entry.isIntersecting //true dentro de lapantalla
}
const accion=(entry)=>{
  const nodo=entry.target
  console.log("nyanpassu");
  observer.unobserve(nodo)
}
const observer= new IntersectionObserver((entries)=>{
  entries
  .filter(isIntersecting)
  .forEach(accion)
})
export const registerImage=(imagen)=>{
  //IntersectationObserver -> observar imagen
  observer.observe(imagen)
};