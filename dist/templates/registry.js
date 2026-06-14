/**
 * v2 Template Registry for App Store Screenshots
 *
 * Templates map to fixed v2 layouts (header/footer/screenshot-only)
 * and background + caption appearance only.
 */
export const templates = [
    {
        id: 'ocean-header',
        name: 'Ocean Header',
        description: 'Cool blue gradient with header caption layout',
        category: 'modern',
        layout: 'header',
        background: {
            mode: 'gradient',
            gradient: {
                colors: ['#00C6FB', '#005BEA'],
                direction: 'top-bottom'
            }
        },
        caption: {
            font: 'SF Pro Display Bold',
            color: '#FFFFFF'
        }
    },
    {
        id: 'sunset-footer',
        name: 'Sunset Footer',
        description: 'Warm sunset gradient with footer caption layout',
        category: 'bold',
        layout: 'footer',
        background: {
            mode: 'gradient',
            gradient: {
                colors: ['#FF5F6D', '#FFC371'],
                direction: 'top-bottom'
            }
        },
        caption: {
            font: 'SF Pro Display Bold',
            color: '#1B1B1B'
        }
    },
    {
        id: 'clean-screenshot',
        name: 'Clean Screenshot',
        description: 'Minimal background with screenshot-only layout',
        category: 'clean',
        layout: 'screenshot-only',
        background: {
            mode: 'gradient',
            gradient: {
                colors: ['#F5F7FA', '#C3CFE2'],
                direction: 'top-bottom'
            }
        },
        caption: {
            font: 'SF Pro Display Bold',
            color: '#111111'
        }
    },
    {
        id: 'pastel-header',
        name: 'Pastel Header',
        description: 'Soft pastel tones with header caption layout',
        category: 'minimal',
        layout: 'header',
        background: {
            mode: 'gradient',
            gradient: {
                colors: ['#FFEECC', '#FFD6C2'],
                direction: 'top-bottom'
            }
        },
        caption: {
            font: 'Helvetica Neue Bold',
            color: '#1B2A3A'
        }
    },
    {
        id: 'noir-footer',
        name: 'Noir Footer',
        description: 'Dark dramatic gradient with footer caption layout',
        category: 'bold',
        layout: 'footer',
        background: {
            mode: 'gradient',
            gradient: {
                colors: ['#0F0C29', '#302B63', '#24243E'],
                direction: 'diagonal'
            }
        },
        caption: {
            font: 'SF Pro Display Bold',
            color: '#FFFFFF'
        }
    },
    {
        id: 'silver-header',
        name: 'Silver Header',
        description: 'Elegant silver gradient with header caption layout',
        category: 'elegant',
        layout: 'header',
        background: {
            mode: 'gradient',
            gradient: {
                colors: ['#E5E5E5', '#BFBFBF'],
                direction: 'top-bottom'
            }
        },
        caption: {
            font: 'New York Bold',
            color: '#111111'
        }
    },
    {
        id: 'tropical-header',
        name: 'Tropical Header',
        description: 'Bright tropical gradient with header caption layout',
        category: 'playful',
        layout: 'header',
        background: {
            mode: 'gradient',
            gradient: {
                colors: ['#43CEA2', '#185A9D'],
                direction: 'top-bottom'
            }
        },
        caption: {
            font: 'SF Pro Display Bold',
            color: '#FFFFFF'
        }
    },
    {
        id: 'slate-footer',
        name: 'Slate Footer',
        description: 'Professional slate gradient with footer caption layout',
        category: 'professional',
        layout: 'footer',
        background: {
            mode: 'gradient',
            gradient: {
                colors: ['#2C3E50', '#4CA1AF'],
                direction: 'top-bottom'
            }
        },
        caption: {
            font: 'SF Pro Display Bold',
            color: '#FFFFFF'
        }
    },
    {
        id: 'midnight-header',
        name: 'Midnight Header',
        description: 'Deep blue gradient with header caption layout',
        category: 'professional',
        layout: 'header',
        background: {
            mode: 'gradient',
            gradient: {
                colors: ['#0F2027', '#2C5364'],
                direction: 'top-bottom'
            }
        },
        caption: {
            font: 'SF Pro Display Bold',
            color: '#FFFFFF'
        }
    }
];
export const legacyTemplateAliases = {
    modern: 'ocean-header',
    minimal: 'pastel-header',
    bold: 'noir-footer',
    elegant: 'silver-header',
    showcase: 'clean-screenshot',
    playful: 'tropical-header',
    corporate: 'slate-footer',
    nerdy: 'midnight-header'
};
export function resolveTemplateId(id) {
    const alias = legacyTemplateAliases[id];
    if (alias) {
        return { id: alias, isAlias: true };
    }
    return { id, isAlias: false };
}
export function getTemplate(id) {
    return templates.find(t => t.id === id);
}
export function getTemplatesByCategory(category) {
    return templates.filter(t => t.category === category);
}
export function getTemplateCategories() {
    return [...new Set(templates.map(t => t.category))];
}
export function applyTemplateToConfig(templateId, existingConfig) {
    const template = getTemplate(templateId);
    if (!template) {
        throw new Error(`Template "${templateId}" not found`);
    }
    const base = {
        version: 2,
        layout: template.layout,
        caption: {
            font: template.caption.font || 'SF Pro Display Bold',
            color: template.caption.color || '#FFFFFF',
            background: template.caption.background
        },
        background: template.background,
        devices: {},
        output: existingConfig.output || './final',
        frames: existingConfig.frames || './frames'
    };
    const devices = existingConfig.devices || {};
    const mergedDevices = {};
    for (const [key, value] of Object.entries(devices)) {
        mergedDevices[key] = value;
    }
    base.devices = mergedDevices;
    base.layout = template.layout;
    base.background = template.background;
    base.caption = {
        ...base.caption,
        ...template.caption
    };
    return base;
}
export function getTemplateCaptionSuggestions(_templateId) {
    return {
        hero: [
            'Powerful Features, Beautiful Design',
            'Everything You Need in One App',
            'Designed for You',
            'Simple. Fast. Powerful.'
        ],
        features: [
            'Track Everything',
            'Stay Organized',
            'Real-Time Updates',
            'Secure & Private',
            'Works Everywhere'
        ],
        cta: [
            'Download Now',
            'Get Started Today',
            'Try It Free',
            'Join Millions of Users'
        ]
    };
}
//# sourceMappingURL=registry.js.map