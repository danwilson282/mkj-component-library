import{r as d,j as e}from"./iframe-D8dPSlhY.js";import{B}from"./Button-X1D7bq4H.js";import{F as N,a as M,b as G}from"./index-DgJ74jya.js";import{$}from"./chain-Cz8Y3ew1.js";import{$ as W}from"./useControlledState-D8eDkNBN.js";import{u as V}from"./index-t3np0WRU.js";import{m as J}from"./chunk-FOPEYBSC-B_sXalZt.js";import{m as q}from"./chunk-NWAOTABO-BQubWdjY.js";import{m as K}from"./chunk-O5MCAK4F-CoMFzEmt.js";import{m as z}from"./chunk-IGSAU2ZA-Dx6_tj4v.js";import{m as A}from"./chunk-UKLRQS27-Bhn2mwL0.js";import{u as H}from"./chunk-S574QCAN-DNK9sUC7.js";import{d as S}from"./chunk-IHO36JMK-CF3NjTlP.js";import{F as R}from"./chunk-GVH3SVCP-BbYMD9oI.js";import{i as T}from"./chunk-SSA7SXE4-L6gSa_nO.js";import{l as Q}from"./chunk-JOT4BT4P-B7yQ0_ZZ.js";import{w as I,u as c,e as s,a as x,s as r}from"./index-B8rGeOOs.js";import"./preload-helper-PPVm8Dsz.js";import"./chunk-WBUKVQRU-B2gShAae.js";import"./chunk-3SAWKTTV-CFFOgZSr.js";import"./index-9NAC_5dS.js";import"./useFocusRing-vXsTo9u9.js";import"./useFocus-B-28nt_B.js";import"./utils-U1MD0fLI.js";import"./useEffectEvent-jkaMIIQr.js";import"./useFocusVisible-C8HhheBG.js";import"./useFocusWithin-BGfq9Bt7.js";import"./useHover-BkGgb2Ov.js";import"./chunk-BDGLNRCW-VYLDRrAS.js";import"./chunk-RJKRL3AU-CzlZidxD.js";import"./chunk-ZQGNWTBN-DEbI5ySm.js";import"./chunk-GQT3YUX3-FQ1U8E7v.js";import"./chunk-TX3FPB7D-IHzdR_VM.js";import"./chunk-UFVD3L5A-Dec1Obts.js";import"./index-_deBX9W8.js";import"./chunk-JGY6VQQQ-CMnhjh4A.js";import"./index-DHDVaMYM.js";import"./mergeProps-BSYFvk6G.js";import"./useId-DkSsBc6l.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-u4jOjUB7.js";import"./runAfterTransition-BqV_gka4.js";import"./context-DgExkpuw.js";import"./useSyncRef-D5EsUszh.js";import"./useFocusable-CefCBu93.js";import"./focusSafely-C0rkqf8u.js";import"./useKeyboard-DSNFmm-f.js";import"./chunk-6VC6TS2O-BXKWa9tQ.js";import"./chunk-MSDKUXDP-CVUhA--x.js";import"./chunk-YFAKJTDR-BpWcW8FW.js";import"./chunk-QHRCZSEO-DQcQewDy.js";import"./proxy-Bgpb2205.js";import"./PresenceContext-CgaSYtSC.js";import"./index-DN8aHlnz.js";import"./is-html-element-DDM1wWmV.js";import"./chunk-YFAKJTDR-_llI_GAI.js";import"./iconBase-Phrrl1p4.js";import"./index-Ca3nUzO9.js";import"./chunk-UX6VCJJD-C2aDG38_.js";import"./chunk-736YWA4T-DCpY4-Mx.js";import"./useDialog-MNtRTbW0.js";import"./useLabels-Cmby6ha2.js";import"./useLocalizedStringFormatter-Be4uBlw7.js";import"./VisuallyHidden-O7B-5GwR.js";import"./Overlay-ud1hFkcg.js";import"./FocusScope-D88eWPww.js";import"./chunk-3JRSRN3Z-yX_gg8fT.js";import"./usePreventScroll-DeZ8mXPa.js";import"./getScrollParent-BL0kfGii.js";import"./isScrollable-BSEN4xi5.js";import"./keyboard-B0W89dhJ.js";import"./ariaHideOutside-BVN3CpZt.js";import"./index-DnQ1E3El.js";import"./useOverlayTriggerState-B8a5Zest.js";import"./chunk-DPUNBZPN-DTs7b9Xr.js";import"./chunk-25E6VDTZ-DXEpn9I8.js";import"./chunk-JUJ53SJZ-rGpqvvFv.js";import"./index-ff2kdsIU.js";import"./chunk-ICU6NNET-C25JlTbB.js";import"./useFormValidationState-DMLPjoD5.js";import"./chunk-B74GOECG-BMBCxFmC.js";import"./chunk-FPAGUVYU-Ck3XHCJV.js";import"./useTextField-CJkyKK_5.js";import"./useFormReset-BQHdTzQ8.js";import"./useField-BHnpH8sk.js";import"./useLabel-ChexJ59P.js";import"./useFormValidation-BdcoGG0N.js";import"./chunk-M3MASYO7-B8MX85OA.js";import"./index-DrFu-skq.js";function U(t={}){const{id:a,defaultOpen:i,isOpen:o,onClose:n,onOpen:m,onChange:h=()=>{}}=t,f=V(m),y=V(n),[g,k]=W(o,i||!1,h),L=d.useId(),l=a||L,b=o!==void 0,O=d.useCallback(()=>{b||k(!1),y?.()},[b,y]),P=d.useCallback(()=>{b||k(!0),f?.()},[b,f]),F=d.useCallback(()=>{(g?O:P)()},[g,P,O]);return{isOpen:!!g,onOpen:P,onClose:O,onOpenChange:F,isControlled:b,getButtonProps:(v={})=>({...v,"aria-expanded":g,"aria-controls":l,onClick:$(v.onClick,F)}),getDisclosureProps:(v={})=>({...v,hidden:!g,id:l})}}const _=({user:t,useCredentials:a,useEmail:i,useGoogle:o,signOut:n,registerPage:m})=>{const{isOpen:h,onOpen:f,onOpenChange:y}=U(),[g,k]=d.useState(!1),L=l=>{l.preventDefault(),k(!0),i?.handleEmailSubmit(l)};return t?e.jsxs("div",{className:"flex flex-row gap-8",children:[e.jsx(H,{avatarProps:{src:t.image,showFallback:!0,name:t.name},name:t.name}),e.jsx(B,{onClick:n.handleSignOut,variant:"bordered",colour:"primary",children:n.label})]}):e.jsxs(e.Fragment,{children:[e.jsx(B,{onClick:f,colour:"primary",children:"Login"}),e.jsx(A,{isDismissable:!1,isKeyboardDismissDisabled:!0,isOpen:h,onOpenChange:y,children:e.jsx(q,{children:e.jsxs(e.Fragment,{children:[e.jsx(z,{className:"flex flex-col gap-1",children:"Choose your sign in method"}),e.jsxs(J,{children:[e.jsx(S,{className:"my-4"}),g?e.jsx("p",{children:"Check your email for a magic link."}):e.jsxs(e.Fragment,{children:[i&&e.jsxs(e.Fragment,{children:[e.jsxs(R,{className:"w-full",onSubmit:L,children:[e.jsx("div",{className:"font-semibold text-small uppercase",children:i.title}),e.jsx(T,{isRequired:!0,errorMessage:"Please enter a valid email",label:"Email",labelPlacement:"outside",name:"email",placeholder:"Enter your email",type:"email",value:i.email,onChange:l=>i.setEmail(l.target.value)}),e.jsxs(B,{className:"w-full",type:"submit",colour:"primary",children:[e.jsx(N,{}),i.label]})]}),e.jsx(S,{className:"my-4"})]}),a&&e.jsxs(e.Fragment,{children:[e.jsxs(R,{className:"w-full",onSubmit:a.handleCredentialsSubmit,children:[e.jsx("div",{className:"font-semibold text-small uppercase",children:a.title}),e.jsx(T,{isRequired:!0,errorMessage:"Please enter a valid email",label:"Email",labelPlacement:"outside",name:"email",placeholder:"Enter your email",type:"email",value:a.email,onChange:l=>a.setEmail(l.target.value)}),e.jsx(T,{isRequired:!0,errorMessage:"Password",label:"Password",labelPlacement:"outside",name:"password",placeholder:"Enter your password",type:"password",value:a.password,onChange:l=>a.setPassword(l.target.value)}),e.jsxs(B,{className:"w-full",type:"submit",colour:"primary",children:[e.jsx(M,{}),a.label]})]}),e.jsx(S,{className:"my-4"})]}),o&&e.jsxs(e.Fragment,{children:[e.jsxs(R,{className:"w-full",onSubmit:o.handleGoogleSubmit,children:[e.jsx("div",{className:"font-semibold text-small uppercase",children:o.title}),e.jsxs(B,{className:"w-full",type:"submit",colour:"primary",children:[e.jsx(G,{}),o.label]})]}),e.jsx(S,{className:"my-4"})]})]})]}),e.jsx(K,{children:e.jsx("div",{children:e.jsx(Q,{href:m.url,children:m.label})})})]})})})]})};_.__docgenInfo={description:"",methods:[],displayName:"LoginButton"};const Pt={title:"Components/LoginButton",component:_,tags:["autodocs"],argTypes:{}};let u="";const w=async t=>{u=t},p={args:{signOut:{label:"Sign out",handleSignOut:()=>w("signOut")},registerPage:{url:"/",label:"Register link"}}},E={args:{...p.args,user:{name:"Joe Bloggs",email:"any@oldjoe.com",image:"https://i.pravatar.cc/150?u=a04258114e29026702d"}},play:async({canvasElement:t,args:a})=>{u="";const o=await I(t).getByRole("button",{name:/Sign out/i});await c.click(o),s(u).toBe("signOut")}},j={args:{...p.args,useGoogle:{title:"Sign in with Google",label:"Continue with Google",handleGoogleSubmit:async t=>(t.preventDefault(),w("google"))}},play:async({canvasElement:t,args:a})=>{u="";const o=await I(t).getByRole("button",{name:/Login/i});await c.click(o),await x(()=>{s(r.getByRole("dialog")).toBeInTheDocument()});const n=await r.findByRole("button",{name:/Continue with Google/i});s(n).toBeInTheDocument(),await c.click(n),s(u).toBe("google")}},C={decorators:[t=>{const[a,i]=d.useState("");return e.jsx(t,{args:{...p.args,useEmail:{title:"Magic Link",label:"Send Magic Link",email:a,setEmail:i,handleEmailSubmit:async o=>{o.preventDefault(),await w("email")}}}})}],args:{...p.args,useEmail:{title:"Magic Link",label:"Send Magic Link",email:"",setEmail:t=>{const a=typeof t=="function"?t(""):t;console.log("Set email to:",a)},handleEmailSubmit:()=>w("email")}},play:async({canvasElement:t,args:a})=>{u="";const o=await I(t).getByRole("button",{name:/Login/i});await c.click(o),await x(()=>{s(r.getByRole("dialog")).toBeInTheDocument()});const n=await r.findByRole("button",{name:/Send magic link/i});s(n).toBeInTheDocument(),await c.click(n),await x(()=>{s(r.getByText("Please enter a valid email")).toBeInTheDocument()});const m=await r.findByLabelText(/Email/i);await c.type(m,"test@example.com"),await c.click(n),await x(()=>{s(r.getByText(/Check your email for a magic link/i)).toBeInTheDocument()}),s(u).toBe("email")}},D={decorators:[t=>{const[a,i]=d.useState(""),[o,n]=d.useState("");return e.jsx(t,{args:{...p.args,useCredentials:{title:"Sign in with Email",label:"Login",email:a,setEmail:i,password:o,setPassword:n,handleCredentialsSubmit:async m=>{m.preventDefault(),await w("credentials")}}}})}],args:{...p.args,useCredentials:{title:"Sign in with Email",label:"Login",email:"",password:"",setEmail:t=>{const a=typeof t=="function"?t(""):t;console.log("Set email to:",a)},setPassword:t=>{const a=typeof t=="function"?t(""):t;console.log("Set password to:",a)},handleCredentialsSubmit:()=>w("credentials")}},play:async({canvasElement:t,args:a})=>{u="";const o=await I(t).getByRole("button",{name:/Login/i});await c.click(o),await x(()=>{s(r.getByRole("dialog")).toBeInTheDocument()});const n=await r.findByRole("button",{name:/Login/i});s(n).toBeInTheDocument();const m=await r.findByLabelText(/Email/i),h=await r.findByLabelText(/Password/i);await c.type(m,"test@example.com"),await c.type(h,"password"),await c.click(n),s(u).toBe("credentials")}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    // user: {
    //   name: "Joe Bloggs",
    //   email: "any@oldjoe.com",
    //   image: "https://i.pravatar.cc/150?u=a04258114e29026702d"
    // },
    signOut: {
      label: "Sign out",
      handleSignOut: () => mockOnClick("signOut")
    },
    registerPage: {
      url: "/",
      label: "Register link"
    }
  }
}`,...p.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    // ✅ merge the default props
    user: {
      name: "Joe Bloggs",
      email: "any@oldjoe.com",
      image: "https://i.pravatar.cc/150?u=a04258114e29026702d"
    }
  },
  play: async ({
    canvasElement,
    args
  }) => {
    clickVal = "";
    const canvas = within(canvasElement); // ✅ wrap with 'within'
    const button = await canvas.getByRole('button', {
      name: /Sign out/i
    });
    await userEvent.click(button);
    expect(clickVal).toBe("signOut");
  }
}`,...E.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    // ✅ merge the default props
    useGoogle: {
      title: "Sign in with Google",
      label: "Continue with Google",
      handleGoogleSubmit: async (e: any) => {
        e.preventDefault(); // ✅ Prevent form submission
        return mockOnClick("google");
      }
    }
  },
  play: async ({
    canvasElement,
    args
  }) => {
    clickVal = "";
    const canvas = within(canvasElement); // ✅ wrap with 'within'
    const loginButton = await canvas.getByRole('button', {
      name: /Login/i
    });
    await userEvent.click(loginButton);
    await waitFor(() => {
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
    const providerButton = await screen.findByRole('button', {
      name: /Continue with Google/i
    });
    expect(providerButton).toBeInTheDocument();
    await userEvent.click(providerButton);
    expect(clickVal).toBe("google");
  }
}`,...j.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  decorators: [Story => {
    const [email, setEmail] = useState("");
    return <Story args={{
      ...Default.args,
      useEmail: {
        title: "Magic Link",
        label: "Send Magic Link",
        email: email,
        setEmail: setEmail,
        handleEmailSubmit: async (e: any) => {
          e.preventDefault();
          await mockOnClick("email"); // ✅ Just call it directly
        }
      }
    }} />;
  }],
  args: {
    ...Default.args,
    useEmail: {
      title: "Magic Link",
      label: "Send Magic Link",
      email: "",
      setEmail: val => {
        const newVal = typeof val === "function" ? val("") : val;
        console.log("Set email to:", newVal);
      },
      handleEmailSubmit: () => mockOnClick("email")
    }
  },
  play: async ({
    canvasElement,
    args
  }) => {
    clickVal = "";
    const canvas = within(canvasElement); // ✅ wrap with 'within'
    const loginButton = await canvas.getByRole('button', {
      name: /Login/i
    });
    await userEvent.click(loginButton);
    await waitFor(() => {
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
    const providerButton = await screen.findByRole('button', {
      name: /Send magic link/i
    });
    expect(providerButton).toBeInTheDocument();
    await userEvent.click(providerButton);
    await waitFor(() => {
      expect(screen.getByText("Please enter a valid email")).toBeInTheDocument();
    });
    const emailInput = await screen.findByLabelText(/Email/i);
    await userEvent.type(emailInput, 'test@example.com');
    await userEvent.click(providerButton);

    // ✅ Check the success message appears
    await waitFor(() => {
      expect(screen.getByText(/Check your email for a magic link/i)).toBeInTheDocument();
    });
    expect(clickVal).toBe("email");
    // expect(clickVal).toBe("email");
  }
}`,...C.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  decorators: [Story => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return <Story args={{
      ...Default.args,
      useCredentials: {
        title: "Sign in with Email",
        label: "Login",
        email: email,
        setEmail: setEmail,
        password: password,
        setPassword: setPassword,
        handleCredentialsSubmit: async (e: any) => {
          e.preventDefault();
          await mockOnClick("credentials"); // ✅ Just call it directly
        }
      }
    }} />;
  }],
  args: {
    ...Default.args,
    useCredentials: {
      title: "Sign in with Email",
      label: "Login",
      email: "",
      password: "",
      setEmail: val => {
        const newVal = typeof val === "function" ? val("") : val;
        console.log("Set email to:", newVal);
      },
      setPassword: val => {
        const newVal = typeof val === "function" ? val("") : val;
        console.log("Set password to:", newVal);
      },
      handleCredentialsSubmit: () => mockOnClick("credentials")
    }
  },
  play: async ({
    canvasElement,
    args
  }) => {
    clickVal = "";
    const canvas = within(canvasElement); // ✅ wrap with 'within'
    const loginButton = await canvas.getByRole('button', {
      name: /Login/i
    });
    await userEvent.click(loginButton);
    await waitFor(() => {
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
    const providerButton = await screen.findByRole('button', {
      name: /Login/i
    });
    expect(providerButton).toBeInTheDocument();
    const emailInput = await screen.findByLabelText(/Email/i);
    const passwordInput = await screen.findByLabelText(/Password/i);
    await userEvent.type(emailInput, 'test@example.com');
    await userEvent.type(passwordInput, 'password');
    await userEvent.click(providerButton);
    expect(clickVal).toBe("credentials");
  }
}`,...D.parameters?.docs?.source}}};const Rt=["Default","SignedIn","WithGoogle","WithEmail","WithCredentials"];export{p as Default,E as SignedIn,D as WithCredentials,C as WithEmail,j as WithGoogle,Rt as __namedExportsOrder,Pt as default};
