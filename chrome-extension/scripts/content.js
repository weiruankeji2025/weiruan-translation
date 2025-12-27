// 微软科技 - 智能翻译助手 Content Script
// Author: 微软科技

(function() {
    'use strict';

    console.log('微软科技 - 智能翻译助手已启动');

    // ==================== 配置项 ====================
    let CONFIG = {
        hotkey: 'altKey+KeyQ',
        autoTranslateSubtitle: false,
        showTranslationCount: 3,
        targetLang: 'zh-CN',
        theme: {
            primary: '#00d9ff',
            secondary: '#667eea',
            background: 'rgba(17, 24, 39, 0.98)',
            cardBg: 'rgba(31, 41, 55, 0.95)',
            textPrimary: '#f9fafb',
            textSecondary: '#d1d5db',
            borderColor: 'rgba(0, 217, 255, 0.3)',
            shadowColor: 'rgba(0, 217, 255, 0.5)'
        }
    };

    // 从chrome.storage加载配置
    chrome.storage.sync.get(['config'], (result) => {
        if (result.config) {
            CONFIG = { ...CONFIG, ...result.config };
        }
    });

    // ==================== 翻译引擎 ====================
    class TranslationEngine {
        constructor() {
            this.engines = [
                { name: 'Google翻译', method: this.googleTranslate, icon: '🌐' },
                { name: 'Bing翻译', method: this.bingTranslate, icon: '🔷' },
                { name: 'MyMemory翻译', method: this.myMemoryTranslate, icon: '📚' }
            ];
        }

        // Google 翻译
        async googleTranslate(text, targetLang = 'zh-CN') {
            try {
                const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
                const response = await this.fetchWithBackground(url);
                const data = JSON.parse(response);
                return data[0].map(item => item[0]).join('');
            } catch (error) {
                console.error('Google翻译失败:', error);
                return null;
            }
        }

        // Bing 翻译
        async bingTranslate(text, targetLang = 'zh-Hans') {
            try {
                const url = `https://www.bing.com/translator/api/translate/v1?from=auto&to=${targetLang}&text=${encodeURIComponent(text)}`;
                const response = await this.fetchWithBackground(url);
                const data = JSON.parse(response);
                return data.translation || null;
            } catch (error) {
                console.error('Bing翻译失败:', error);
                return this.myMemoryTranslate(text, targetLang);
            }
        }

        // MyMemory 翻译
        async myMemoryTranslate(text, targetLang = 'zh-CN') {
            try {
                const langCode = targetLang.split('-')[0];
                const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=auto|${langCode}`;
                const response = await this.fetchWithBackground(url);
                const data = JSON.parse(response);
                return data.responseData.translatedText;
            } catch (error) {
                console.error('MyMemory翻译失败:', error);
                return null;
            }
        }

        // 通过background script进行跨域请求
        fetchWithBackground(url, options = {}) {
            return new Promise((resolve, reject) => {
                chrome.runtime.sendMessage({
                    action: 'fetchTranslation',
                    url: url,
                    options: options
                }, (response) => {
                    if (response && response.success) {
                        resolve(typeof response.data === 'string' ? response.data : JSON.stringify(response.data));
                    } else {
                        reject(new Error(response ? response.error : 'Unknown error'));
                    }
                });
            });
        }

        // 获取所有翻译结果
        async translateAll(text, targetLang = 'zh-CN') {
            const promises = this.engines.map(async engine => {
                try {
                    const result = await engine.method.call(this, text, targetLang);
                    return {
                        engine: engine.name,
                        icon: engine.icon,
                        result: result,
                        success: result !== null
                    };
                } catch (error) {
                    return {
                        engine: engine.name,
                        icon: engine.icon,
                        result: '翻译失败',
                        success: false
                    };
                }
            });

            return await Promise.all(promises);
        }
    }

    // ==================== UI 管理器 ====================
    class UIManager {
        constructor() {
            this.panel = null;
            this.theme = CONFIG.theme;
        }

        createPanel(x, y) {
            this.panel = document.createElement('div');
            this.panel.className = 'weiruan-translation-panel';
            this.panel.style.left = `${x}px`;
            this.panel.style.top = `${y}px`;

            this.panel.innerHTML = `
                <div class="weiruan-panel-header">
                    <div class="weiruan-panel-title">智能翻译助手</div>
                    <button class="weiruan-close-btn">×</button>
                </div>
                <div class="weiruan-panel-body">
                    <div class="weiruan-loading">
                        <div class="weiruan-loading-spinner"></div>
                        <div class="weiruan-loading-text">正在翻译中...</div>
                    </div>
                </div>
                <div class="weiruan-footer">
                    Powered by <span class="weiruan-footer-logo">微软科技</span>
                </div>
            `;

            document.body.appendChild(this.panel);
            this.bindEvents();
            return this.panel;
        }

        updateContent(originalText, translations) {
            if (!this.panel) return;

            const body = this.panel.querySelector('.weiruan-panel-body');

            let html = `
                <div class="weiruan-original-text">
                    <div class="weiruan-original-label">原文</div>
                    <div class="weiruan-original-content">${this.escapeHtml(originalText)}</div>
                </div>
            `;

            translations.forEach(trans => {
                if (trans.success && trans.result) {
                    html += `
                        <div class="weiruan-translation-item" data-translation="${this.escapeHtml(trans.result)}">
                            <div class="weiruan-engine-name">
                                <span>${trans.icon}</span>
                                <span>${trans.engine}</span>
                            </div>
                            <div class="weiruan-translation-text">${this.escapeHtml(trans.result)}</div>
                        </div>
                    `;
                }
            });

            body.innerHTML = html;

            body.querySelectorAll('.weiruan-translation-item').forEach(item => {
                item.addEventListener('click', () => {
                    const text = item.dataset.translation;
                    this.copyToClipboard(text);
                    this.showToast('已复制到剪贴板');
                });
            });
        }

        bindEvents() {
            const closeBtn = this.panel.querySelector('.weiruan-close-btn');
            closeBtn.addEventListener('click', () => this.closePanel());

            this.makeDraggable();

            const closeOnClickOutside = (e) => {
                if (this.panel && !this.panel.contains(e.target)) {
                    this.closePanel();
                    document.removeEventListener('click', closeOnClickOutside);
                }
            };
            setTimeout(() => document.addEventListener('click', closeOnClickOutside), 100);
        }

        makeDraggable() {
            const header = this.panel.querySelector('.weiruan-panel-header');
            let isDragging = false;
            let currentX, currentY, initialX, initialY;

            header.addEventListener('mousedown', (e) => {
                if (e.target.classList.contains('weiruan-close-btn')) return;
                isDragging = true;
                initialX = e.clientX - this.panel.offsetLeft;
                initialY = e.clientY - this.panel.offsetTop;
            });

            document.addEventListener('mousemove', (e) => {
                if (isDragging) {
                    e.preventDefault();
                    currentX = e.clientX - initialX;
                    currentY = e.clientY - initialY;
                    this.panel.style.left = `${currentX}px`;
                    this.panel.style.top = `${currentY}px`;
                }
            });

            document.addEventListener('mouseup', () => {
                isDragging = false;
            });
        }

        closePanel() {
            if (this.panel) {
                this.panel.remove();
                this.panel = null;
            }
        }

        showToast(message) {
            const toast = document.createElement('div');
            toast.className = 'weiruan-toast';
            toast.textContent = message;
            document.body.appendChild(toast);

            setTimeout(() => {
                toast.style.opacity = '0';
                setTimeout(() => toast.remove(), 300);
            }, 2000);
        }

        escapeHtml(text) {
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        }

        copyToClipboard(text) {
            navigator.clipboard.writeText(text).then(() => {
                console.log('已复制:', text);
            }).catch(err => {
                // 降级方案
                const textarea = document.createElement('textarea');
                textarea.value = text;
                textarea.style.position = 'fixed';
                textarea.style.opacity = '0';
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
            });
        }
    }

    // ==================== 选词翻译管理器 ====================
    class SelectionTranslator {
        constructor(engine, ui) {
            this.engine = engine;
            this.ui = ui;
            this.init();
        }

        init() {
            document.addEventListener('mouseup', (e) => {
                setTimeout(() => this.handleSelection(e), 100);
            });

            document.addEventListener('keydown', (e) => {
                const hotkey = CONFIG.hotkey.split('+');
                const modifier = hotkey[0];
                const key = hotkey[1];

                if (e[modifier] && e.code === key) {
                    e.preventDefault();
                    this.handleSelection(e);
                }
            });

            // 监听来自background的消息
            chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
                if (request.action === 'translateSelection') {
                    this.translateText(request.text, { pageX: window.innerWidth / 2, pageY: 100 });
                } else if (request.action === 'translateSelectionByShortcut') {
                    const selectedText = window.getSelection().toString().trim();
                    if (selectedText) {
                        this.translateText(selectedText, { pageX: window.innerWidth / 2, pageY: 100 });
                    }
                }
            });
        }

        async handleSelection(e) {
            const selectedText = window.getSelection().toString().trim();

            if (!selectedText || selectedText.length < 1) {
                return;
            }

            if (selectedText.length > 1000) {
                this.ui.showToast('选中文本过长，请选择少于1000字符的文本');
                return;
            }

            this.translateText(selectedText, e);
        }

        async translateText(text, e) {
            const x = Math.min(e.pageX + 10, window.innerWidth - 420);
            const y = Math.min(e.pageY + 10, window.innerHeight - 300);

            this.ui.createPanel(x, y);

            const translations = await this.engine.translateAll(text, CONFIG.targetLang);
            this.ui.updateContent(text, translations);
        }
    }

    // ==================== 字幕翻译管理器 ====================
    class SubtitleTranslator {
        constructor(engine, ui) {
            this.engine = engine;
            this.ui = ui;
            this.observers = [];
            this.translatedCache = new Map();
            this.init();
        }

        init() {
            if (!CONFIG.autoTranslateSubtitle) return;
            this.watchSubtitles();
        }

        watchSubtitles() {
            this.observeElement('.ytp-caption-segment', (element) => {
                this.translateSubtitle(element);
            });

            this.observeElement('.player-timedtext-text-container', (element) => {
                this.translateSubtitle(element);
            });

            this.observeElement('[class*="subtitle"]', (element) => {
                this.translateSubtitle(element);
            });
        }

        observeElement(selector, callback) {
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    mutation.addedNodes.forEach((node) => {
                        if (node.nodeType === 1) {
                            if (node.matches(selector)) {
                                callback(node);
                            }
                            node.querySelectorAll(selector).forEach(callback);
                        }
                    });
                });
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true
            });

            this.observers.push(observer);
        }

        async translateSubtitle(element) {
            const text = element.textContent.trim();

            if (!text || text.length < 2) return;

            if (this.translatedCache.has(text)) {
                const cached = this.translatedCache.get(text);
                this.appendTranslation(element, cached);
                return;
            }

            try {
                const result = await this.engine.googleTranslate(text, CONFIG.targetLang);
                if (result && result !== text) {
                    this.translatedCache.set(text, result);
                    this.appendTranslation(element, result);
                }
            } catch (error) {
                console.error('字幕翻译失败:', error);
            }
        }

        appendTranslation(element, translation) {
            if (element.querySelector('.weiruan-subtitle-translation')) return;

            const translationDiv = document.createElement('div');
            translationDiv.className = 'weiruan-subtitle-translation';
            translationDiv.textContent = translation;
            element.appendChild(translationDiv);
        }
    }

    // ==================== 主程序初始化 ====================
    function init() {
        const engine = new TranslationEngine();
        const ui = new UIManager();
        const selectionTranslator = new SelectionTranslator(engine, ui);
        const subtitleTranslator = new SubtitleTranslator(engine, ui);

        // 监听配置变化
        chrome.storage.onChanged.addListener((changes, namespace) => {
            if (changes.config) {
                CONFIG = { ...CONFIG, ...changes.config.newValue };
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
