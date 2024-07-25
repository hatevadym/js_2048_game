function t(t){return t&&t.__esModule?t.default:t}var e={};class s{static STATUS={idle:"idle",playing:"playing",win:"win",lose:"lose"};constructor(t=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]){this.status=s.STATUS.idle,this.initialState=t,this.state=t.map(t=>[...t]),this.score=0}start(){this.status=s.STATUS.playing,this.getRandomCells(),this.getRandomCells()}getRandomCells(){let t=[];for(let e=0;e<4;e++)for(let s=0;s<4;s++)0===this.state[e][s]&&t.push([e,s]);if(t.length>0){let[e,s]=t[Math.floor(Math.random()*t.length)];this.state[e][s]=.9>Math.random()?2:4}}checkGameStatus(){let t=!1,e=!1;for(let a=0;a<4;a++)for(let i=0;i<4;i++){if(2048===this.state[a][i]){this.status=s.STATUS.win;return}0===this.state[a][i]&&(e=!0),(a<3&&this.state[a][i]===this.state[a+1][i]||i<3&&this.state[a][i]===this.state[a][i+1])&&(t=!0)}t||e||(this.status=s.STATUS.lose)}moveLeft(){if(this.status===s.STATUS.playing){let t=!1;for(let e=0;e<4;e++){let s=[];for(let t=0;t<4;t++)0!==this.state[e][t]&&s.push(this.state[e][t]);for(let e=0;e<s.length;e++)s[e]===s[e+1]&&(s[e]*=2,s[e+1]=0,this.score+=s[e],t=!0);let a=s.filter(t=>0!==t);for(;a.length<4;)a.push(0);for(let s=0;s<4;s++)this.state[e][s]!==a[s]&&(this.state[e][s]=a[s],t=!0)}t&&(this.getRandomCells(),this.checkGameStatus())}}moveRight(){if(this.status===s.STATUS.playing){let t=!1;for(let e=0;e<4;e++){let s=[];for(let t=3;t>=0;t--)0!==this.state[e][t]&&s.push(this.state[e][t]);for(let e=0;e<s.length;e++)s[e]===s[e+1]&&(s[e]*=2,s[e+1]=0,this.score+=s[e],t=!0);let a=s.filter(t=>0!==t);for(;a.length<4;)a.push(0);for(let s=0;s<4;s++)this.state[e][s]!==a[3-s]&&(this.state[e][s]=a[3-s],t=!0)}t&&(this.getRandomCells(),this.checkGameStatus())}}moveUp(){if(this.status===s.STATUS.playing){let t=!1;for(let e=0;e<4;e++){let s=[];for(let t=0;t<4;t++)0!==this.state[t][e]&&s.push(this.state[t][e]);for(let e=0;e<s.length;e++)s[e]===s[e+1]&&(s[e]*=2,s[e+1]=0,this.score+=s[e],t=!0);let a=s.filter(t=>0!==t);for(;a.length<4;)a.push(0);for(let s=0;s<4;s++)this.state[s][e]!==a[s]&&(this.state[s][e]=a[s],t=!0)}t&&(this.getRandomCells(),this.checkGameStatus())}}moveDown(){if(this.status===s.STATUS.playing){let t=!1;for(let e=0;e<4;e++){let s=[];for(let t=3;t>=0;t--)0!==this.state[t][e]&&s.push(this.state[t][e]);for(let e=0;e<s.length;e++)s[e]===s[e+1]&&(s[e]*=2,s[e+1]=0,this.score+=s[e],t=!0);let a=s.filter(t=>0!==t);for(;a.length<4;)a.push(0);for(let s=0;s<4;s++)this.state[s][e]!==a[3-s]&&(this.state[s][e]=a[3-s],t=!0)}t&&(this.getRandomCells(),this.checkGameStatus())}}restart(){this.status=s.STATUS.idle,this.state=this.initialState.map(t=>[...t]),this.score=0}getScore(){return this.score}getState(){return this.state}getStatus(){return this.status}}const a=new(t(e=s)),i=document.querySelector(".start"),l=document.querySelector(".game-field"),r=document.querySelector(".game-score"),o=document.querySelector(".message-start"),h=document.querySelector(".message-lose"),n=document.querySelector(".message-win");function c(){l.innerHTML="";let t=a.getState();for(let e=0;e<4;e++){let s=document.createElement("tr");for(let a=0;a<4;a++){let i=document.createElement("td"),l=t[e][a];i.textContent=0!==l?l:"",i.classList.add("field-cell"),0!==l&&i.classList.add(`field-cell--${l}`),s.appendChild(i)}l.appendChild(s)}}function d(){r.textContent=a.getScore()}function u(){a.getStatus()===t(e).STATUS.win?n.classList.remove("hidden"):a.getStatus()===t(e).STATUS.lose&&h.classList.remove("hidden")}i.addEventListener("click",()=>{i.classList.contains("start")?(a.start(),i.classList.remove("start"),i.classList.add("restart"),i.textContent="Restart",o.classList.add("hidden"),h.classList.add("hidden"),n.classList.add("hidden")):i.classList.contains("restart")&&(a.restart(),i.classList.remove("restart"),i.classList.add("start"),i.textContent="Start",o.classList.add("hidden"),h.classList.add("hidden"),n.classList.add("hidden")),c(),d()}),document.addEventListener("keyup",t=>{switch(t.key){case"ArrowRight":a.moveRight();break;case"ArrowLeft":a.moveLeft();break;case"ArrowUp":a.moveUp();break;case"ArrowDown":a.moveDown()}c(),d(),u()}),c(),d(),u();
//# sourceMappingURL=index.57195f81.js.map
