// 微软科技 - 智能翻译助手 Options脚本
// Author: 微软科技

document.addEventListener('DOMContentLoaded', function() {
    const targetLangSelect = document.getElementById('targetLang');
    const autoSubtitleCheckbox = document.getElementById('autoTranslateSubtitle');
    const showToastCheckbox = document.getElementById('showToast');
    const themeRadios = document.querySelectorAll('input[name="theme"]');
    const saveBtn = document.getElementById('saveBtn');
    const resetBtn = document.getElementById('resetBtn');
    const exportBtn = document.getElementById('exportBtn');

    const DEFAULT_CONFIG = {
        targetLang: 'zh-CN',
        autoTranslateSubtitle: false,
        showToast: true,
        theme: 'blue',
        enabled: true
    };

    // 加载配置
    function loadConfig() {
        chrome.storage.sync.get(['config', 'stats'], function(result) {
            const config = result.config || DEFAULT_CONFIG;

            targetLangSelect.value = config.targetLang || 'zh-CN';
            autoSubtitleCheckbox.checked = config.autoTranslateSubtitle || false;
            showToastCheckbox.checked = config.showToast !== false;

            themeRadios.forEach(radio => {
                if (radio.value === (config.theme || 'blue')) {
                    radio.checked = true;
                }
            });

            // 加载统计数据
            const stats = result.stats || {
                total: 0,
                today: 0,
                favoriteEngine: 'Google'
            };

            document.getElementById('totalTranslations').textContent = stats.total || 0;
            document.getElementById('todayTranslations').textContent = stats.today || 0;
            document.getElementById('favoriteEngine').textContent = stats.favoriteEngine || 'Google';
        });
    }

    // 保存配置
    function saveConfig() {
        const selectedTheme = Array.from(themeRadios).find(r => r.checked)?.value || 'blue';

        const config = {
            targetLang: targetLangSelect.value,
            autoTranslateSubtitle: autoSubtitleCheckbox.checked,
            showToast: showToastCheckbox.checked,
            theme: selectedTheme,
            enabled: true
        };

        chrome.storage.sync.set({ config: config }, function() {
            showNotification('设置已保存', 'success');
        });
    }

    // 重置为默认配置
    function resetConfig() {
        if (confirm('确定要恢复默认设置吗？')) {
            chrome.storage.sync.set({ config: DEFAULT_CONFIG }, function() {
                loadConfig();
                showNotification('已恢复默认设置', 'success');
            });
        }
    }

    // 导出配置
    function exportConfig() {
        chrome.storage.sync.get(['config'], function(result) {
            const config = result.config || DEFAULT_CONFIG;
            const dataStr = JSON.stringify(config, null, 2);
            const blob = new Blob([dataStr], { type: 'application/json' });
            const url = URL.createObjectURL(blob);

            const a = document.createElement('a');
            a.href = url;
            a.download = 'weiruan-translator-config.json';
            a.click();

            URL.revokeObjectURL(url);
            showNotification('配置已导出', 'success');
        });
    }

    // 显示通知
    function showNotification(message, type = 'success') {
        const notification = document.getElementById('notification');
        notification.textContent = message;
        notification.className = `notification ${type} show`;

        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }

    // 绑定事件
    saveBtn.addEventListener('click', saveConfig);
    resetBtn.addEventListener('click', resetConfig);
    exportBtn.addEventListener('click', exportConfig);

    // 初始化
    loadConfig();
});
