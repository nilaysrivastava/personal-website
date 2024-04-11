import indovina from "../images/works/indovina.gif"
import gameLab from "../images/works/gameLab.gif"
import mudima from "../images/works/mudima.gif"
import g1 from "../images/works/game1.png"
import g2 from "../images/works/game2.png"
import g3 from "../images/works/game3.png"

import site from "../images/works/site.png"
import tea from "../images/works/tea.png"
import ecommerce from "../images/works/ecommerce.png"

import blackhorse from "../images/works/BlackHorse.jpg"
import caffedellearti from "../images/works/CaffeDelleArti.png"
import sam from "../images/works/Sam.png" 
import lehibou from "../images/works/LeHibou.jpg"
import magnus from "../images/works/Magnus.png"
import friday from "../images/works/Friday.png"
import marvanza from "../images/works/Marvanza.png"

import choice from "../images/works/Choiches.png"
import leaf from "../images/works/Leaf.png"
import hands from "../images/works/Handshake.png"
import manMiddle from "../images/works/ManMiddle.png"
import manNowhere from "../images/works/ManNowhere.png"
import touch from "../images/works/Touch.png"
import fit from "../images/works/Fit.png"


import portfolio from "../images/works/portfolio.png"
import foode from "../images/works/foode.png"
import voib from "../images/works/voib.png"
import tu from "../images/works/tu.png"



const web = [
    {title:"Portfolio", image: portfolio, description:"Portfolio website", stack: "ReactJs, TypeScript, Tailwind CSS, NodeJs, EmailJs, Framer motion", duration: 0.1, link: "#", shadow: "shadow-purple-600/50"},
    {title:"Voib", image: voib, description:"Music website", stack: "NextJs, TypeScript, Bootstrap, Supabase, NodeJs, ExpressJs", duration: 0.2, link: "#", shadow: "shadow-pink-600/50"},
    {title:"FoodE",image: foode, description:"Food ordering website", stack: "ReactJs, TypeScript, Bootstrap, MongoDB, NodeJs, ExpressJs", duration: 0.3, link: "#", shadow: "shadow-orange-600/50"},
    {title:"Text Utils", image: tu, description:"Text Editor website", stack: "ReactJs, Bootstrap, JavaScript, NodeJs, Tailwind CSS, Npm", duration: 0.4, link: "#", shadow: "shadow-blue-600/50"}
]

const multimedia = [
    {title: "Mudima Games", image: mudima, description:"Interactive game for museum visitors made for Museo diocesano di Altamura", stack: "Unity, C#", duration: 0.14},
    {title:"Game Labs", image: gameLab, description:"Interactive game for museum visitors made for Museo diocesano di Santa Severina", stack: "Unity, C#", duration: 0.15},
    {title:"Indovina il santo!", image: indovina, description:"Interactive game for museum visitors made for Museo diocesano di Lamezia Terme", stack: "Unity, C#", duration: 0.16},
]

const itchGames = [
    {title:"Can I sleep now?", image: g1, description:"A skill-based game in which you must dodge intrusive thoughts ", stack: "Unity, C#", duration: 0.17, link: "https://lafayenbros.itch.io/can-i-sleep-now"},
    {title:"Shaaade!", image: g2, description:"A skill-based game in which you must choose from 4 shades of color, the lightest one", stack: "Unity, C#", duration: 0.18, link: "https://lafayenbros.itch.io/shaaade"},
    {title:"Generatore di scuse", image: g3, description:"A cute excuse simulator for not going out with friends", stack: "Unity, C#", duration: 0.19, link: "https://lafayenbros.itch.io/generatore-di-scuse-per-non-uscire-con-gli-amici-la-sera"},
]

const design = [
    {title:"Logo designs", image: [blackhorse, caffedellearti, sam, lehibou, magnus, marvanza, friday], description:"Some logos made for bands, associations and businesses", stack: "Photoshop, Illustrator", duration: 0.2},
    {title:"Compositing", image: [hands, fit, leaf, choice, manMiddle, manNowhere, touch], description:"Some compositing work", stack: "Photoshop, Illustrator", duration: 0.21},
]


export default {multimedia, itchGames, web, design};