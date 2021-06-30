import projectConfig from '/my_docs/pagic.config.js';
export default {
    'prev': undefined,
    'next': undefined,
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "site/README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "site/index.html",
    'title': "Hello world",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Hello world</h1>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement("link", { crossOrigin: "anonymous", href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css", integrity: "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X", rel: "stylesheet" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/my_docs/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "Hello world"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: ''
        } }),
    'toc': null,
    'author': "monze0117",
    'contributors': [
        "monze0117"
    ],
    'date': "2021-06-30T03:25:38.000Z",
    'updated': "2021-06-30T06:10:38.000Z",
    'excerpt': "",
    'cover': undefined,
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
