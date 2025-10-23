function t(r){return null}t.getCollectionNode=function*(e){let{children:l}=e,o=e.textValue||(typeof l=="string"?l:"")||e["aria-label"]||"";yield{type:"cell",props:e,rendered:l,textValue:o,"aria-label":e["aria-label"],hasChildNodes:!1}};let n=t;var c=n,d=c;const s={title:"HeroUI/TableCell",component:d},a={args:{}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...a.parameters?.docs?.source}}};const i=["Default"];export{a as Default,i as __namedExportsOrder,s as default};
