// 微软科技 - 智能翻译助手 Background Service Worker
// Author: 微软科技

console.log('微软科技 - 智能翻译助手 Background Service Worker 已启动');

// 默认配置
const DEFAULT_CONFIG = {
    targetLang: 'zh-CN',
    autoTranslateSubtitle: false,
    hotkey: 'Alt+Q',
    enabled: true
};

// 初始化配置
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.get(['config'], (result) => {
        if (!result.config) {
            chrome.storage.sync.set({ config: DEFAULT_CONFIG });
        }
    });

    // 创建右键菜单
    chrome.contextMenus.create({
        id: 'translate-selection',
        title: '翻译选中文本',
        contexts: ['selection']
    });

    chrome.contextMenus.create({
        id: 'translate-image',
        title: '翻译图片（开发中）',
        contexts: ['image']
    });
});

// 处理右键菜单点击
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === 'translate-selection') {
        chrome.tabs.sendMessage(tab.id, {
            action: 'translateSelection',
            text: info.selectionText
        });
    } else if (info.menuItemId === 'translate-image') {
        chrome.tabs.sendMessage(tab.id, {
            action: 'translateImage',
            imageUrl: info.srcUrl
        });
    }
});

// 处理快捷键命令
chrome.commands.onCommand.addListener((command) => {
    if (command === 'translate-selection') {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, {
                action: 'translateSelectionByShortcut'
            });
        });
    }
});

// 处理来自content script的消息
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'fetchTranslation') {
        fetchTranslation(request.url, request.options)
            .then(response => sendResponse({ success: true, data: response }))
            .catch(error => sendResponse({ success: false, error: error.message }));
        return true; // 保持消息通道开启
    }
});

// 跨域请求翻译API
async function fetchTranslation(url, options = {}) {
    try {
        const response = await fetch(url, {
            method: options.method || 'GET',
            headers: options.headers || {},
            body: options.body || null
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            return await response.json();
        } else {
            return await response.text();
        }
    } catch (error) {
        console.error('翻译请求失败:', error);
        throw error;
    }
}

// 监听扩展图标点击
chrome.action.onClicked.addListener((tab) => {
    // 打开popup（默认行为）
});
