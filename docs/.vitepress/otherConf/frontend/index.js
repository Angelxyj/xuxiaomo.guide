export const frontendNav = {
	text: '前端小食堂',
	activeMatch: 'frontend',
	items:[
		{
			text: '基本功',
			items:[
				{text: 'Html', link:'/article/frontend/html/'},
				{text: 'CSS', link:'/article/frontend/css/'},
				{text: 'JavaScript', link:'/article/frontend/javascript/'},
				{text: 'TypeScript', link:'/article/frontend/typescript/'},
			]
		},
		{
			text: '框架',
			items:[
				{text: 'React', link:'/article/frontend/react/'},
				{text: 'NextJS', link:'/article/frontend/next/'},
				{text: 'Vue', link:'/article/frontend/vue/'},
				{text: 'Tauri', link:'/article/frontend/tauri/'},
			]
		},
		{
			text: '丰富资源',
			items:[
				{text: '组件库', link:'/article/frontend/ui/'},
			]
		}
	]
}
