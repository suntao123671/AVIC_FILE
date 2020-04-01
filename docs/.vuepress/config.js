module.exports = {
    // 插件
    plugins: {
        'vuepress-plugin-comment': {
            choosen: 'valine',
            // options选项中的所有参数，会传给Valine的配置
            options: {
                el: '#valine-vuepress-comment',
                appId: 'slnTcOTAPQVydGNesVApRUcg-gzGzoHsz',
                appKey: 'Aeusc62FpStk4K4yVAiFonnU'
            }
        },
        '@vuepress/back-to-top': {},
		'@vssue/vuepress-plugin-vssue': {
      // 设置 `platform` 而不是 `api`
      platform: 'github',

      // 其他的 Vssue 配置
      owner: 'suntaoapp',
      repo: 'https://github.com/suntao123671/vuepress',
      clientId: '7a5d8ec17b3feaa2874b',
      clientSecret: 'be09102783368f8798603c77b3f5ace75ca8d1f2',
    },
    },
    // 头部
    head: [
        
    ],
    // 网站标题及描述
    title: 'V6业务基础平台',
    description: '面向企业复杂业务，适应业务随需而变的软件基础框架',
    // 主题配置
    themeConfig: {
        // 提取markdown中h2 和 h3 标题，显示在侧边栏上。
        sidebarDepth: 0,
        // 文档更新时间
        lastUpdated: '更新时间',
        // logo
        logo: '/logo/small.png',
        nav: [
            { text: '指南', link: '/guide/'},
            { text: '部署', link: '/donation/'},
            { text: '开发', link: '/version/V2.4/'},
			{ text: '产品介绍', link: 'http://ts.avic-digital.com:8880/PTDEMO/avicit/demo/index/index.jsp'},
        ],
        sidebar: {
            '/guide/': [
                {
                    title: '指南',
                    collapsable: false,
                    children: [
					['/guide/','产品介绍'],
					['/guide/jsbps','快速入门'],
					['/guide/hdsc','使用手册']					
                    ]
                },
                {
                    title: '部署',
                    collapsable: false,
                    children: [
                        '/guide/cjwt',
                        '/guide/rjrz',
                        '/guide/gxdm',
                        '/guide/bqsm'
                    ]
                },
                {
                    title: '开发',
                    collapsable: false,
                    children: [
                        '/guide/jzzc'
                    ]
                },
				{
                    title: '规范',
                    collapsable: false,
                    children: [
                        '/guide/jzzc'
                    ]
                }
            ],
            '/donation/': [
                '/donation/',

            ],
            '/version/': [
                'V2.4',
            ]
        },
        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: 'elunez/eladmin-doc',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '在 GitHub 上编辑此页！'
    }
}

