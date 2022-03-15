(this.webpackJsonpcovid19italia=this.webpackJsonpcovid19italia||[]).push([[0],{15:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a(1),c=a.n(i),r=a(5),s=a.n(r),o=a(2);function d(){return Object(n.jsxs)("div",{className:"jumbotron text-center",children:[Object(n.jsx)("h1",{className:"display-4",children:"Covid-19 Italia"}),Object(n.jsxs)("p",{className:"lead",children:["Strumento online open source per monitorare giorno per giorno il numero dei contagiati di"," ",Object(n.jsx)("a",{href:"https://it.wikipedia.org/wiki/COVID-19",children:"COVID-19"})," in Italia."]}),Object(n.jsx)("hr",{className:"my-4"}),Object(n.jsxs)("p",{children:["Web App di ",Object(n.jsx)("a",{href:"http://rosarioterranova.com",children:"Rosario Terranova"})," | Dati Ufficiali"," ",Object(n.jsx)("a",{href:"https://github.com/pcm-dpc/COVID-19",children:"Presidenza del Consiglio dei Ministri - Dipartimento della Protezione Civile"})," ","| Grafici di ",Object(n.jsx)("a",{href:"https://www.chartjs.org/",children:"ChartJS"}),", fatta in"," ",Object(n.jsx)("a",{href:"https://reactjs.org/",children:"React.js"})]})]})}var j=a(6),l=a.n(j);function b(e){var t=e.covidData,a=Object(i.useRef)(null);return Object(i.useEffect)((function(){!function(e){var a=e.getContext("2d");new l.a(a,{type:"line",data:{labels:t.map((function(e){return new Date(e.data).toLocaleDateString(["ban","id"])})),datasets:[{label:"Contagiati",data:t.map((function(e){return e.nuovi_positivi})),backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})}(a.current)}),[a]),Object(n.jsx)("div",{className:"chart my-3",children:Object(n.jsx)("canvas",{ref:a})})}var h=a(4),u=a.n(h);function O(e){var t=e.onPrevPage,a=e.onNextPage,i=e.prevEnabled,c=e.nextEnabled,r=e.pageIndex,s=e.totalPages;return Object(n.jsxs)("div",{className:u.a.pagination,children:[Object(n.jsxs)("button",{className:"btn btn-primary",onClick:t,disabled:!i,children:["<"," Pagina Precedente"]}),Object(n.jsxs)("p",{className:u.a.info,children:["Pagina ",r," di ",s]}),Object(n.jsxs)("button",{className:"btn btn-primary",onClick:a,disabled:!c,children:["Pagina Successiva ",">"]})]})}function p(e){var t=e.covidData,a=Object(i.useState)(t.filter((function(e){return new Date(e.data).getTime()>new Date("2020-06-01").getTime()})).reverse()),c=Object(o.a)(a,2),r=c[0],s=(c[1],Object(i.useState)(0)),d=Object(o.a)(s,2),j=d[0],l=d[1],b=Object(i.useState)(!0),h=Object(o.a)(b,2),u=h[0],p=h[1],x=Object(i.useState)(!1),g=Object(o.a)(x,2),f=g[0],v=g[1];return Object(i.useEffect)((function(){0===j?(p(!0),v(!1)):j+10>r.length?(p(!1),v(!0)):(p(!0),v(!0))}),[j]),Object(n.jsxs)("div",{children:[Object(n.jsxs)("table",{className:"table my-3",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"col",children:"Data"}),Object(n.jsx)("th",{scope:"col",children:"Nuovi Positivi"}),Object(n.jsx)("th",{scope:"col",children:"Deceduti Totali"}),Object(n.jsx)("th",{scope:"col",children:"Tamponi Totali"})]})}),Object(n.jsx)("tbody",{children:r.slice(j,j+10).map((function(e,t){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"row",children:new Date(e.data).toLocaleDateString()}),Object(n.jsx)("td",{children:e.nuovi_positivi}),Object(n.jsx)("td",{children:e.deceduti}),Object(n.jsx)("td",{children:e.tamponi})]},t)}))})]}),Object(n.jsx)(O,{onPrevPage:function(){l(j-10)},onNextPage:function(){l(j+10)},prevEnabled:f,nextEnabled:u,pageIndex:j/10+1,totalPages:Math.ceil(r.length/10)})]})}function x(){return Object(n.jsxs)("div",{className:"text-center",children:[Object(n.jsx)("div",{className:"spinner-border",role:"status"}),Object(n.jsx)("p",{children:"Caricamento dati"})]})}var g=a(7),f=a.n(g);var v=function(){var e=Object(i.useState)(null),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(i.useEffect)((function(){fetch("https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json").then((function(e){return e.json()})).then((function(e){return c(e)}))}),[]),a?Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(d,{}),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(b,{covidData:a}),Object(n.jsx)(p,{covidData:a})]})]}):Object(n.jsx)("div",{className:f.a.loading,children:Object(n.jsx)(x,{})})};s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(v,{})}),document.getElementById("root"))},4:function(e,t,a){e.exports={pagination:"Pagination_pagination__oueBy",info:"Pagination_info__Spwpe"}},7:function(e,t,a){e.exports={loading:"App_loading__2FxFh"}}},[[15,1,2]]]);
//# sourceMappingURL=main.fc85c761.chunk.js.map