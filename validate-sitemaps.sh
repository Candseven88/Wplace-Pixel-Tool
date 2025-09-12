#!/bin/bash

echo "🔍 Wplace 站点地图验证工具"
echo "================================"

# 颜色定义
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 统计变量
total_urls=0
success_count=0
failed_count=0

# 验证单个URL
validate_url() {
    local url=$1
    local status_code=$(curl -s -o /dev/null -w "%{http_code}" "$url")
    total_urls=$((total_urls + 1))
    
    if [ "$status_code" = "200" ]; then
        echo -e "${GREEN}✅ $status_code${NC} - $url"
        success_count=$((success_count + 1))
    else
        echo -e "${RED}❌ $status_code${NC} - $url"
        failed_count=$((failed_count + 1))
    fi
}

# 验证站点地图索引
echo -e "\n${YELLOW}📋 验证站点地图索引...${NC}"
validate_url "https://wplace.website/sitemap-index.xml"

# 验证主要页面
echo -e "\n${YELLOW}🏠 验证主要英文页面...${NC}"
validate_url "https://wplace.website/"
validate_url "https://wplace.website/about/"
validate_url "https://wplace.website/privacy/"
validate_url "https://wplace.website/terms/"
validate_url "https://wplace.website/tutorials/"
validate_url "https://wplace.website/tutorials/getting-started/"
validate_url "https://wplace.website/faq/"

# 验证博客页面
echo -e "\n${YELLOW}📝 验证博客页面...${NC}"
validate_url "https://wplace.website/blog/"
validate_url "https://wplace.website/blog/haru-urara-pixel-art-wplace-guide/"
validate_url "https://wplace.website/blog/lanczos-algorithm-pixel-art/"
validate_url "https://wplace.website/blog/wplace-vs-competitors/"
validate_url "https://wplace.website/blog/best-practices-image-to-pixel-art/"
validate_url "https://wplace.website/blog/get-started-wplace-pixel-tool/"
validate_url "https://wplace.website/blog/grid-maker-for-pixel-perfect-art/"
validate_url "https://wplace.website/blog/palette-guide-official-wplace-colors/"
validate_url "https://wplace.website/blog/transform-images-into-wplace-pixel-art/"

# 验证中文页面
echo -e "\n${YELLOW}🇨🇳 验证中文页面...${NC}"
validate_url "https://wplace.website/zh/"
validate_url "https://wplace.website/zh/about/"
validate_url "https://wplace.website/zh/privacy/"
validate_url "https://wplace.website/zh/terms/"

# 验证日文页面
echo -e "\n${YELLOW}🇯🇵 验证日文页面...${NC}"
validate_url "https://wplace.website/ja/"
validate_url "https://wplace.website/ja/about/"
validate_url "https://wplace.website/ja/privacy/"
validate_url "https://wplace.website/ja/terms/"

# 验证站点地图文件
echo -e "\n${YELLOW}📄 验证站点地图文件...${NC}"
validate_url "https://wplace.website/sitemap-main.xml"
validate_url "https://wplace.website/sitemap-blog.xml"
validate_url "https://wplace.website/sitemap-i18n.xml"

# 显示结果
echo -e "\n${YELLOW}📊 验证结果统计${NC}"
echo "================================"
echo -e "总计URL数量: ${YELLOW}$total_urls${NC}"
echo -e "成功访问: ${GREEN}$success_count${NC}"
echo -e "访问失败: ${RED}$failed_count${NC}"

# 计算成功率
if [ $total_urls -gt 0 ]; then
    success_rate=$(echo "scale=1; $success_count * 100 / $total_urls" | bc -l)
    echo -e "成功率: ${GREEN}$success_rate%${NC}"
fi

if [ $failed_count -eq 0 ]; then
    echo -e "\n${GREEN}🎉 所有URL验证成功！可以安全提交到Google Search Console${NC}"
else
    echo -e "\n${RED}⚠️  有$failed_count个URL访问失败，建议修复后再提交${NC}"
fi 