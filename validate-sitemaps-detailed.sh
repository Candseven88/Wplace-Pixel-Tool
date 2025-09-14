#!/bin/bash

echo "🔍 Wplace 站点地图详细验证报告"
echo "================================="
echo "时间: $(date)"
echo ""

# 基础URL
BASE_URL="https://wplace.website"

# 站点地图文件列表
SITEMAPS=(
    "sitemap-index.xml"
    "sitemap-main.xml"
    "sitemap-blog.xml"
    "sitemap-i18n.xml"
    "robots.txt"
)

# 验证函数
validate_url() {
    local url=$1
    local name=$2
    
    echo "📋 检查 $name"
    echo "   URL: $url"
    
    # 获取HTTP状态码和Content-Type
    response=$(curl -s -w "HTTPSTATUS:%{http_code};CONTENT-TYPE:%{content_type};SIZE:%{size_download}" "$url")
    http_code=$(echo "$response" | grep -o "HTTPSTATUS:[0-9]*" | cut -d: -f2)
    content_type=$(echo "$response" | grep -o "CONTENT-TYPE:[^;]*" | cut -d: -f2)
    size=$(echo "$response" | grep -o "SIZE:[0-9]*" | cut -d: -f2)
    
    # 获取实际内容
    content=$(echo "$response" | sed -E 's/HTTPSTATUS:[0-9]*;CONTENT-TYPE:[^;]*;SIZE:[0-9]*$//')
    
    if [ "$http_code" = "200" ]; then
        echo "   ✅ 状态码: $http_code"
        echo "   📄 Content-Type: $content_type"
        echo "   📊 文件大小: $size bytes"
        
        # 检查XML文件的有效性
        if [[ "$url" == *".xml" ]]; then
            if echo "$content" | grep -q "<?xml version"; then
                echo "   ✅ XML格式有效"
                
                # 检查站点地图特定内容
                if echo "$content" | grep -q "<sitemapindex"; then
                    echo "   📂 类型: 站点地图索引"
                    sitemap_count=$(echo "$content" | grep -c "<sitemap>")
                    echo "   📈 包含子站点地图数量: $sitemap_count"
                elif echo "$content" | grep -q "<urlset"; then
                    echo "   📄 类型: URL站点地图"
                    url_count=$(echo "$content" | grep -c "<url>")
                    echo "   🔗 包含URL数量: $url_count"
                fi
                
                # 检查最后修改时间
                lastmod=$(echo "$content" | grep -o "<lastmod>[^<]*</lastmod>" | head -1 | sed 's/<[^>]*>//g')
                if [ ! -z "$lastmod" ]; then
                    echo "   📅 最后修改: $lastmod"
                fi
            else
                echo "   ❌ XML格式无效"
            fi
        fi
    else
        echo "   ❌ 状态码: $http_code"
        echo "   💔 无法访问"
    fi
    echo ""
}

# 验证robots.txt
echo "🤖 验证 robots.txt"
validate_url "$BASE_URL/robots.txt" "robots.txt"

# 验证所有站点地图
echo "🗺️ 验证站点地图文件"
for sitemap in "${SITEMAPS[@]}"; do
    if [[ "$sitemap" != "robots.txt" ]]; then
        validate_url "$BASE_URL/$sitemap" "$sitemap"
    fi
done

# 检查Google Search Console建议
echo "📊 Google Search Console 建议"
echo "================================="
echo "1. 确保在GSC中提交的URL是: $BASE_URL/sitemap-index.xml"
echo "2. 检查GSC中的错误报告，查看具体的抓取错误"
echo "3. 验证站点所有权是否正确设置"
echo "4. 检查是否有robots.txt阻止了Googlebot访问"
echo ""

# 检查robots.txt中的站点地图声明
echo "🔍 检查 robots.txt 中的站点地图声明"
robots_content=$(curl -s "$BASE_URL/robots.txt")
if echo "$robots_content" | grep -q "Sitemap:"; then
    echo "✅ robots.txt包含站点地图声明:"
    echo "$robots_content" | grep "Sitemap:"
else
    echo "❌ robots.txt缺少站点地图声明"
fi
echo ""

# 测试Googlebot访问
echo "🤖 模拟Googlebot访问测试"
googlebot_response=$(curl -s -w "HTTPSTATUS:%{http_code}" -H "User-Agent: Googlebot/2.1 (+http://www.google.com/bot.html)" "$BASE_URL/sitemap-index.xml")
googlebot_code=$(echo "$googlebot_response" | grep -o "HTTPSTATUS:[0-9]*" | cut -d: -f2)

if [ "$googlebot_code" = "200" ]; then
    echo "✅ Googlebot可以正常访问站点地图"
else
    echo "❌ Googlebot访问站点地图失败，状态码: $googlebot_code"
fi
echo ""

echo "🎯 推荐操作"
echo "============"
echo "1. 在GSC中删除旧的站点地图提交"
echo "2. 重新提交: $BASE_URL/sitemap-index.xml"
echo "3. 等待24-48小时让Google重新抓取"
echo "4. 检查GSC中的索引覆盖率报告"
echo "5. 如果问题持续，使用GSC的URL检查工具测试具体页面"
echo ""

echo "✅ 验证完成！" 