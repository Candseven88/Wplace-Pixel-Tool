#!/bin/bash

# Google AdSense ads.txt 验证脚本
# 用于验证 ads.txt 文件是否正确配置和可访问

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🔍 Google AdSense ads.txt 验证工具"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# 配置
DOMAIN="wplace.website"
EXPECTED_CONTENT="google.com, pub-9816094922761343, DIRECT, f08c47fec0942fa0"

# 颜色代码
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 1. 检查本地文件
echo "📁 1. 检查本地文件"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
if [ -f "public/ads.txt" ]; then
    echo -e "${GREEN}✅ public/ads.txt 存在${NC}"
    echo "内容:"
    cat public/ads.txt
    echo ""
else
    echo -e "${RED}❌ public/ads.txt 不存在${NC}"
    echo ""
fi

# 2. 检查线上文件可访问性
echo "🌐 2. 检查线上文件可访问性"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" https://$DOMAIN/ads.txt)
if [ "$HTTP_CODE" == "200" ]; then
    echo -e "${GREEN}✅ HTTP 状态码: $HTTP_CODE (成功)${NC}"
else
    echo -e "${RED}❌ HTTP 状态码: $HTTP_CODE (失败)${NC}"
fi
echo ""

# 3. 检查 Content-Type
echo "📄 3. 检查 Content-Type"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
CONTENT_TYPE=$(curl -s -I https://$DOMAIN/ads.txt | grep -i "content-type" | cut -d' ' -f2 | tr -d '\r\n')
if [[ "$CONTENT_TYPE" == *"text/plain"* ]]; then
    echo -e "${GREEN}✅ Content-Type: $CONTENT_TYPE${NC}"
else
    echo -e "${YELLOW}⚠️  Content-Type: $CONTENT_TYPE (应该是 text/plain)${NC}"
fi
echo ""

# 4. 检查线上文件内容
echo "📝 4. 检查线上文件内容"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
ONLINE_CONTENT=$(curl -s https://$DOMAIN/ads.txt | tr -d '\r\n' | sed 's/ *$//')
echo "实际内容: $ONLINE_CONTENT"
echo "期望内容: $EXPECTED_CONTENT"
echo ""

if [ "$ONLINE_CONTENT" == "$EXPECTED_CONTENT" ]; then
    echo -e "${GREEN}✅ 内容匹配正确${NC}"
else
    echo -e "${RED}❌ 内容不匹配${NC}"
    echo "差异检查:"
    echo "实际: [$ONLINE_CONTENT]"
    echo "期望: [$EXPECTED_CONTENT]"
fi
echo ""

# 5. 检查响应时间
echo "⚡ 5. 检查响应时间"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
RESPONSE_TIME=$(curl -s -o /dev/null -w "%{time_total}" https://$DOMAIN/ads.txt)
echo "响应时间: ${RESPONSE_TIME}秒"
if (( $(echo "$RESPONSE_TIME < 2.0" | bc -l) )); then
    echo -e "${GREEN}✅ 响应速度良好${NC}"
else
    echo -e "${YELLOW}⚠️  响应速度较慢${NC}"
fi
echo ""

# 6. 检查 Cache-Control
echo "💾 6. 检查缓存设置"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
CACHE_CONTROL=$(curl -s -I https://$DOMAIN/ads.txt | grep -i "cache-control" | cut -d' ' -f2- | tr -d '\r\n')
echo "Cache-Control: $CACHE_CONTROL"
if [[ "$CACHE_CONTROL" != "" ]]; then
    echo -e "${GREEN}✅ 缓存头已设置${NC}"
else
    echo -e "${YELLOW}⚠️  未设置缓存头${NC}"
fi
echo ""

# 7. 检查 robots.txt 是否允许
echo "🤖 7. 检查 robots.txt"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
if curl -s https://$DOMAIN/robots.txt | grep -q "Disallow.*ads.txt"; then
    echo -e "${RED}❌ robots.txt 禁止访问 ads.txt${NC}"
else
    echo -e "${GREEN}✅ robots.txt 允许访问 ads.txt${NC}"
fi
echo ""

# 8. 测试 Google 爬虫视角
echo "🔍 8. 测试 Google 爬虫视角"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
GOOGLE_BOT=$(curl -s -A "Googlebot" https://$DOMAIN/ads.txt)
if [ ! -z "$GOOGLE_BOT" ]; then
    echo -e "${GREEN}✅ Googlebot 可以访问${NC}"
    echo "Googlebot 看到的内容: $GOOGLE_BOT"
else
    echo -e "${RED}❌ Googlebot 无法访问${NC}"
fi
echo ""

# 总结
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📊 验证总结"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

ISSUES=0

if [ ! -f "public/ads.txt" ]; then
    ((ISSUES++))
fi

if [ "$HTTP_CODE" != "200" ]; then
    ((ISSUES++))
fi

if [[ "$CONTENT_TYPE" != *"text/plain"* ]]; then
    ((ISSUES++))
fi

if [ "$ONLINE_CONTENT" != "$EXPECTED_CONTENT" ]; then
    ((ISSUES++))
fi

if [ $ISSUES -eq 0 ]; then
    echo -e "${GREEN}✅ 所有检查通过！ads.txt 配置完全正确！${NC}"
    echo ""
    echo "🎯 下一步操作:"
    echo "1. 在 Google Search Console 请求抓取 ads.txt"
    echo "2. 等待 24-48 小时让 Google 重新抓取"
    echo "3. 在 AdSense 后台查看状态更新"
else
    echo -e "${RED}❌ 发现 $ISSUES 个问题需要修复${NC}"
    echo ""
    echo "🔧 建议修复步骤:"
    echo "1. 确保 public/ads.txt 文件存在且内容正确"
    echo "2. 运行 npm run build 重新构建"
    echo "3. 部署更新到生产环境"
    echo "4. 等待几分钟后再次运行此脚本验证"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "验证完成时间: $(date '+%Y-%m-%d %H:%M:%S')"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

