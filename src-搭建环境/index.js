import './public/css/index.css'
import imgSrc from './public/images/地区乳腺癌.png'
let pp = document.createElement('p')
pp.innerText = '哈哈哈'
document.body.appendChild(pp)

let Myconfig = () => {
console.log('TOP');
}
Myconfig()


let ImgNode = new Image()

ImgNode.src = imgSrc

document.body.appendChild(ImgNode)