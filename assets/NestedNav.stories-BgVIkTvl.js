import{r as h,j as e}from"./iframe-D8dPSlhY.js";import{G as o}from"./iconBase-Phrrl1p4.js";import"./preload-helper-PPVm8Dsz.js";function k(t){return o({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"},child:[]}]})(t)}function j(t){return o({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"},child:[]}]})(t)}function v(t){return o({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"},child:[]}]})(t)}function p(t){return o({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"},child:[]}]})(t)}const b=({menuTitle:t,navItems:g})=>{const[n,i]=h.useState(!1),[x,m]=h.useState({}),f=l=>{m(a=>({...a,[l]:!a[l]}))},d=(l,a=0)=>{const s=l.children&&l.children.length>0,u=x[l.id];return e.jsxs("div",{className:"w-full",children:[e.jsxs("div",{className:`flex items-center justify-between px-4 py-3 hover:bg-gray-100 cursor-pointer transition-colors ${a>0?"pl-"+(4+a*4):""}`,onClick:()=>s?f(l.id):i(!1),style:{paddingLeft:`${1+a*1}rem`},children:[e.jsx("a",{href:l.link||"#",className:"flex-1 text-gray-800 hover:text-blue-600 transition-colors",onClick:c=>!s&&c.stopPropagation(),children:l.label}),s&&e.jsx("span",{className:"text-gray-500",children:u?e.jsx(k,{size:20}):e.jsx(j,{size:20})})]}),s&&u&&e.jsx("div",{className:"bg-gray-50",children:l.children.map(c=>d(c,a+1))})]},l.id)};return e.jsxs("div",{children:[e.jsx("button",{onClick:()=>i(!n),className:"p-2 rounded-lg hover:bg-gray-100 transition-colors","aria-label":"Toggle menu",children:n?e.jsx(p,{size:28}):e.jsx(v,{size:28})}),n&&e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity",onClick:()=>i(!1)}),e.jsxs("nav",{className:`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${n?"translate-x-0":"translate-x-full"}`,children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b",children:[e.jsx("h2",{className:"text-xl font-semibold text-gray-800",children:t}),e.jsx("button",{onClick:()=>i(!1),className:"p-2 rounded-lg hover:bg-gray-100 transition-colors","aria-label":"Close menu",children:e.jsx(p,{size:24})})]}),e.jsx("div",{className:"overflow-y-auto h-full pb-20",children:g.map(l=>d(l))})]})]})};b.__docgenInfo={description:"",methods:[],displayName:"NestedNav"};const z={title:"Components/NestedNav",component:b,tags:["autodocs"],argTypes:{}},r={args:{menuTitle:"Menu",navItems:[{id:"1",label:"Home",link:"#home"},{id:"2",label:"Products",children:[{id:"21",label:"Electronics",link:"#electronics"},{id:"22",label:"Clothing",link:"#clothing"},{id:"23",label:"Home & Garden",children:[{id:"231",label:"Furniture",link:"#furniture"},{id:"232",label:"Decor",link:"#decor"},{id:"233",label:"Garden Tools",link:"#garden"}]}]},{id:"3",label:"Services",children:[{id:"31",label:"Consulting",link:"#consulting"},{id:"32",label:"Support",link:"#support"}]},{id:"4",label:"About",link:"#about"},{id:"5",label:"Contact",link:"#contact"}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    menuTitle: "Menu",
    navItems: [{
      id: "1",
      label: 'Home',
      link: '#home'
    }, {
      id: "2",
      label: 'Products',
      children: [{
        id: "21",
        label: 'Electronics',
        link: '#electronics'
      }, {
        id: "22",
        label: 'Clothing',
        link: '#clothing'
      }, {
        id: "23",
        label: 'Home & Garden',
        children: [{
          id: "231",
          label: 'Furniture',
          link: '#furniture'
        }, {
          id: "232",
          label: 'Decor',
          link: '#decor'
        }, {
          id: "233",
          label: 'Garden Tools',
          link: '#garden'
        }]
      }]
    }, {
      id: "3",
      label: 'Services',
      children: [{
        id: "31",
        label: 'Consulting',
        link: '#consulting'
      }, {
        id: "32",
        label: 'Support',
        link: '#support'
      }]
    }, {
      id: "4",
      label: 'About',
      link: '#about'
    }, {
      id: "5",
      label: 'Contact',
      link: '#contact'
    }]
  }
}`,...r.parameters?.docs?.source}}};const w=["Default"];export{r as Default,w as __namedExportsOrder,z as default};
