const tiles = [
  {id:"porcelain",type:"porcelain",name:"Glossy Porcelain Tile",short:"Smooth, shiny finish for modern interiors.",
   description:"Our Glossy Porcelain Tile is made from high-density clay fired at extreme temperatures, giving it a hard, scratch-resistant surface with a mirror-like shine.",
   specs:{Size:"600 x 600 mm",Thickness:"10 mm",Finish:"Glossy","Water Absorption":"Less than 0.5%",Usage:"Living rooms, bedrooms, offices"},
   features:["Scratch and stain resistant","Very low water absorption","Easy to clean and maintain","Long lasting shine"],price:"Rs. 120 / sq. ft."},
  {id:"ceramic",type:"ceramic",name:"Matte Ceramic Tile",short:"Soft matte texture with a natural look.",
   description:"Our Matte Ceramic Tile offers an elegant, non-reflective surface that hides dust and footprints, perfect for kitchens and bathrooms.",
   specs:{Size:"300 x 600 mm",Thickness:"8 mm",Finish:"Matte","Water Absorption":"Less than 3%",Usage:"Kitchens, bathrooms, walls"},
   features:["Anti-glare surface","Hides dust and marks","Heat resistant","Wide range of designs"],price:"Rs. 95 / sq. ft."},
  {id:"outdoor",type:"outdoor",name:"Heavy-Duty Outdoor Tile",short:"Anti-slip and built for harsh weather.",
   description:"Our Heavy-Duty Outdoor Tile is designed for patios, driveways and garages. Its rough anti-slip surface can handle heavy loads and extreme weather.",
   specs:{Size:"400 x 400 mm",Thickness:"20 mm",Finish:"Anti-slip textured","Water Absorption":"Less than 0.5%",Usage:"Patios, driveways, garages, pool sides"},
   features:["High load-bearing strength","Frost and UV resistant","Anti-slip surface","Very low maintenance"],price:"Rs. 180 / sq. ft."},
  {id:"wood",type:"wood",cat:"Indoor",name:"Rustic Wood-Look Tile",short:"Warm timber look with tile toughness.",
   description:"Get the cozy look of natural hardwood without scratches, termites or polishing. Our Rustic Wood-Look Tile suits living rooms, bedrooms and cafes.",
   specs:{Size:"200 x 1200 mm",Thickness:"9 mm",Finish:"Wood-textured matte","Water Absorption":"Less than 0.5%",Usage:"Living rooms, bedrooms, cafes"},
   features:["Realistic wood grain","Termite and scratch proof","Warm and slip-safe underfoot","Works with underfloor heating"],price:"Rs. 150 / sq. ft."},
  {id:"hexagon",type:"hexagon",cat:"Decorative",name:"Honeycomb Hexagon Tile",short:"Bold colorful hexagons for feature walls.",
   description:"Six-sided and full of personality, our Honeycomb Hexagon Tiles create a playful geometric pattern for backsplashes, accent walls and entrances.",
   specs:{Size:"200 x 230 mm",Thickness:"8 mm",Finish:"Glazed gloss","Water Absorption":"Less than 3%",Usage:"Kitchen backsplash, accent walls"},
   features:["Mix and match colors","Easy to wipe clean","Fade resistant glaze","Creates a bold focal point"],price:"Rs. 210 / sq. ft."},
  {id:"moroccan",type:"moroccan",cat:"Decorative",name:"Moroccan Zellige Tile",short:"Star patterns inspired by Moroccan art.",
   description:"Inspired by centuries-old Moroccan craft, this tile features an eight-point star in deep blue and cream with golden centers. A true showpiece for floors and walls.",
   specs:{Size:"200 x 200 mm",Thickness:"9 mm",Finish:"Satin glazed","Water Absorption":"Less than 3%",Usage:"Lobbies, bathrooms, courtyards"},
   features:["Hand-inspired star motif","Rich, lasting colors","Great for feature floors","Timeless heritage style"],price:"Rs. 240 / sq. ft."},
  {id:"marble",type:"marble",cat:"Luxury",name:"Black Marble Luxe Tile",short:"Deep black stone with golden veins.",
   description:"Dramatic and refined, our Black Marble Luxe Tile pairs a deep midnight surface with shimmering gold veining. Made for hotels, showrooms and premium homes.",
   specs:{Size:"800 x 800 mm",Thickness:"11 mm",Finish:"High gloss polished","Water Absorption":"Less than 0.5%",Usage:"Hotels, showrooms, luxury homes"},
   features:["Mirror-like polish","Gold vein detailing","Stain resistant","Premium large format"],price:"Rs. 320 / sq. ft."},
  {id:"mosaic",type:"mosaic",cat:"Decorative",name:"Aqua Mosaic Tile",short:"Shimmering blue mosaic for pools and baths.",
   description:"Hundreds of tiny glossy squares in shades of ocean blue make our Aqua Mosaic Tile ideal for swimming pools, spas and bathroom feature walls.",
   specs:{Size:"300 x 300 mm",Thickness:"6 mm",Finish:"Glossy glass-like","Water Absorption":"Less than 0.5%",Usage:"Pools, bathrooms, feature walls"},
   features:["Pool and spa safe","Shimmering color blend","Flexible sheet install","Resists chlorine and algae"],price:"Rs. 175 / sq. ft."},
  {id:"terrazzo",type:"terrazzo",cat:"Decorative",name:"Terrazzo Speckle Tile",short:"Modern speckled chips in warm colors.",
   description:"A contemporary take on classic Italian terrazzo, with colorful stone-like chips scattered across a soft cream base. Great for cafes, studios and modern homes.",
   specs:{Size:"600 x 600 mm",Thickness:"10 mm",Finish:"Honed matte","Water Absorption":"Less than 0.5%",Usage:"Cafes, studios, living areas"},
   features:["Trendy speckled look","Hides everyday marks","Durable and easy to maintain","Pairs with any decor"],price:"Rs. 190 / sq. ft."},
  {id:"calacatta",type:"calacatta",cat:"Luxury",name:"Calacatta Gold Marble Tile",short:"Bright white stone with bold golden veins.",
   description:"Inspired by the legendary Italian quarries, our Calacatta Gold Tile pairs a pure white surface with dramatic gold and grey veining. A statement for grand living rooms and lobbies.",
   specs:{Size:"800 x 1600 mm",Thickness:"12 mm",Finish:"High gloss polished","Water Absorption":"Less than 0.5%",Usage:"Living rooms, lobbies, feature walls"},
   features:["Bold gold veining","Extra-large slab format","Mirror-like polish","Stain and scratch resistant"],price:"Rs. 480 / sq. ft."},
  {id:"onyx",type:"onyx",cat:"Luxury",name:"Emerald Onyx Tile",short:"Rich green swirls with a glowing depth.",
   description:"Deep emerald waves ripple across the Emerald Onyx Tile like polished gemstone. Perfect for spa bathrooms, bar fronts and luxury accent walls.",
   specs:{Size:"600 x 1200 mm",Thickness:"11 mm",Finish:"Glass-like gloss","Water Absorption":"Less than 0.5%",Usage:"Spa bathrooms, bars, accent walls"},
   features:["Gemstone-like color depth","Unique flowing patterns","Moisture resistant","Easy to maintain"],price:"Rs. 560 / sq. ft."},
  {id:"deco",type:"deco",cat:"Luxury",name:"Art Deco Gold Fan Tile",short:"Black and gold scalloped Gatsby pattern.",
   description:"Glamorous 1920s style meets modern durability. The Art Deco Gold Fan Tile features layered golden arcs on a jet-black base, ideal for hotel lobbies, bars and boutique bathrooms.",
   specs:{Size:"300 x 300 mm",Thickness:"9 mm",Finish:"Satin with metallic accents","Water Absorption":"Less than 0.5%",Usage:"Hotel lobbies, bars, boutique spaces"},
   features:["Metallic gold inlay look","Iconic scalloped fan design","Dramatic high contrast","Durable for commercial use"],price:"Rs. 390 / sq. ft."},
  {id:"quartz",type:"quartz",cat:"Luxury",name:"Midnight Sapphire Quartz Tile",short:"Sparkling deep blue with gold inlay.",
   description:"A starry night captured in tile form. Midnight Sapphire Quartz sparkles with tiny crystal flecks and golden grout lines, creating a truly premium floor or wall.",
   specs:{Size:"800 x 800 mm",Thickness:"11 mm",Finish:"Polished sparkle","Water Absorption":"Less than 0.5%",Usage:"Showrooms, living rooms, feature walls"},
   features:["Crystal sparkle effect","Gold inlay look","Deep, rich color","Premium large format"],price:"Rs. 450 / sq. ft."}
];
tiles.forEach(t=>t.cat=t.cat||{porcelain:"Indoor",ceramic:"Indoor",outdoor:"Outdoor"}[t.id]);

// ===== OPTIONAL: your own real photos / videos (put files in images/ and videos/) =====
// Example:  porcelain:{image:"images/porcelain.jpg",video:"videos/porcelain.mp4"},
const MEDIA={
};
tiles.forEach(t=>{const m=MEDIA[t.id]||{};t.imageUrl=m.image||"";t.videoUrl=m.video||""});

function rng(s){return()=>{s=(s*16807)%2147483647;return(s-1)/2147483646}}

const EXTRA={
  wood(g,r){const cols=["#8b5a2b","#9c6b3a","#7a4e24","#a97b4a","#86552b"];
    for(let row=0;row<5;row++){const y=row*200;let x=-r()*300;
      while(x<1000){const w=400+r()*400;g.fillStyle=cols[Math.floor(r()*5)];g.fillRect(x+2,y+2,w-4,196);
        g.strokeStyle="rgba(40,20,5,.25)";g.lineWidth=1.5;
        for(let k=0;k<14;k++){const yy=y+8+r()*184;g.beginPath();g.moveTo(x+4,yy);g.bezierCurveTo(x+w*.3,yy+(r()-.5)*14,x+w*.7,yy+(r()-.5)*14,x+w-4,yy+(r()-.5)*8);g.stroke()}
        x+=w}}},
  hexagon(g,r){g.fillStyle="#2b3a42";g.fillRect(0,0,1000,1000);const s=62,hw=Math.sqrt(3)*s,cols=["#e9c46a","#f4a261","#2a9d8f","#e76f51","#f1faee","#264653"];
    for(let row=-1;row<16;row++)for(let col=-1;col<14;col++){const cx=col*hw+(row%2?hw/2:0),cy=row*s*1.5;
      g.beginPath();for(let i=0;i<6;i++){const a=Math.PI/3*i+Math.PI/6;g.lineTo(cx+(s-4)*Math.cos(a),cy+(s-4)*Math.sin(a))}
      g.closePath();g.fillStyle=cols[Math.floor(r()*cols.length)];g.fill()}},
  moroccan(g){const s=125;
    for(let i=0;i<8;i++)for(let j=0;j<8;j++){const x=i*s,y=j*s,cx=x+s/2,cy=y+s/2,dark=(i+j)%2;
      g.fillStyle=dark?"#1d4e89":"#f4efe6";g.fillRect(x,y,s,s);g.fillStyle=dark?"#f4efe6":"#1d4e89";
      g.beginPath();for(let k=0;k<16;k++){const a=Math.PI/8*k,d=k%2?22:52;g.lineTo(cx+d*Math.cos(a),cy+d*Math.sin(a))}g.closePath();g.fill();
      g.fillStyle="#d4af37";g.beginPath();g.arc(cx,cy,10,0,7);g.fill();
      g.strokeStyle="rgba(0,0,0,.25)";g.lineWidth=2;g.strokeRect(x+1,y+1,s-2,s-2)}},
  marble(g,r){const gr=g.createLinearGradient(0,0,1000,1000);gr.addColorStop(0,"#15161a");gr.addColorStop(1,"#2a2b31");g.fillStyle=gr;g.fillRect(0,0,1000,1000);
    for(let v=0;v<14;v++){g.strokeStyle=`rgba(${r()>.4?"212,175,55":"230,230,235"},${.25+r()*.5})`;g.lineWidth=.6+r()*2.4;g.beginPath();let x=r()*1000,y=0;g.moveTo(x,y);
      for(let k=0;k<10;k++){x+=(r()-.5)*160;y+=100+r()*30;g.lineTo(x,y)}g.stroke()}
    g.strokeStyle="#8a6d1b";g.lineWidth=5;g.beginPath();g.moveTo(500,0);g.lineTo(500,1000);g.moveTo(0,500);g.lineTo(1000,500);g.stroke()},
  mosaic(g,r){g.fillStyle="#e8edf0";g.fillRect(0,0,1000,1000);const cols=["#00b4d8","#0077b6","#90e0ef","#48cae4","#ade8f4","#023e8a","#caf0f8"];
    for(let i=0;i<25;i++)for(let j=0;j<25;j++){g.fillStyle=cols[Math.floor(r()*cols.length)];g.fillRect(i*40+1.5,j*40+1.5,37,37);g.fillStyle="rgba(255,255,255,.25)";g.fillRect(i*40+3,j*40+3,14,6)}},
  terrazzo(g,r){g.fillStyle="#efe9e1";g.fillRect(0,0,1000,1000);const cols=["#c8553d","#2f6f73","#e0a458","#3d405b","#8a9a5b","#b08968"];
    for(let n=0;n<260;n++){g.fillStyle=cols[Math.floor(r()*cols.length)];const x=r()*1000,y=r()*1000,s=8+r()*34,m=5+Math.floor(r()*3);
      g.beginPath();for(let k=0;k<m;k++){const a=Math.PI*2*k/m+r()*.5,d=s*(.6+r()*.4);g.lineTo(x+d*Math.cos(a),y+d*Math.sin(a))}g.closePath();g.fill()}}
};
Object.assign(EXTRA,{
  calacatta(g,r){g.fillStyle="#f7f5f2";g.fillRect(0,0,1000,1000);
    for(let n=0;n<40;n++){g.fillStyle=`rgba(190,185,180,${.04+r()*.06})`;g.beginPath();g.arc(r()*1000,r()*1000,60+r()*140,0,7);g.fill()}
    for(let v=0;v<7;v++){const gold=v%2===0;g.strokeStyle=gold?`rgba(184,140,50,${.5+r()*.4})`:`rgba(90,90,95,${.35+r()*.4})`;g.lineWidth=gold?3+r()*6:1+r()*2;g.beginPath();let x=r()*1000,y=-20;g.moveTo(x,y);
      for(let k=0;k<9;k++){x+=(r()-.5)*220;y+=120+r()*30;g.lineTo(x,y)}g.stroke()}
    g.strokeStyle="#cfc9c0";g.lineWidth=4;g.beginPath();g.moveTo(500,0);g.lineTo(500,1000);g.moveTo(0,500);g.lineTo(1000,500);g.stroke()},
  onyx(g,r){const gr=g.createLinearGradient(0,0,1000,0);gr.addColorStop(0,"#0b3d2e");gr.addColorStop(.5,"#1f8a5f");gr.addColorStop(1,"#0b3d2e");g.fillStyle=gr;g.fillRect(0,0,1000,1000);
    for(let b=0;b<26;b++){g.strokeStyle=`rgba(${r()>.5?"200,255,225":"5,40,28"},${.1+r()*.25})`;g.lineWidth=4+r()*22;g.beginPath();
      const y0=r()*1000,a=30+r()*90,f=.004+r()*.008,p=r()*6;
      for(let x=0;x<=1000;x+=10){const y=y0+a*Math.sin(x*f+p)+40*Math.sin(x*f*2.3);if(x)g.lineTo(x,y);else g.moveTo(x,y)}g.stroke()}
    g.strokeStyle="#d4af37";g.lineWidth=4;g.strokeRect(2,2,996,996)},
  deco(g){g.fillStyle="#111218";g.fillRect(0,0,1000,1000);const s=100;g.lineWidth=3;
    for(let row=-1;row<22;row++)for(let col=-1;col<11;col++){const cx=col*s+(row%2?s/2:0),cy=row*s/2+s/2;
      for(let k=1;k<=3;k++){g.strokeStyle=k===3?"#d4af37":k===2?"#b8932f":"#8a6d1b";g.beginPath();g.arc(cx,cy,k*s/6,Math.PI,0);g.stroke()}}},
  quartz(g,r){const gr=g.createLinearGradient(0,0,1000,1000);gr.addColorStop(0,"#0a1a3a");gr.addColorStop(1,"#1c3f7a");g.fillStyle=gr;g.fillRect(0,0,1000,1000);
    for(let n=0;n<2600;n++){const b=r()>.9;g.fillStyle=b?`rgba(255,255,255,${.5+r()*.5})`:`rgba(160,190,255,${r()*.35})`;const s=b?2+r()*3:1+r()*2;g.fillRect(r()*1000,r()*1000,s,s)}
    g.strokeStyle="rgba(212,175,55,.8)";g.lineWidth=5;g.beginPath();g.moveTo(500,0);g.lineTo(500,1000);g.moveTo(0,500);g.lineTo(1000,500);g.stroke()}
});
function makeBase(type){
  const c=document.createElement("canvas");c.width=c.height=1000;
  const g=c.getContext("2d"),r=rng(type.length*977+13);
  if(EXTRA[type]){EXTRA[type](g,rng(type.charCodeAt(0)*7919+type.length));return c}
  if(type==="porcelain"){
    g.fillStyle="#c9c9c9";g.fillRect(0,0,1000,1000);const s=250;
    for(let i=0;i<4;i++)for(let j=0;j<4;j++){
      const x=i*s,y=j*s;g.save();g.beginPath();g.rect(x+3,y+3,s-6,s-6);g.clip();
      const gr=g.createLinearGradient(x,y,x+s,y+s);gr.addColorStop(0,"#faf8f5");gr.addColorStop(1,"#e6e2dc");
      g.fillStyle=gr;g.fillRect(x,y,s,s);
      for(let v=0;v<4;v++){
        g.strokeStyle=`rgba(110,110,120,${.12+r()*.25})`;g.lineWidth=.6+r()*2;g.beginPath();
        g.moveTo(x+r()*s,y);g.bezierCurveTo(x+r()*s,y+s*.3,x+r()*s,y+s*.6,x+r()*s,y+s);g.stroke();
      }
      g.restore();
    }
  }else if(type==="ceramic"){
    g.fillStyle="#e9e6df";g.fillRect(0,0,1000,1000);
    const w=200,h=100,cols=["#6f9486","#78a091","#648a7c","#82a89a","#6b8f83"];
    for(let row=0;row<10;row++)for(let col=-1;col<6;col++){
      g.fillStyle=cols[Math.floor(r()*cols.length)];
      g.fillRect(col*w+(row%2?w/2:0)+4,row*h+4,w-8,h-8);
    }
    for(let n=0;n<9000;n++){
      g.fillStyle=`rgba(255,255,255,${r()*.07})`;g.fillRect(r()*1000,r()*1000,2,2);
      g.fillStyle=`rgba(0,0,0,${r()*.07})`;g.fillRect(r()*1000,r()*1000,2,2);
    }
  }else{
    g.fillStyle="#2f3237";g.fillRect(0,0,1000,1000);const s=333;
    for(let i=0;i<3;i++)for(let j=0;j<3;j++){
      const x=i*s,y=j*s;g.fillStyle="#666b72";g.fillRect(x+8,y+8,s-16,s-16);
      g.strokeStyle="rgba(0,0,0,.18)";g.lineWidth=3;
      for(let k=16;k<s-8;k+=20){g.beginPath();g.moveTo(x+8,y+k);g.lineTo(x+s-8,y+k);g.stroke()}
    }
    for(let n=0;n<14000;n++){
      g.fillStyle=r()>.5?`rgba(255,255,255,${r()*.25})`:`rgba(0,0,0,${r()*.3})`;
      g.fillRect(r()*1000,r()*1000,2+r()*2,2+r()*2);
    }
  }
  return c;
}
const bases={};
const getBase=t=>bases[t]||(bases[t]=makeBase(t));

function renderFrame(ctx,type,t,w,h){
  const z=1.1+.1*Math.sin(t*.8),sw=700/z,sh=700*h/w/z;
  ctx.drawImage(getBase(type),150+100*Math.sin(t*.5),200+80*Math.cos(t*.4),sw,sh,0,0,w,h);
  if(["porcelain","marble","calacatta","onyx","quartz"].includes(type)){
    const x=(((t*.35)%1.6)-.3)*w,gr=ctx.createLinearGradient(x-150,0,x+150,h*.4);
    gr.addColorStop(0,"rgba(255,255,255,0)");gr.addColorStop(.5,"rgba(255,255,255,.5)");gr.addColorStop(1,"rgba(255,255,255,0)");
    ctx.fillStyle=gr;ctx.fillRect(0,0,w,h);
  }
}
const pics={};
function getPicture(tile){
  if(!pics[tile.type]){
    const c=document.createElement("canvas");c.width=800;c.height=600;
    renderFrame(c.getContext("2d"),tile.type,1.2,800,600);
    pics[tile.type]=c.toDataURL("image/jpeg",.92);
  }
  return pics[tile.type];
}

// Home cards
const cardsEl=document.getElementById("cards");
tiles.forEach(tile=>{
  const card=document.createElement("article");card.className="card";
  card.innerHTML=`<div class="card-media"><img alt="${tile.name}"><span class="tag">${tile.cat}</span><button class="fav" title="Add to wishlist">&#9825;</button><label class="cmp"><input type="checkbox">Compare</label><span class="badge">&#9654; Playing video</span></div>
    <div class="card-body"><h3>${tile.name}</h3><p>${tile.short}</p><div class="meta"><b>${tile.price}</b><span>${tile.specs.Finish}</span></div></div>`;
  const media=card.querySelector(".card-media");
  const im=media.querySelector("img");im.onerror=()=>{im.onerror=null;im.src=getPicture(tile)};im.src=tile.imageUrl||getPicture(tile);
  const canvas=document.createElement("canvas");canvas.width=800;canvas.height=600;
  const ctx=canvas.getContext("2d");renderFrame(ctx,tile.type,1.2,800,600);media.appendChild(canvas);
  let video=null;
  if(tile.videoUrl){video=document.createElement("video");video.src=tile.videoUrl;video.muted=true;video.loop=true;video.playsInline=true;video.preload="metadata";video.onerror=()=>{video.remove();video=null};media.appendChild(video)}
  let running=false,start=0;
  const loop=now=>{if(!running)return;renderFrame(ctx,tile.type,(now-start)/1000+1.2,800,600);requestAnimationFrame(loop)};
  const play=()=>{if(video)video.play().catch(()=>{});if(!running){running=true;start=performance.now();requestAnimationFrame(loop)}};
  card.addEventListener("mouseenter",play);
  card.addEventListener("mousemove",e=>{const b=card.getBoundingClientRect();card.style.setProperty("--mx",e.clientX-b.left+"px");card.style.setProperty("--my",e.clientY-b.top+"px");card.style.setProperty("--ry",((e.clientX-b.left)/b.width-.5)*10+"deg");card.style.setProperty("--rx",-((e.clientY-b.top)/b.height-.5)*10+"deg")});
  card.addEventListener("touchstart",play,{passive:true});
  card.addEventListener("mouseleave",()=>{running=false;if(video){video.pause();video.currentTime=0}card.style.setProperty("--rx","0deg");card.style.setProperty("--ry","0deg")});
  card.addEventListener("click",()=>{location.hash=tile.id});
  card.dataset.id=tile.id;card.dataset.cat=tile.cat;card.dataset.q=(tile.name+" "+tile.short+" "+tile.cat).toLowerCase();
  cardsEl.appendChild(card);
});

// View switching (home / details)
const home=document.getElementById("home"),dv=document.getElementById("detailsView"),det=document.getElementById("details");
function route(){
  const id=location.hash.replace("#",""),tile=tiles.find(t=>t.id===id);
  if(!tile){document.querySelector(".site-header").hidden=false;home.hidden=false;dv.hidden=true;document.title="TerraForte | Premium Tiles";window.scrollTo(0,0);return}
  document.title=tile.name+" | TerraForte";
  det.innerHTML=`<div class="zoom"><img alt="${tile.name}" src="${tile.imageUrl||getPicture(tile)}" onerror="this.onerror=null;this.src=getPicture(byId('${tile.id}'))"></div>
    <div><h2>${tile.name}</h2><p class="desc">${tile.description}</p>
    <table class="specs">${Object.entries(tile.specs).map(([k,v])=>`<tr><th>${k}</th><td>${v}</td></tr>`).join("")}</table>
    <h3>Key Features</h3><ul class="features">${tile.features.map(f=>`<li>${f}</li>`).join("")}</ul>
    <p class="price">${tile.price}</p>
    <div class="calc"><label for="area">Estimate your project (area in sq. ft.)</label><input id="area" type="number" min="1" value="200"><p class="calc-out" id="calcOut"></p><button class="btn" id="quoteBtn" type="button">Request a Quote</button><button class="btn alt" type="button" onclick="window.print()">Print Spec Sheet</button></div>
    <div class="chips">Also see: ${[...tiles.slice(tiles.indexOf(tile)+1),...tiles.slice(0,tiles.indexOf(tile))].slice(0,3).map(t=>`<button class="chip" onclick="location.hash='${t.id}'">${t.name}</button>`).join("")}</div></div>`;
  document.querySelector(".site-header").hidden=true;home.hidden=true;dv.hidden=false;window.scrollTo(0,0);
  const rate=+tile.price.match(/\d+/)[0],[sw,sh]=tile.specs.Size.match(/\d+/g),per=sw*sh/92903.04;
  const ai=document.getElementById("area"),out=document.getElementById("calcOut");
  const calc=()=>{const a=Math.max(0,+ai.value||0);out.innerHTML=`<b>${Math.ceil(a*1.1/per)}</b> tiles needed (incl. 10% extra)<br>Estimated cost: <b>Rs. ${(a*rate).toLocaleString()}</b>`};
  ai.oninput=calc;calc();
  const zi=det.querySelector(".zoom img");zi.onmousemove=e=>{const b=zi.getBoundingClientRect();zi.style.transformOrigin=((e.clientX-b.left)/b.width*100)+"% "+((e.clientY-b.top)/b.height*100)+"%";zi.style.transform="scale(1.9)"};zi.onmouseleave=()=>{zi.style.transform="scale(1)"};
  document.getElementById("quoteBtn").onclick=()=>{document.getElementById("cTile").value=tile.name;go("contact")};
}
window.addEventListener("hashchange",route);

function go(id){
  if(location.hash&&location.hash!=="#home"){location.hash="home";setTimeout(()=>document.getElementById(id).scrollIntoView({behavior:"smooth"}),150)}
  else document.getElementById(id).scrollIntoView({behavior:"smooth"});
}
document.querySelectorAll("[data-go]").forEach(b=>b.onclick=()=>go(b.dataset.go));

// Category filters + search
let activeCat="All";
const filtersEl=document.getElementById("filters"),searchEl=document.getElementById("search"),emptyEl=document.getElementById("empty");
function applyFilter(){
  const q=searchEl.value.trim().toLowerCase();let n=0;
  cardsEl.querySelectorAll(".card").forEach(c=>{const ok=(activeCat==="All"||(activeCat==="Wishlist"?favs.includes(c.dataset.id):c.dataset.cat===activeCat))&&c.dataset.q.includes(q);c.hidden=!ok;if(ok)n++});
  emptyEl.hidden=n>0;
}
["All",...new Set(tiles.map(t=>t.cat))].forEach(c=>{
  const b=document.createElement("button");b.className="chip"+(c==="All"?" on":"");b.textContent=c;
  b.onclick=()=>{activeCat=c;filtersEl.querySelectorAll(".chip").forEach(x=>x.classList.toggle("on",x===b));applyFilter()};
  filtersEl.appendChild(b);
});
searchEl.oninput=applyFilter;
document.getElementById("sortSel").onchange=e=>{const m=+e.target.value,pr=t=>+t.price.match(/\d+/)[0];const ord=[...tiles].sort((a,b)=>m===1?pr(a)-pr(b):m===2?pr(b)-pr(a):m===3?a.name.localeCompare(b.name):0);cardsEl.querySelectorAll(".card").forEach(c=>{c.style.order=m?ord.findIndex(t=>t.id===c.dataset.id):0})};

// Wishlist + compare (saved in localStorage)
const byId=id=>tiles.find(t=>t.id===id);
const store={get(k){try{return JSON.parse(localStorage.getItem(k))||[]}catch(e){return[]}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
let favs=store.get("tf_favs").filter(byId),cmp=store.get("tf_cmp").filter(byId).slice(0,3);
const tray=document.getElementById("tray"),modal=document.getElementById("cmpModal"),toastEl=document.getElementById("toast");
function toast(m){toastEl.textContent=m;toastEl.classList.add("show");clearTimeout(toast.t);toast.t=setTimeout(()=>toastEl.classList.remove("show"),2200)}
function sync(){
  store.set("tf_favs",favs);store.set("tf_cmp",cmp);
  document.getElementById("favCount").textContent=favs.length;
  cardsEl.querySelectorAll(".card").forEach(c=>{const f=favs.includes(c.dataset.id),h=c.querySelector(".fav");h.classList.toggle("on",f);h.innerHTML=f?"&#9829;":"&#9825;";c.querySelector(".cmp input").checked=cmp.includes(c.dataset.id)});
  tray.hidden=!cmp.length;
  tray.innerHTML=`<b>Compare (${cmp.length}/3)</b>`+cmp.map(id=>`<span class="chipx"><img src="${getPicture(byId(id))}" alt="">${byId(id).name}<button data-rm="${id}" aria-label="Remove">&times;</button></span>`).join("")+`<button class="btn sm" id="goCmp"${cmp.length<2?" disabled":""}>Compare Now</button><button class="chip" id="clrCmp">Clear</button>`;
  if(activeCat==="Wishlist")applyFilter();
}
cardsEl.addEventListener("click",e=>{
  const c=e.target.closest(".card");if(!c)return;
  if(e.target.closest(".fav")){e.stopPropagation();const id=c.dataset.id;favs=favs.includes(id)?favs.filter(x=>x!==id):[...favs,id];toast(favs.includes(id)?"Added to wishlist":"Removed from wishlist");sync()}
  else if(e.target.closest(".cmp"))e.stopPropagation();
},true);
cardsEl.addEventListener("change",e=>{
  const id=e.target.closest(".card").dataset.id;
  if(e.target.checked){if(cmp.length>=3){e.target.checked=false;return toast("You can compare up to 3 tiles")}cmp.push(id)}else cmp=cmp.filter(x=>x!==id);
  sync();
});
tray.addEventListener("click",e=>{
  const rm=e.target.closest("[data-rm]");
  if(rm){cmp=cmp.filter(x=>x!==rm.dataset.rm);sync()}
  else if(e.target.id==="clrCmp"){cmp=[];sync()}
  else if(e.target.id==="goCmp")openCmp();
});
function openCmp(){
  const ts=cmp.map(byId),keys=["Category",...Object.keys(ts[0].specs)];
  modal.innerHTML=`<div class="mbox"><button class="mx" id="mClose" aria-label="Close">&times;</button><h2>Compare Tiles</h2><div class="mscroll"><table class="ctab"><tr><th></th>${ts.map(t=>`<td><img src="${getPicture(t)}" alt="${t.name}"><b>${t.name}</b><span class="cp">${t.price}</span></td>`).join("")}</tr>${keys.map(k=>`<tr><th>${k}</th>${ts.map(t=>`<td>${k==="Category"?t.cat:t.specs[k]}</td>`).join("")}</tr>`).join("")}<tr><th></th>${ts.map(t=>`<td><button class="btn sm" data-view="${t.id}">View Details</button></td>`).join("")}</tr></table></div></div>`;
  modal.hidden=false;
}
modal.addEventListener("click",e=>{
  const v=e.target.closest("[data-view]");
  if(v){modal.hidden=true;location.hash=v.dataset.view}
  else if(e.target===modal||e.target.id==="mClose")modal.hidden=true;
});
addEventListener("keydown",e=>{if(e.key==="Escape")modal.hidden=true});
const wb=document.createElement("button");wb.className="chip";wb.innerHTML="&#9829; Wishlist";
wb.onclick=()=>{activeCat="Wishlist";filtersEl.querySelectorAll(".chip").forEach(x=>x.classList.toggle("on",x===wb));applyFilter()};
filtersEl.appendChild(wb);
document.getElementById("favBtn").addEventListener("click",()=>wb.click());
sync();

// Project gallery: before/after slider (illustrative scenes)
const projects=[{n:"Living Room Floor",tile:"calacatta",area:"floor"},{n:"Bathroom Feature Wall",tile:"onyx",area:"wall"},{n:"Entrance Hall",tile:"moroccan",area:"floor"},{n:"Kitchen Splashback",tile:"hexagon",area:"wall"}];
function scene(p,after){
  const c=document.createElement("canvas");c.width=1000;c.height=560;const g=c.getContext("2d"),r=rng(11),base=getBase(p.tile);
  const tileIt=(y0,y1)=>{g.save();g.beginPath();g.rect(0,y0,1000,y1-y0);g.clip();for(let y=y0;y<y1;y+=250)for(let x=0;x<1000;x+=250)g.drawImage(base,0,0,500,500,x,y,250,250);g.restore()};
  const dull=(y0,y1,col)=>{g.fillStyle=col;g.fillRect(0,y0,1000,y1-y0);for(let n=0;n<5000;n++){g.fillStyle=`rgba(${r()>.5?"255,255,255":"0,0,0"},${r()*.09})`;g.fillRect(r()*1000,y0+r()*(y1-y0),2,2)}};
  const wallT=after&&p.area==="wall",floorT=after&&p.area==="floor";
  if(wallT)tileIt(0,330);else dull(0,330,after?"#e6e1d8":"#a9a49a");
  if(floorT)tileIt(330,560);else dull(330,560,after?"#9a8f82":"#7b7b7b");
  if(!after){g.strokeStyle="rgba(30,25,20,.55)";g.lineWidth=1.5;for(let k=0;k<6;k++){g.beginPath();let x=r()*1000,y=r()>.5?r()*330:330+r()*230;g.moveTo(x,y);for(let s=0;s<6;s++){x+=(r()-.5)*70;y+=r()*40;g.lineTo(x,y)}g.stroke()}
    g.fillStyle="rgba(60,50,40,.18)";for(let k=0;k<5;k++){g.beginPath();g.arc(r()*1000,r()*330,30+r()*60,0,7);g.fill()}}
  g.fillStyle=after?"#f3f0ea":"#6b655c";g.fillRect(0,322,1000,10);
  const lg=g.createLinearGradient(0,0,1000,0);lg.addColorStop(0,"rgba(255,240,200,.3)");lg.addColorStop(1,"rgba(0,0,0,.4)");g.fillStyle=lg;g.fillRect(0,0,1000,560);
  const fg=g.createLinearGradient(0,330,0,560);fg.addColorStop(0,"rgba(0,0,0,.35)");fg.addColorStop(1,"transparent");g.fillStyle=fg;g.fillRect(0,330,1000,230);
  return c.toDataURL("image/jpeg",.9);
}
const baAfter=document.getElementById("baAfter"),baBeforeImg=document.getElementById("baBeforeImg"),baBefore=document.getElementById("baBefore"),baLine=document.getElementById("baLine"),baRange=document.getElementById("baRange"),baCap=document.getElementById("baCap"),gTabs=document.getElementById("gTabs");
const setBA=v=>{baBefore.style.clipPath=`inset(0 ${100-v}% 0 0)`;baLine.style.left=v+"%"};
function showProj(i){
  const p=projects[i];baAfter.src=scene(p,true);baBeforeImg.src=scene(p,false);
  baCap.textContent=`${p.n} with ${byId(p.tile).name}. Drag the slider to compare. (Illustration, replace with your real project photos.)`;
  [...gTabs.children].forEach((b,k)=>b.classList.toggle("on",k===i));
  let v=5;baRange.value=v;setBA(v);const t=setInterval(()=>{v+=3;baRange.value=v;setBA(v);if(v>=50)clearInterval(t)},16);
}
projects.forEach((p,i)=>{const b=document.createElement("button");b.className="chip";b.textContent=p.n;b.onclick=()=>showProj(i);gTabs.appendChild(b)});
baRange.oninput=()=>setBA(+baRange.value);
showProj(0);

// Tile Finder quiz
const QZ=[{q:"Where will you use the tile?",k:"room",o:[["Living room or bedroom","living"],["Bathroom or kitchen","wet"],["Outdoor area","outdoor"],["Hotel, office or shop","commercial"]]},{q:"What style do you love?",k:"style",o:[["Modern and minimal","modern"],["Warm and classic","classic"],["Bold and colorful","bold"],["Luxurious","luxury"]]},{q:"What is your budget per sq. ft.?",k:"budget",o:[["Under Rs. 150","1"],["Rs. 150 to 250","2"],["Above Rs. 250","3"]]}];
const TAGS={porcelain:"living,commercial|modern,classic",ceramic:"wet,living|classic,modern",outdoor:"outdoor,commercial|modern",wood:"living|classic",hexagon:"wet|bold,modern",moroccan:"commercial,wet|bold,classic",marble:"living,commercial|luxury,modern",mosaic:"wet,outdoor|bold",terrazzo:"living,commercial|modern,bold",calacatta:"living,commercial|luxury,classic",onyx:"wet,commercial|luxury,bold",deco:"commercial,living|luxury,bold",quartz:"living,commercial|luxury,modern"};
const quiz=document.getElementById("quiz");let qi=0,ans={};
function score(t){const [rm,st]=TAGS[t.id].split("|"),p=+t.price.match(/\d+/)[0],b=p<150?1:p<=250?2:3;return(rm.split(",").includes(ans.room)?40:0)+(st.split(",").includes(ans.style)?35:0)+(b===+ans.budget?25:Math.abs(b-ans.budget)===1?10:0)}
function renderQuiz(){
  if(qi<QZ.length){const z=QZ[qi];quiz.innerHTML=`<div class="qbar"><i style="width:${qi/QZ.length*100}%"></i></div><p class="qstep">Question ${qi+1} of ${QZ.length}</p><h3>${z.q}</h3><div class="qopts">${z.o.map(o=>`<button data-v="${o[1]}">${o[0]}</button>`).join("")}</div>`;return}
  const res=tiles.map(t=>({t,s:score(t)})).sort((a,b)=>b.s-a.s).slice(0,3);
  quiz.innerHTML=`<div class="qbar"><i style="width:100%"></i></div><h3>Your top matches</h3><div class="qres">${res.map(({t,s})=>`<div class="qcard" data-id="${t.id}"><img src="${getPicture(t)}" alt=""><b>${t.name}</b><span>${t.price}</span><div class="mbar"><i data-w="${s}"></i></div><em>${s}% match</em></div>`).join("")}</div><button class="btn sm" id="qAgain">Retake Quiz</button>`;
  setTimeout(()=>quiz.querySelectorAll(".mbar i").forEach(i=>{i.style.width=i.dataset.w+"%"}),80);
}
quiz.onclick=e=>{const o=e.target.closest(".qopts button");if(o){ans[QZ[qi].k]=o.dataset.v;qi++;renderQuiz();return}const c=e.target.closest(".qcard");if(c){location.hash=c.dataset.id;return}if(e.target.id==="qAgain"){qi=0;ans={};renderQuiz()}};
renderQuiz();

// Theme toggle
const tb=document.getElementById("themeBtn"),root=document.documentElement;
const cur=()=>root.dataset.theme||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");
const setT=t=>{root.dataset.theme=t;tb.innerHTML=t==="dark"?"&#9728;":"&#9790;"};
setT(cur());tb.onclick=()=>setT(cur()==="dark"?"light":"dark");

// Scroll reveal + animated counters
const rio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");rio.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>rio.observe(el));
const cio=new IntersectionObserver(es=>es.forEach(e=>{
  if(!e.isIntersecting)return;cio.unobserve(e.target);
  const n=+e.target.dataset.n,t0=performance.now();
  (function f(now){const p=Math.min((now-t0)/1500,1);e.target.textContent=Math.floor(n*p);if(p<1)requestAnimationFrame(f)})(t0);
}));
document.querySelectorAll("[data-n]").forEach(el=>cio.observe(el));

// Quote form with validation
const sel=document.getElementById("cTile"),cName=document.getElementById("cName"),cPhone=document.getElementById("cPhone"),okMsg=document.getElementById("formOk");
sel.innerHTML=tiles.map(t=>`<option>${t.name}</option>`).join("");
document.getElementById("quoteForm").onsubmit=e=>{
  e.preventDefault();
  const n=cName.value.trim(),good1=n.length>=2,good2=cPhone.value.replace(/\D/g,"").length>=10;
  cName.nextElementSibling.textContent=good1?"":"Please enter your name";
  cPhone.nextElementSibling.textContent=good2?"":"Enter a valid phone number (10+ digits)";
  okMsg.hidden=!(good1&&good2);
  if(good1&&good2){okMsg.textContent=`Thank you, ${n}! We’ll contact you soon about the ${sel.value}.`;e.target.reset();confetti()}
};

// Hero tile collage, marquee, scroll progress
// ===== EDIT THESE with TerraForte's real details =====
const WA_NUMBER="923000000000"; // country code + number, no + or spaces
const SOCIAL=[
  {n:"Chat on WhatsApp",u:`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hi TerraForte, I’m interested in your tiles.")}`,i:'<path d="M3 21l1.6-4.7A8.5 8.5 0 1 1 8 19.6L3 21z"/><path d="M9.2 8.6c-.3 1.6 1.6 4.6 4.6 5.4l1.4-1.2-1.8-1-.8.6c-.9-.4-1.6-1.1-2-2l.6-.8-1-1.8-1 .8z"/>'},
  {n:"Instagram",u:"https://www.instagram.com/terraforte",i:'<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6"/>'},
  {n:"Facebook",u:"https://www.facebook.com/terraforte",i:'<path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z"/>'},
  {n:"TikTok",u:"https://www.tiktok.com/@terraforte",i:'<path d="M15 3v10.5a4 4 0 1 1-4-4"/><path d="M15 3a5 5 0 0 0 4 4"/>'},
  {n:"Email us",u:"mailto:terraforte.tiles@gmail.com?subject=Tile%20enquiry",i:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>'}
];
const svgIcon=(p,s)=>`<svg viewBox="0 0 24 24" width="${s}" height="${s}" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;
const ext=u=>u.startsWith("http")?' target="_blank" rel="noopener"':"";
document.getElementById("social").innerHTML=SOCIAL.map(s=>`<a href="${s.u}"${ext(s.u)} title="${s.n}" aria-label="${s.n}">${svgIcon(s.i,20)}</a>`).join("");
const wa=document.createElement("a");wa.className="wa";wa.href=SOCIAL[0].u;wa.target="_blank";wa.rel="noopener";wa.setAttribute("aria-label","Chat on WhatsApp");
wa.innerHTML=svgIcon(SOCIAL[0].i,28);document.body.appendChild(wa);

// Live wall visualizer (hero)
const wallEl=document.getElementById("wall"),vN=document.getElementById("vizName"),vM=document.getElementById("vizMeta"),vC=document.getElementById("vizChips");
let vi=0,vTimer,vMode="wall";
function showViz(i){
  vi=i;const t=tiles[i];wallEl.classList.remove("swap");void wallEl.offsetWidth;wallEl.classList.add("swap");
  const u=`url(${getPicture(t)})`,fl=document.getElementById("floorEl");wallEl.style.backgroundImage=vMode!=="floor"?u:"none";
  if(vMode==="wall"){fl.style.backgroundImage="";fl.style.backgroundSize="";fl.style.backgroundRepeat=""}else{fl.style.backgroundImage=u;fl.style.backgroundSize="230px auto";fl.style.backgroundRepeat="repeat"}
  vN.textContent=t.name;vM.textContent=`${t.specs.Size} · ${t.specs.Finish} · ${t.price}`;
  vC.querySelectorAll(".sw").forEach((b,k)=>b.classList.toggle("on",k===i));
}
tiles.forEach((t,i)=>{
  const b=document.createElement("button");b.className="sw";b.title=t.name;b.innerHTML=`<img alt="${t.name}" src="${getPicture(t)}">`;
  b.onclick=()=>{clearInterval(vTimer);showViz(i)};vC.appendChild(b);
});
document.getElementById("vizBtn").onclick=()=>{location.hash=tiles[vi].id};
document.getElementById("vizMode").onclick=e=>{const b=e.target.closest("button");if(!b)return;vMode=b.dataset.m;[...b.parentNode.children].forEach(x=>x.classList.toggle("on",x===b));clearInterval(vTimer);showViz(vi)};
showViz(0);vTimer=setInterval(()=>showViz((vi+1)%tiles.length),3500);
const mqs=tiles.map(t=>t.name.toUpperCase()).join(" \u2726 ")+" \u2726 ";
document.getElementById("track").innerHTML=`<span>${mqs}${mqs}</span><span>${mqs}${mqs}</span>`;
const prog=document.getElementById("prog");
addEventListener("scroll",()=>{prog.style.width=scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight)*100+"%"});

function confetti(){const c=document.createElement("canvas");c.style.cssText="position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:120";c.width=innerWidth;c.height=innerHeight;document.body.appendChild(c);const g=c.getContext("2d"),cols=["#d4af37","#f6e27a","#ffffff","#1f8a5f","#c8553d"],ps=Array.from({length:140},()=>({x:innerWidth/2,y:innerHeight*.6,vx:(Math.random()-.5)*16,vy:-Math.random()*16-4,s:4+Math.random()*6,c:cols[Math.floor(Math.random()*5)],r:Math.random()*6}));let f=0;(function d(){g.clearRect(0,0,c.width,c.height);ps.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.vy+=.4;p.r+=.2;g.fillStyle=p.c;g.save();g.translate(p.x,p.y);g.rotate(p.r);g.fillRect(-p.s/2,-p.s/2,p.s,p.s*.6);g.restore()});if(++f<130)requestAnimationFrame(d);else c.remove()})()}
// Cursor glow + hero parallax
const glow=document.createElement("div");glow.id="glow";document.body.appendChild(glow);
addEventListener("mousemove",e=>{glow.style.transform=`translate(${e.clientX-180}px,${e.clientY-180}px)`},{passive:true});
addEventListener("scroll",()=>root.style.setProperty("--py",Math.min(scrollY,800)),{passive:true});

// Back to top
const tt=document.getElementById("toTop");
addEventListener("scroll",()=>tt.classList.toggle("show",scrollY>500));
tt.onclick=()=>scrollTo({top:0,behavior:"smooth"});
route();
