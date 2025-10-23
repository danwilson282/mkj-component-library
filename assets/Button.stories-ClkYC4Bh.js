import{B as a}from"./Button-X1D7bq4H.js";import{w as m,u as p,e}from"./index-B8rGeOOs.js";import"./iframe-D8dPSlhY.js";import"./preload-helper-PPVm8Dsz.js";import"./chunk-WBUKVQRU-B2gShAae.js";import"./chunk-3SAWKTTV-CFFOgZSr.js";import"./index-9NAC_5dS.js";import"./useFocusRing-vXsTo9u9.js";import"./useFocus-B-28nt_B.js";import"./utils-U1MD0fLI.js";import"./useEffectEvent-jkaMIIQr.js";import"./useFocusVisible-C8HhheBG.js";import"./useFocusWithin-BGfq9Bt7.js";import"./useHover-BkGgb2Ov.js";import"./chunk-BDGLNRCW-VYLDRrAS.js";import"./chunk-RJKRL3AU-CzlZidxD.js";import"./chunk-ZQGNWTBN-DEbI5ySm.js";import"./chunk-GQT3YUX3-FQ1U8E7v.js";import"./chunk-TX3FPB7D-IHzdR_VM.js";import"./chunk-UFVD3L5A-Dec1Obts.js";import"./index-_deBX9W8.js";import"./chunk-JGY6VQQQ-CMnhjh4A.js";import"./index-DHDVaMYM.js";import"./mergeProps-BSYFvk6G.js";import"./chain-Cz8Y3ew1.js";import"./useId-DkSsBc6l.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-u4jOjUB7.js";import"./runAfterTransition-BqV_gka4.js";import"./context-DgExkpuw.js";import"./useSyncRef-D5EsUszh.js";import"./useFocusable-CefCBu93.js";import"./focusSafely-C0rkqf8u.js";import"./useKeyboard-DSNFmm-f.js";import"./chunk-6VC6TS2O-BXKWa9tQ.js";import"./chunk-MSDKUXDP-CVUhA--x.js";import"./chunk-YFAKJTDR-BpWcW8FW.js";import"./chunk-QHRCZSEO-DQcQewDy.js";import"./proxy-Bgpb2205.js";import"./PresenceContext-CgaSYtSC.js";import"./index-DN8aHlnz.js";import"./is-html-element-DDM1wWmV.js";import"./chunk-YFAKJTDR-_llI_GAI.js";import"./index-DrFu-skq.js";const to={title:"Components/Button",component:a,tags:["autodocs"],argTypes:{label:{control:"text"},colour:{control:{type:"radio"},options:["primary","success","warning","danger"]},variant:{control:{type:"radio"},options:["solid","bordered","faded","light","ghost","shadow"]},isLoading:{control:"boolean"},size:{control:{type:"radio"},options:["sm","md","lg"]}}};let t=0;const n=()=>{t++},o={args:{label:"Click me",colour:"primary",variant:"solid",isLoading:!1,size:"sm",onClick:n},play:async({canvasElement:i,args:s})=>{t=0;const r=await m(i).getByRole("button",{name:/click me/i});await p.click(r),e(t).toBe(1)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Click me",
    "colour": "primary",
    "variant": "solid",
    "isLoading": false,
    "size": "sm",
    onClick: mockOnClick
  },
  play: async ({
    canvasElement,
    args
  }) => {
    clickCount = 0;
    const canvas = within(canvasElement); // ✅ wrap with 'within'
    const button = await canvas.getByRole('button', {
      name: /click me/i
    });
    await userEvent.click(button);
    expect(clickCount).toBe(1);
  }
}`,...o.parameters?.docs?.source}}};const io=["Default"];export{o as Default,io as __namedExportsOrder,to as default};
