# 静态化部署需求文档

## 需求场景
将Afrikan应用改造为完全静态部署版本，移除所有对base44后端的依赖。

## 需要修改的文件
1. `src/api/baseClient.js` - 移除base44客户端创建
2. `src/lib/AuthContext.jsx` - 替换认证逻辑为静态mock
3. `src/lib/NavigationTracker.jsx` - 移除或替换日志记录
4. `src/lib/PageNotFound.jsx` - 移除认证检查

## 实现细节
1. **baseClient.js**:
   - 删除整个文件内容
   - 或替换为空的mock导出

2. **AuthContext.jsx**:
   ```jsx
   // 替换前
   const currentUser = await base44.auth.me();
   
   // 替换后
   const currentUser = { isAuthenticated: false }; // 静态mock数据
   ```

3. **NavigationTracker.jsx**:
   ```jsx
   // 替换前
   base44.appLogs.logUserInApp(pageName)
   
   // 替换后
   console.log(`User navigated to ${pageName}`); // 前端日志
   ```

4. **PageNotFound.jsx**:
   ```jsx
   // 替换前
   const user = await base44.auth.me();
   
   // 替换后
   const user = { isAuthenticated: false }; // 静态mock数据
   ```

## 预期成果
- 应用不再依赖任何后端API
- 所有功能在前端静态运行
- 移除@base44/sdk依赖