import {walk} from "../scripts/utils";

const baseDir = './docs/article/backend/nestjs/'
export const nestjsSidebar = [
	walk(baseDir,'NestJS基础'),
	walk(baseDir,'NestJS进阶'),
	walk(baseDir,'安全认证'),
	walk(baseDir,'实用工具包'),
]
