document.writeln(" <div class='container'> "); 
document.writeln(" <div id='post' ng-app=''> "); 
document.writeln(" <div class='header'> "); 
document.writeln(" <h4>Сайтад пост хийх админы хэсэг</h4> "); 
document.writeln(" </div> "); 
document.writeln(" <div class='post-body'> "); 
document.writeln(" <div class='postmid'> "); 
document.writeln(" <div class='input-box'> "); 
document.writeln(" <label>Анимэ upload хийсэн source линк</label> "); 
document.writeln(" <input ng-model='watch_link' placeholder='Dolgion юм уу? Hiub-д хийсэн байх' type='text'/> "); 
document.writeln(" </div> "); 
document.writeln(" <div class='input-box'> "); 
document.writeln(" <label>Зурагний url</label> "); 
document.writeln(" <input ng-model='url_image' placeholder='Блоггер дээр хийсэн байвал ер нь зүгээр' type='text'/> "); 
document.writeln(" </div> "); 
document.writeln(" <div class='input-box'> "); 
document.writeln(" <label>Татах серверийн нэр</label> "); 
document.writeln(" <input ng-model='dl_server_name' placeholder='Mega дээр хийсэн бол Mega гээд' type='text'/> "); 
document.writeln(" </div> "); 
document.writeln(" <div class='input-box'> "); 
document.writeln(" <label>Татах линк</label> "); 
document.writeln(" <input ng-model='dl_server_link' placeholder='Mega дээр хийсэн бол Mega-н линк' type='text'/> "); 
document.writeln(" </div> "); 
document.writeln(" </div> "); 
document.writeln(" </div> "); 
document.writeln(" <div class='center'> "); 
document.writeln(" <button class='ng ripplelink' onclick='myFunction()'>HTML хуулах</button> "); 
document.writeln(" </div> "); 
document.writeln(" <textarea id='myInput' style=' position: absolute;       left:     -1000px;       top:      -1000px'> "); 
document.writeln(" <div style='display: none'> "); 
document.writeln(" {\"data\":{ \"video\": \"{{ watch_link }}\",\"links\": [{ \"name\": \"{{dl_server_name}}\",\"url\": \"{{dl_server_link}}\"}]}} "); 
document.writeln("  </div> "); 
document.writeln(" <a href='{{url_image}}' imageanchor='1'> "); 
document.writeln(" <img border='0' data-original-height='600' data-original-width='425' src='{{url_image}}'/> "); 
document.writeln(" </a> "); 
document.writeln(" </textarea> "); 
document.writeln(" </div> "); 
document.writeln(" </div> ");
