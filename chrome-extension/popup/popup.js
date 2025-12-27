// 微软科技 - 智能翻译助手 Popup脚本
// Author: 微软科技

document.addEventListener('DOMContentLoaded', function() {
    const enabledToggle = document.getElementById('enabledToggle');
    const targetLangSelect = document.getElementById('targetLang');
    const autoSubtitleCheckbox = document.getElementById('autoSubtitle');
    const openOptionsBtn = document.getElementById('openOptions');
    const openDemoBtn = document.getElementById('openDemo');

    // 加载当前配置
    chrome.storage.sync.get(['config'], function(result) {
        const config = result.config || {
            enabled: true,
            targetLang: 'zh-CN',
            autoTranslateSubtitle: false
        };

        enabledToggle.checked = config.enabled !== false;
        targetLangSelect.value = config.targetLang || 'zh-CN';
        autoSubtitleCheckbox.checked = config.autoTranslateSubtitle || false;
    });

    // 保存配置
    function saveConfig() {
        chrome.storage.sync.get(['config'], function(result) {
            const config = result.config || {};

            config.enabled = enabledToggle.checked;
            config.targetLang = targetLangSelect.value;
            config.autoTranslateSubtitle = autoSubtitleCheckbox.checked;

            chrome.storage.sync.set({ config: config }, function() {
                // 显示保存成功提示
                showNotification('设置已保存');
            });
        });
    }

    // 监听配置变化
    enabledToggle.addEventListener('change', saveConfig);
    targetLangSelect.addEventListener('change', saveConfig);
    autoSubtitleCheckbox.addEventListener('change', saveConfig);

    // 打开设置页面
    openOptionsBtn.addEventListener('click', function() {
        chrome.runtime.openOptionsPage();
    });

    // 打开测试页面
    openDemoBtn.addEventListener('click', function() {
        const demoUrl = chrome.runtime.getURL('../demo.html');
        chrome.tabs.create({ url: demoUrl });
    });

    // 显示通知
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 10px;
            left: 50%;
            transform: translateX(-50%);
            background: #10b981;
            color: white;
            padding: 8px 16px;
            border-radius: 6px;
            font-size: 12px;
            z-index: 10000;
            animation: fadeIn 0.3s;
        `;
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    }
});
