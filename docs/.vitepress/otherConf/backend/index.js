export const backendNav={
	text: '后端自习室',
	activeMatch: '/article/backend/',
	items: [
		{
			text: '嗨你好吗',
			items:[
				{text: 'Node.js', link:'/article/backend/nodejs/'},
				{text: 'NestJS', link:'/article/backend/nestjs/'},
				{text: 'C++', link:'/article/backend/CPP/'},
				{text: 'C#&NET', link:'/article/backend/Csharp/'},
			]
		},
		{
			text: '服务',
			items:[
				{text: 'Nginx', link:'/article/backend/nginx/'},
				{text: 'Git', link:'/article/backend/gitLearn/'},
			]
		},
	]
}
