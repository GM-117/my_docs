import projectConfig from '/pagic_template_docs/pagic.config.js';
export default {
    'prev': {
        "text": "React hooks test",
        "link": "test_pages/react_hooks_test.html"
    },
    'next': {
        "text": "Custom sidebar text",
        "link": "folder/bar.html"
    },
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "folder/foo.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "folder/foo.html",
    'title': "Foo",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Foo</h1>\n<p>The foo page.</p>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement("link", { crossOrigin: "anonymous", href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css", integrity: "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X", rel: "stylesheet" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/pagic_template_docs/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "Foo"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>The foo page.</p>'
        } }),
    'toc': null,
    'author': "GM-117",
    'contributors': [
        "GM-117"
    ],
    'date': "2021-06-30T02:09:59.000Z",
    'updated': null,
    'excerpt': "The foo page.",
    'cover': undefined,
    'sidebar': [
        {
            "text": "Introduction",
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