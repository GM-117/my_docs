import projectConfig from '/my_docs/pagic.config.js';
export default {
    'prev': undefined,
    'next': undefined,
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "index.html",
    'title': "Pagic安装和使用",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Pagic安装和使用</h1>\n<p>Pagic 是基于Deno实现的，所以使用前需要先安装Deno。</p>\n<h2 id="1-%E5%AE%89%E8%A3%85deno-%E4%B8%8D%E5%90%8C%E7%B3%BB%E7%BB%9F">1. 安装Deno [不同系统]<a class="anchor" href="#1-%E5%AE%89%E8%A3%85deno-%E4%B8%8D%E5%90%8C%E7%B3%BB%E7%BB%9F">§</a></h2>\n<p>######Shell (Mac, Linux):</p>\n<pre class="language-autoit"><code class="language-autoit">curl <span class="token operator">-</span>fsSL https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>deno<span class="token punctuation">.</span>land<span class="token operator">/</span>x<span class="token operator">/</span>install<span class="token operator">/</span>install<span class="token punctuation">.</span>sh | sh\n</code></pre>\n<p>######PowerShell (Windows):</p>\n<pre class="language-autoit"><code class="language-autoit">iwr https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>deno<span class="token punctuation">.</span>land<span class="token operator">/</span>x<span class="token operator">/</span>install<span class="token operator">/</span>install<span class="token punctuation">.</span>ps1 <span class="token operator">-</span>useb | iex\n</code></pre>\n<p>######Homebrew (Mac):</p>\n<pre class="language-autoit"><code class="language-autoit">brew install deno\n</code></pre>\n<p>######Chocolatey (Windows):</p>\n<pre class="language-autoit"><code class="language-autoit">choco install deno\n</code></pre>\n<p>######Scoop (Windows):</p>\n<pre class="language-autoit"><code class="language-autoit">scoop install deno\n</code></pre>\n<h2 id="2-%E5%AE%89%E8%A3%85-pagic">2. 安装 Pagic<a class="anchor" href="#2-%E5%AE%89%E8%A3%85-pagic">§</a></h2>\n<p>执行以下命令来安装最新版本的 Pagic：</p>\n<pre class="language-autoit"><code class="language-autoit">deno install <span class="token operator">-</span><span class="token operator">-</span>unstable <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>read <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>write <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>net <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>run <span class="token operator">-</span><span class="token operator">-</span>name<span class="token operator">=</span>pagic https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>deno<span class="token punctuation">.</span>land<span class="token operator">/</span>x<span class="token operator">/</span>pagic<span class="token operator">/</span>mod<span class="token punctuation">.</span>ts\n</code></pre>\n<p>若需要安装指定版本的 Pagic，则可以在安装的 URL 中加入版本号：</p>\n<pre class="language-autoit"><code class="language-autoit">deno install <span class="token operator">-</span><span class="token operator">-</span>unstable <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>read <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>write <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>net <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>run <span class="token operator">-</span><span class="token operator">-</span>name<span class="token operator">=</span>pagic https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>deno<span class="token punctuation">.</span>land<span class="token operator">/</span>x<span class="token operator">/</span>pagic<span class="token variable">@v1</span><span class="token punctuation">.</span><span class="token number">3.1</span><span class="token operator">/</span>mod<span class="token punctuation">.</span>ts\n</code></pre>\n<h2 id="3-%E5%88%9D%E5%A7%8B%E5%8C%96%E9%A1%B9%E7%9B%AE">3. 初始化项目<a class="anchor" href="#3-%E5%88%9D%E5%A7%8B%E5%8C%96%E9%A1%B9%E7%9B%AE">§</a></h2>\n<p>要使用 pagic 构建静态网站，则该项目至少需要包含一个 pagic.config.ts 配置文件和一个 md/tsx 页面文件：\n#####新建如下目录文件：</p>\n<pre class="language-autoit"><code class="language-autoit">site<span class="token operator">/</span>\n├── pagic<span class="token punctuation">.</span>config<span class="token punctuation">.</span>ts\n└── README<span class="token punctuation">.</span>md\n</code></pre>\n<p>其中 pagic.config.ts 一开始可以只导出一个空对象：<code>export default {};</code>\n<a href="http://README.md">README.md</a> 可以是一个简单的 Markdown 文件：<code># Hello world</code></p>\n<h2 id="4-%E8%BF%90%E8%A1%8C-pagic-build">4. 运行 pagic build<a class="anchor" href="#4-%E8%BF%90%E8%A1%8C-pagic-build">§</a></h2>\n<p>windows操作系统在此之前需要配置环境变量：在Path中配置添加<code>C:\Users\Administrator\.deno\bin</code>\n<img src="./assets/path.png" alt="path"></p>\n<p>在 site 目录下运行以下代码：</p>\n<pre class="language-autoit"><code class="language-autoit">pagic build <span class="token operator">-</span><span class="token operator">-</span>watch <span class="token operator">-</span><span class="token operator">-</span>serve\n</code></pre>\n<p>在览器打开 <a href="http://127.0.0.1:8000/">http://127.0.0.1:8000/</a> ，显示出README.md中的Hello world</p>\n<p>#####build构建结果在dist目录中</p>\n<pre class="language-autoit"><code class="language-autoit">site<span class="token operator">/</span>\n|── dist    # 构建结果目录\n|   └── index<span class="token punctuation">.</span>html\n├── pagic<span class="token punctuation">.</span>config<span class="token punctuation">.</span>ts\n└── README<span class="token punctuation">.</span>md\n</code></pre>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement("link", { crossOrigin: "anonymous", href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css", integrity: "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X", rel: "stylesheet" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/my_docs/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "Pagic\u5B89\u88C5\u548C\u4F7F\u7528"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>Pagic 是基于Deno实现的，所以使用前需要先安装Deno。</p>\n<h2 id="1-%E5%AE%89%E8%A3%85deno-%E4%B8%8D%E5%90%8C%E7%B3%BB%E7%BB%9F">1. 安装Deno [不同系统]<a class="anchor" href="#1-%E5%AE%89%E8%A3%85deno-%E4%B8%8D%E5%90%8C%E7%B3%BB%E7%BB%9F">§</a></h2>\n<p>######Shell (Mac, Linux):</p>\n<pre class="language-autoit"><code class="language-autoit">curl <span class="token operator">-</span>fsSL https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>deno<span class="token punctuation">.</span>land<span class="token operator">/</span>x<span class="token operator">/</span>install<span class="token operator">/</span>install<span class="token punctuation">.</span>sh | sh\n</code></pre>\n<p>######PowerShell (Windows):</p>\n<pre class="language-autoit"><code class="language-autoit">iwr https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>deno<span class="token punctuation">.</span>land<span class="token operator">/</span>x<span class="token operator">/</span>install<span class="token operator">/</span>install<span class="token punctuation">.</span>ps1 <span class="token operator">-</span>useb | iex\n</code></pre>\n<p>######Homebrew (Mac):</p>\n<pre class="language-autoit"><code class="language-autoit">brew install deno\n</code></pre>\n<p>######Chocolatey (Windows):</p>\n<pre class="language-autoit"><code class="language-autoit">choco install deno\n</code></pre>\n<p>######Scoop (Windows):</p>\n<pre class="language-autoit"><code class="language-autoit">scoop install deno\n</code></pre>\n<h2 id="2-%E5%AE%89%E8%A3%85-pagic">2. 安装 Pagic<a class="anchor" href="#2-%E5%AE%89%E8%A3%85-pagic">§</a></h2>\n<p>执行以下命令来安装最新版本的 Pagic：</p>\n<pre class="language-autoit"><code class="language-autoit">deno install <span class="token operator">-</span><span class="token operator">-</span>unstable <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>read <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>write <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>net <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>run <span class="token operator">-</span><span class="token operator">-</span>name<span class="token operator">=</span>pagic https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>deno<span class="token punctuation">.</span>land<span class="token operator">/</span>x<span class="token operator">/</span>pagic<span class="token operator">/</span>mod<span class="token punctuation">.</span>ts\n</code></pre>\n<p>若需要安装指定版本的 Pagic，则可以在安装的 URL 中加入版本号：</p>\n<pre class="language-autoit"><code class="language-autoit">deno install <span class="token operator">-</span><span class="token operator">-</span>unstable <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>read <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>write <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>net <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>run <span class="token operator">-</span><span class="token operator">-</span>name<span class="token operator">=</span>pagic https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>deno<span class="token punctuation">.</span>land<span class="token operator">/</span>x<span class="token operator">/</span>pagic<span class="token variable">@v1</span><span class="token punctuation">.</span><span class="token number">3.1</span><span class="token operator">/</span>mod<span class="token punctuation">.</span>ts\n</code></pre>\n<h2 id="3-%E5%88%9D%E5%A7%8B%E5%8C%96%E9%A1%B9%E7%9B%AE">3. 初始化项目<a class="anchor" href="#3-%E5%88%9D%E5%A7%8B%E5%8C%96%E9%A1%B9%E7%9B%AE">§</a></h2>\n<p>要使用 pagic 构建静态网站，则该项目至少需要包含一个 pagic.config.ts 配置文件和一个 md/tsx 页面文件：\n#####新建如下目录文件：</p>\n<pre class="language-autoit"><code class="language-autoit">site<span class="token operator">/</span>\n├── pagic<span class="token punctuation">.</span>config<span class="token punctuation">.</span>ts\n└── README<span class="token punctuation">.</span>md\n</code></pre>\n<p>其中 pagic.config.ts 一开始可以只导出一个空对象：<code>export default {};</code>\n<a href="http://README.md">README.md</a> 可以是一个简单的 Markdown 文件：<code># Hello world</code></p>\n<h2 id="4-%E8%BF%90%E8%A1%8C-pagic-build">4. 运行 pagic build<a class="anchor" href="#4-%E8%BF%90%E8%A1%8C-pagic-build">§</a></h2>\n<p>windows操作系统在此之前需要配置环境变量：在Path中配置添加<code>C:\Users\Administrator\.deno\bin</code>\n<img src="./assets/path.png" alt="path"></p>\n<p>在 site 目录下运行以下代码：</p>\n<pre class="language-autoit"><code class="language-autoit">pagic build <span class="token operator">-</span><span class="token operator">-</span>watch <span class="token operator">-</span><span class="token operator">-</span>serve\n</code></pre>\n<p>在览器打开 <a href="http://127.0.0.1:8000/">http://127.0.0.1:8000/</a> ，显示出README.md中的Hello world</p>\n<p>#####build构建结果在dist目录中</p>\n<pre class="language-autoit"><code class="language-autoit">site<span class="token operator">/</span>\n|── dist    # 构建结果目录\n|   └── index<span class="token punctuation">.</span>html\n├── pagic<span class="token punctuation">.</span>config<span class="token punctuation">.</span>ts\n└── README<span class="token punctuation">.</span>md\n</code></pre>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#1-%E5%AE%89%E8%A3%85deno-%E4%B8%8D%E5%90%8C%E7%B3%BB%E7%BB%9F" }, "1. \u5B89\u88C5Deno [\u4E0D\u540C\u7CFB\u7EDF]")),
            React.createElement("li", null,
                React.createElement("a", { href: "#2-%E5%AE%89%E8%A3%85-pagic" }, "2. \u5B89\u88C5 Pagic")),
            React.createElement("li", null,
                React.createElement("a", { href: "#3-%E5%88%9D%E5%A7%8B%E5%8C%96%E9%A1%B9%E7%9B%AE" }, "3. \u521D\u59CB\u5316\u9879\u76EE")),
            React.createElement("li", null,
                React.createElement("a", { href: "#4-%E8%BF%90%E8%A1%8C-pagic-build" }, "4. \u8FD0\u884C pagic build")))),
    'author': "GM-117",
    'contributors': [
        "GM-117",
        "monze0117"
    ],
    'date': "2021-06-30T02:09:59.000Z",
    'updated': "2021-06-30T06:10:38.000Z",
    'excerpt': "Pagic 是基于Deno实现的，所以使用前需要先安装Deno。 1. 安装Deno [不同系统] ######Shell (Mac, Linux): curl -fsSL https://deno.land/x/install/install.sh | sh ######PowerShell (Windows): iwr https://deno.land/x/ins...",
    'cover': "./assets/path.png",
    'sidebar': [
        {
            "text": "Pagic template docs 使用模板",
            "link": "introduction/index.html",
            "pagePath": "introduction/README.md"
        },
        {
            "link": "test_pages/index.html",
            "children": [
                {
                    "text": "Markdown test",
                    "link": "test_pages/markdown_test.html",
                    "pagePath": "test_pages/markdown_test.md"
                },
                {
                    "text": "Front matter test",
                    "link": "test_pages/front_matter_test.html",
                    "pagePath": "test_pages/front_matter.md"
                },
                {
                    "text": "React hooks test",
                    "link": "test_pages/react_hooks_test.html",
                    "pagePath": "test_pages/react_hooks_test.tsx"
                }
            ],
            "pagePath": "test_pages/README.md",
            "text": "Test pages"
        },
        {
            "text": "Folder",
            "children": [
                {
                    "text": "Foo",
                    "link": "folder/foo.html",
                    "pagePath": "folder/foo.md"
                },
                {
                    "text": "Custom sidebar text",
                    "link": "folder/bar.html",
                    "pagePath": "folder/bar.md"
                }
            ]
        }
    ]
};
