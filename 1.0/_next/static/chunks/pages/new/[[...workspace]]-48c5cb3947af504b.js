(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[858],{4873:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/new/[[...workspace]]",function(){return a(5790)}])},5790:function(e,s,a){"use strict";a.r(s),a.d(s,{__N_SSG:function(){return u},default:function(){return p}});var l=a(5893),t=a(9008),r=a.n(t),i=a(7294),n=a(3162),o=a(8813),c=a(3157),d=a(1163),m=JSON.parse('{"wZ":[{"description":"Chromium is a free and open-source browser, primarily developed and maintained by Google.","docker_registry":"https://index.docker.io/v1/","image_src":"chromium.png","name":"kasmweb/chromium:develop","run_config":{"hostname":"kasm"},"exec_config":{"go":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --go --url \\"$KASM_URL\\"\'"},"assign":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --assign --url \\"$KASM_URL\\"\'"}},"categories":["Browser"],"friendly_name":"Chromium","architecture":["amd64","arm64"],"compatibility":["1.13.x","1.14.x"],"uncompressed_size_mb":2170,"sha":"365ce0f48ab56c008eb362a1b40e2af8aae793c1"},{"description":"This is a test","docker_registry":"localhost:5000/","image_src":"test.png","name":"test:development","run_config":{"hostname":"kasm"},"exec_config":{"go":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --go --url \\"$KASM_URL\\"\'"},"assign":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --assign --url \\"$KASM_URL\\"\'"}},"categories":["Browser"],"friendly_name":"Test","architecture":["amd64","arm64"],"compatibility":["1.13.x","1.14.x"],"uncompressed_size_mb":2170,"sha":"f00400627e3df02f361a6eab3e755102b9258d42"},{"description":"Wine Workspace","docker_registry":"localhost:5000/","image_src":"wine.png","name":"wine:1","run_config":{"hostname":"kasm"},"exec_config":{"go":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --go --url \\"$KASM_URL\\"\'"},"assign":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --assign --url \\"$KASM_URL\\"\'"}},"categories":["Desktop","Development"],"friendly_name":"Wine","architecture":["amd64","arm64"],"compatibility":["1.13.x","1.14.x"],"uncompressed_size_mb":2170,"sha":"799ee83ed7506def7b391cdbcc21106ca1066429"}]}'),u=!0;function p(e){let{workspace:s}=e,t=(0,i.useRef)(null),u=(0,i.useRef)(null),p=(0,i.useRef)(null),[f,b]=(0,i.useState)(null),[x,g]=(0,i.useState)(null),[v,_]=(0,i.useState)(null),[w,y]=(0,i.useState)("png"),[j,N]=(0,i.useState)(null),k={friendly_name:null,image_src:null,description:null,name:null,cores:2,memory:2768,gpu_count:0,cpu_allocation_method:"Inherit",docker_registry:"https://index.docker.io/v1/",categories:[],require_gpu:!1,enabled:!0,image_type:"Container"},[S,C]=(0,i.useState)(k);(0,d.useRouter)(),(0,i.useEffect)(()=>{if(null===s)p.current.value="",t.current.value="",u.current.value="",b(null),g(null),_(null),C(k);else if(s&&s[0]){let e=m.wZ.find(e=>e.name===atob(s[0]));if(delete e.sha,p.current.value=e.description,t.current.value=e.name,u.current.value=e.friendly_name,e.categories){let a=[];e.categories.map(e=>a.push({label:e,value:e})),b(a)}if(e.architecture){let l=[];e.architecture.map(e=>l.push({label:e,value:e})),g(l)}N("../../icons/"+e.image_src),C({...S,...e})}},[s]);let R={control:(e,s)=>({...e,background:"#f1f5f9",borderRadius:"0.5rem",borderColor:"#94a3b8"}),multiValue(e,s){let{data:a}=s;return{...e,backgroundColor:"#dde6f1"}}};(0,i.useEffect)(()=>{if(S&&S.friendly_name){let e={...S};e.image_src=M(e.friendly_name)+"."+w,C(e)}},[w]);let A=e=>{let s={...S};s.categories=e.map(e=>e.value),C(s);let a=[];s.categories.map(e=>a.push({label:e,value:e})),b(a)},L=e=>{let s={...S};s.architecture=e.map(e=>e.value),C(s);let a=[];s.architecture.map(e=>a.push({label:e,value:e})),g(a)};function M(e){var s=e.toString().toLowerCase();return(s=(s=(s=s.split(/\&+/).join("-and-")).split(/[^a-z0-9]/).join("-")).split(/-+/).join("-")).trim("-")}let O=()=>{var e=a(5733);let s=new e,l=s.folder(S.friendly_name);if(l.file("workspace.json",JSON.stringify(S,null,2)),v)l.file(S.image_src,v.file);else if(j){let t=fetch(j).then(e=>e.blob());l.file(S.image_src,t)}s.generateAsync({type:"blob"}).then(function(e){(0,n.saveAs)(e,M(S.friendly_name)+".zip")})},D=e=>{let s={...S};s[e.target.name]=e.target.value,"icon"===e.target.name&&(delete s.icon,_({value:e.target.value,file:e.target.files[0]}),y(e.target.value.substr(e.target.value.lastIndexOf(".")+1)),N(null)),s.friendly_name&&(s.image_src=M(s.friendly_name)+"."+w),C(s)};return(0,l.jsxs)("div",{className:"",children:[(0,l.jsxs)(r(),{children:[(0,l.jsx)("title",{children:"Kasm Workspaces"}),(0,l.jsx)("meta",{name:"description",content:"List of workspaces for Kasm Webspaces"}),(0,l.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,l.jsxs)("div",{className:"flex flex-col lg:flex-row w-full my-20 max-w-6xl text-sm rounded-xl overflow-hidden mx-auto",children:[(0,l.jsxs)("div",{className:"w-full lg:w-1/2 p-16 bg-slate-300",children:[(0,l.jsx)("h1",{className:"text-2xl font-medium mb-2",children:"Add Workspace"}),(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)("p",{className:"mb-8 opacity-70",children:'This page is designed to allow admins to generate the JSON they need to upload to the "workspaces" directory. It also allows end users to see what settings are needed if they want to manually copy them into a new workspace.'}),(0,l.jsx)("label",{className:"mb-2 font-medium",children:"Icon"}),(0,l.jsx)("input",{type:"file",name:"icon",onChange:D,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,l.jsx)("p",{className:"mb-6 opacity-70",children:"Select the image to use, image will be renamed when it's downloaded."}),(0,l.jsx)("label",{className:"mb-2 font-medium",children:"Friendly Name"}),(0,l.jsx)("input",{ref:u,name:"friendly_name",onChange:D,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,l.jsx)("p",{className:"mb-6 opacity-70",children:"This is the name that will show for users"}),(0,l.jsx)("label",{className:"mb-2 font-medium",children:"Categories"}),(0,l.jsx)(o.Z,{instanceId:"1",name:"categories",isMulti:!0,options:[{value:"Browser",label:"Browser"},{value:"Communication",label:"Communication"},{value:"Desktop",label:"Desktop"},{value:"Development",label:"Development"},{value:"Games",label:"Games"},{value:"Multimedia",label:"Multimedia"},{value:"Office",label:"Office"},{value:"Privacy",label:"Privacy"},{value:"Productivity",label:"Productivity"},{value:"Remote Access",label:"Remote Access"}],onChange:A,styles:R,value:f}),(0,l.jsx)("p",{className:"mb-6 mt-2 opacity-70",children:"You can select from the available option or create new ones."}),(0,l.jsx)("label",{className:"mb-2 font-medium",children:"Description"}),(0,l.jsx)("input",{ref:p,name:"description",onChange:D,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,l.jsx)("p",{className:"mb-6 opacity-70",children:"A short description about the workspace"}),(0,l.jsx)("label",{className:"mb-2 font-medium",children:"Docker Image"}),(0,l.jsx)("input",{ref:t,name:"name",onChange:D,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,l.jsxs)("p",{className:"mb-6 opacity-70",children:["The docker image to use, i.e. ",(0,l.jsx)("code",{className:"text-xs p-1 px-2 rounded bg-white/40",children:"kasmweb/filezilla:develop"})]}),(0,l.jsx)("label",{className:"mb-2 font-medium",children:"Architecture"}),(0,l.jsx)(c.ZP,{instanceId:"2",name:"architecture",isMulti:!0,options:[{value:"amd64",label:"amd64"},{value:"arm64",label:"arm64"}],onChange:L,styles:R,value:x}),(0,l.jsx)("p",{className:"mb-6 mt-2 opacity-70",children:"You can select from the available option or create new ones."})]})]}),(0,l.jsxs)("div",{className:"w-full lg:w-1/2 p-16 bg-slate-100",children:[(0,l.jsx)(h,{workspace:S,icon:v,inlineImage:j}),(0,l.jsx)("pre",{className:"my-8 overflow-y-auto text-xs",children:JSON.stringify({...S},null,2)}),(0,l.jsx)("button",{onClick:O,className:"p-4 relative z-10 px-5 bg-cyan-700 border-t border-white/20 border-solid hover:bg-slate-900 transition m-2 rounded items-center text-white/70 flex cursor-pointer",children:"Download"})]})]})]})}function h(e){let{workspace:s,icon:a,inlineImage:t}=e,[r,n]=(0,i.useState)(!1),o=null;if(a){let c=new Blob([a.file]);o=URL.createObjectURL(c),s.image_src=o}return(0,l.jsx)("div",{className:"rounded-xl group w-full shadow max-w-xs relative overflow-hidden h-[100px] border border-solid flex flex-col justify-between bg-slate-300 border-slate-400/50",children:(0,l.jsxs)("div",{className:"absolute top-0 left-0 right-0 h-[200px] transition-all"+(r?" -translate-y-1/2":""),children:[(0,l.jsxs)("div",{onClick:()=>n(!0),className:"h-[100px] p-4 relative overflow-hidden cursor-pointer",children:[(0,l.jsx)("img",{className:"h-[90px] group-hover:scale-150 transition-all absolute left-2 top-1",src:s.image_src,onError(e){null!==t&&(e.target.src=t)},alt:s.friendly_name}),(0,l.jsxs)("div",{className:"flex-col pl-28",children:[(0,l.jsx)("div",{className:"font-bold",children:s.friendly_name||"Friendly Name"}),(0,l.jsxs)("div",{className:"text-xs mb-2 flex gap-2",children:["Arc Kasm"," ",(0,l.jsx)("span",{children:void 0})]}),(0,l.jsx)("div",{className:" h-8"})]}),(0,l.jsxs)("div",{className:"absolute bottom-0 left-0 right-0 bg-slate-400/20 h-8 text-[10px] flex items-center justify-center",children:[s.architecture&&s.architecture.map((e,s)=>(0,l.jsx)("span",{className:"p-2 py-0 m-[1px] inline-block rounded bg-slate-400/70",children:e},"arch"+s)),s.categories.map((e,s)=>(0,l.jsx)("span",{className:"p-2 py-0 m-[1px] inline-block rounded bg-slate-300/90",children:e},"cat"+s))]}),!1]}),(0,l.jsxs)("div",{className:"h-[100px] text-xs relative p-2 pl-4 flex",children:[(0,l.jsx)("button",{className:"absolute right-2 top-2 bg-slate-100 rounded-full flex justify-center items-center h-6 w-6",onClick:()=>n(!1),children:(0,l.jsx)("svg",{style:{height:"14px"},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:(0,l.jsx)("path",{d:"M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"})})}),(0,l.jsxs)("div",{className:"flex flex-col flex-grow",children:[(0,l.jsx)("div",{className:"font-bold",children:s.friendly_name})," ",s.description]}),(0,l.jsxs)("div",{className:"flex flex-col justify-end gap-1",children:[(0,l.jsx)("div",{className:"text-xs text-color w-full p-4 py-1 rounded-lg bg-black/5 flex justify-center items-center",children:"Edit"}),(0,l.jsx)("button",{className:"text-xs w-full p-4 py-1 rounded-lg flex justify-center items-center bg-blue-500 font-bold text-white",children:"Install"})]})]})]})})}}},function(e){e.O(0,[484,774,888,179],function(){return e(e.s=4873)}),_N_E=e.O()}]);