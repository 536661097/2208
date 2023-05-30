# 将远端仓库克隆至本地
git clone xxxxxx
# 将本地代码上传至远程仓库使用的命令
git add . 将所有新增的代码放到暂存区
git state 检测暂存区是否有新增代码
git commit -m '注释'  
git remote add origin 
git push origin main(分支名) 将新建分支推送至远端

# 分支
git branch xxx(分支命)  创建分支
git checkout xxxx(分支名) 切换分支
# 回退/前进版本
git log  查看commitid
git reset --hard commitid