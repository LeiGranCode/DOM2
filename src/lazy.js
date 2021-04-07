const isIntersecting=(entry)=>{
  return entry.isIntersecting //true dentro de lapantalla
}
const loadImage=(entry)=>{
  const container=entry.target //div
  const imagen=container.firstChild;
  const url=imagen.dataset.src
  //load image
  imagen.src=url;
  //desregistra la imagen
  observer.unobserve(container)
}
const observer= new IntersectionObserver((entries)=>{
  entries
  .filter(isIntersecting)
  .forEach(loadImage)
})
export const registerImage=(imagen)=>{
  //IntersectationObserver -> observar imagen
  observer.observe(imagen)
};