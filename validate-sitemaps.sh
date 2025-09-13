#!/bin/bash

# Sitemap Validation Script for Wplace Website
# Validates XML format and Google Search Console compliance

echo "🔍 Validating Wplace Sitemaps..."
echo "================================="

BASE_URL="https://wplace.website"
LOCAL_PATH="/Users/chenjianhua/Desktop/Application AI/46-wplace/public"

# Function to validate XML format
validate_xml() {
    local file=$1
    local name=$2
    
    echo "📄 Checking $name..."
    
    # Check if file exists locally
    if [ -f "$LOCAL_PATH/$file" ]; then
        echo "  ✅ Local file exists"
        
        # Check XML declaration
        if head -1 "$LOCAL_PATH/$file" | grep -q '<?xml version="1.0" encoding="UTF-8"?>'; then
            echo "  ✅ XML declaration correct"
    else
            echo "  ❌ XML declaration missing or incorrect"
        fi
        
        # Check for xmlns
        if grep -q 'xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"' "$LOCAL_PATH/$file"; then
            echo "  ✅ XML namespace correct"
        else
            echo "  ❌ XML namespace missing or incorrect"
        fi
        
        # Count URLs (for urlset files)
        if grep -q '<urlset' "$LOCAL_PATH/$file"; then
            url_count=$(grep -c '<url>' "$LOCAL_PATH/$file")
            echo "  📊 Contains $url_count URLs"
        fi
        
        # Count sitemaps (for sitemapindex files)
        if grep -q '<sitemapindex' "$LOCAL_PATH/$file"; then
            sitemap_count=$(grep -c '<sitemap>' "$LOCAL_PATH/$file")
            echo "  📊 Contains $sitemap_count sitemap references"
        fi
        
    else
        echo "  ❌ Local file not found"
    fi
    
    # Check online availability and Content-Type
    echo "  🌐 Testing online availability..."
    response=$(curl -s -I "$BASE_URL/$file" 2>/dev/null)
    
    if echo "$response" | grep -q "HTTP/2 200"; then
        echo "  ✅ Online file accessible (HTTP 200)"
    else
        echo "  ❌ Online file not accessible"
    fi
    
    if echo "$response" | grep -q "content-type: application/xml"; then
        echo "  ✅ Content-Type: application/xml"
    else
        echo "  ❌ Content-Type incorrect"
        echo "$response" | grep -i "content-type:"
    fi
    
    echo ""
}

# Function to test sitemap structure
test_sitemap_structure() {
    echo "🏗️ Testing Sitemap Structure..."
    echo "--------------------------------"
    
    # Test sitemap-index.xml
    if curl -s "$BASE_URL/sitemap-index.xml" | grep -q "sitemap-english-only.xml"; then
        echo "  ✅ sitemap-index.xml contains sitemap-english-only.xml reference"
    else
        echo "  ❌ sitemap-index.xml missing sitemap-english-only.xml reference"
    fi
    
    # Test required elements in sitemap-english-only.xml
    sitemap_content=$(curl -s "$BASE_URL/sitemap-english-only.xml")
    
    # Check for required URL elements
    required_urls=("https://wplace.website/" "https://wplace.website/about/" "https://wplace.website/blog/")
    
    for url in "${required_urls[@]}"; do
        if echo "$sitemap_content" | grep -q "<loc>$url</loc>"; then
            echo "  ✅ Contains required URL: $url"
        else
            echo "  ❌ Missing required URL: $url"
        fi
    done
    
    # Check for proper lastmod format
    if echo "$sitemap_content" | grep -q "<lastmod>2025-09-12</lastmod>"; then
        echo "  ✅ lastmod format correct (YYYY-MM-DD)"
    else
        echo "  ❌ lastmod format incorrect"
    fi
    
    # Check for priority values
    if echo "$sitemap_content" | grep -q "<priority>1.0</priority>"; then
        echo "  ✅ Homepage has priority 1.0"
    else
        echo "  ❌ Homepage priority not set to 1.0"
    fi
    
    echo ""
}

# Main validation
validate_xml "sitemap.xml" "Main Sitemap"
validate_xml "sitemap-index.xml" "Sitemap Index"
validate_xml "sitemap-english-only.xml" "English-Only Sitemap"
validate_xml "sitemap-main.xml" "Main Content Sitemap"
validate_xml "sitemap-blog.xml" "Blog Sitemap"
validate_xml "sitemap-i18n.xml" "International Sitemap"

test_sitemap_structure

echo "🎯 Google Search Console Recommendations:"
echo "========================================"
echo "1. Submit sitemap-index.xml as the main sitemap"
echo "2. Submit sitemap-english-only.xml for English content focus" 
echo "3. URL: https://wplace.website/sitemap-index.xml"
echo "4. URL: https://wplace.website/sitemap-english-only.xml"
echo ""

echo "✅ Validation complete!" 