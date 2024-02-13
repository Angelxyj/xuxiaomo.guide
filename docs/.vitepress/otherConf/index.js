import { reactSidebar } from './frontend/reactSidebar'
import { nextSidebar } from './frontend/nextSidebar'
import { tauriSidebar } from './frontend/tauriSidebar'
import { cssSidebar } from './frontend/cssSidebar'
import { nestjsSidebar } from './backend/nestjsSiderbar'
import { nginxSidebar } from './backend/nginxSidebar'
import { gitSidebar } from './backend/gitSidebar'
import { nodeSidebar } from './backend/nodeSidebar'
import { cppSidebar } from './backend/cppSidebar'
import { csharpSidebar } from './backend/csharpSidebar'
import { bigManSidebar } from './bigMan/bigManSiderbar'
import { bugSidebar } from './bug/bugSiderbar'
import { colorfulSidebar } from './colorfulLife/colorfulSiderbar'

export const otherSidebar = {
    // 前端
    '/article/frontend/react/': reactSidebar,
    '/article/frontend/next/': nextSidebar,
    '/article/frontend/tauri/': tauriSidebar,
    '/article/frontend/css/': cssSidebar,
    // 后端
    '/article/backend/nestjs/': nestjsSidebar,
    '/article/backend/nginx/': nginxSidebar,
    '/article/backend/gitLearn/': gitSidebar,
    '/article/backend/nodejs/': nodeSidebar,
    '/article/backend/CPP/': cppSidebar,
    '/article/backend/Csharp/': csharpSidebar,
    // 巨人的肩膀
    '/article/bigMan/': bigManSidebar,
    // bug集中营
    '/article/bug/': bugSidebar,
    // 缤纷世界
    '/article/colorfulLife/': colorfulSidebar,
};