import {registerImage} from './lazy'

//Crear (1) imagen
  const minnum=1;
  const maxnum= 122;
  const random=()=> Math.floor(Math.random()*(maxnum-minnum))+minnum //random number
  const createImageNode=()=>{
  const container= document.createElement('div')
  container.className="p-4";

  const imagen = document.createElement('img')
  imagen.className="mx-auto";
  imagen.width='320'
  imagen.dataset.src=`https://randomfox.ca/images/${random()}.jpg`; //TO DO
  container.appendChild(imagen)
  return container;
}
//Agregar #imagen
const nuevaImagen=createImageNode();
const mountNode=document.getElementById("images");
const addButton=document.querySelector('button')

const addImage=()=>{
  const newImage=createImageNode();
  mountNode.append(newImage);
  registerImage(newImage)
};

addButton.addEventListener("click",addImage)
