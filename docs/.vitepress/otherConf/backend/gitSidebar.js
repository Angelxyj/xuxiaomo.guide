import { walk } from "../scripts/utils";
const baseDir = './docs/article/backend/gitLearn/'
export const gitSidebar = [
	walk(baseDir,'基本配置'),
	walk(baseDir,'常用命令'),
	walk(baseDir,'远程仓库'),
	walk(baseDir,'其它工具'),
]
