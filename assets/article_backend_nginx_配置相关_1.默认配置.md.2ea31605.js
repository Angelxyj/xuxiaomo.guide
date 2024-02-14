import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.ab7e7ee0.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"article/backend/nginx/配置相关/1.默认配置.md","filePath":"article/backend/nginx/配置相关/1.默认配置.md","lastUpdated":1707839101000}'),l={name:"article/backend/nginx/配置相关/1.默认配置.md"},o=p(`<p>nginx默认配置文件</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">server</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">listen</span><span style="color:#E1E4E8;">       </span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">#服务器端口号</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">server_name</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">localhost</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">#域名xxxx.com或者http://ip</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#access_log  /var/log/nginx/host.access.log  main; #日志路径，可以自定义</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">root</span><span style="color:#E1E4E8;">   </span><span style="color:#9ECBFF;">/usr/share/nginx/html</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">#网站的根目录</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">index</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">index.html</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">index.htm</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">#网站默认主页文件名</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#error_page  404              /404.html;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># redirect server error pages to the static page /50x.html</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">error_page</span><span style="color:#E1E4E8;">   </span><span style="color:#79B8FF;">500</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">502</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">503</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">504</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">/50x.html</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/50x.html</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">root</span><span style="color:#E1E4E8;">   </span><span style="color:#9ECBFF;">/usr/share/nginx/html</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># proxy the PHP scripts to Apache listening on 127.0.0.1:80</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#location ~ \\.php$ {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#    proxy_pass   http://127.0.0.1;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#location ~ \\.php$ {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#    root           html;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#    fastcgi_pass   127.0.0.1:9000;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#    fastcgi_index  index.php;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#    include        fastcgi_params;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># deny access to .htaccess files, if Apache&#39;s document root</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># concurs with nginx&#39;s one</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#location ~ /\\.ht {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#    deny  all;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">server</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">listen</span><span style="color:#24292E;">       </span><span style="color:#005CC5;">80</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">#服务器端口号</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">server_name</span><span style="color:#24292E;">  </span><span style="color:#032F62;">localhost</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">#域名xxxx.com或者http://ip</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#access_log  /var/log/nginx/host.access.log  main; #日志路径，可以自定义</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">location</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">root</span><span style="color:#24292E;">   </span><span style="color:#032F62;">/usr/share/nginx/html</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">#网站的根目录</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">index</span><span style="color:#24292E;">  </span><span style="color:#032F62;">index.html</span><span style="color:#24292E;"> </span><span style="color:#032F62;">index.htm</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">#网站默认主页文件名</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#error_page  404              /404.html;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># redirect server error pages to the static page /50x.html</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">error_page</span><span style="color:#24292E;">   </span><span style="color:#005CC5;">500</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">502</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">503</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">504</span><span style="color:#24292E;">  </span><span style="color:#032F62;">/50x.html</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">location</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/50x.html</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">root</span><span style="color:#24292E;">   </span><span style="color:#032F62;">/usr/share/nginx/html</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># proxy the PHP scripts to Apache listening on 127.0.0.1:80</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#location ~ \\.php$ {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#    proxy_pass   http://127.0.0.1;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#location ~ \\.php$ {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#    root           html;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#    fastcgi_pass   127.0.0.1:9000;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#    fastcgi_index  index.php;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#    include        fastcgi_params;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># deny access to .htaccess files, if Apache&#39;s document root</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># concurs with nginx&#39;s one</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#location ~ /\\.ht {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#    deny  all;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div>`,2),e=[o];function c(r,t,E,i,y,b){return n(),a("div",null,e)}const F=s(l,[["render",c]]);export{h as __pageData,F as default};
