// Verified product copy. Sources and boundaries: docs/terminology.md
export const content = {
  en: {
    kicker: 'ROOM TO SEE THE WHOLE PICTURE',
    title: ['Big pictures.', 'Small effort.'],
    summary:
      'An image workspace for the details and the bigger picture. Navigate long images, trim their edges, annotate, then copy or save what matters.',
    category: 'Image viewing and editing for Windows',
    intro: ['See the whole thing.', 'Work on just what you need.'],
    introText:
      'A focused path from opening an image to sharing a useful result. Viewing stays simple; editing is there when you need it.',
    features: [
      [
        '01 / EXPLORE',
        'Long images, without losing your place.',
        'Move between fit-to-window and actual size. Jump to either end, or use the minimap to navigate a long image.',
        'Fit to window · 100% · Minimap',
      ],
      [
        '02 / TRIM',
        'Keep the part that tells the story.',
        'Use the trim handles to remove repeated or unwanted edges. Reset the trim to return to the full image.',
        'Edge trim · Reset trim · Trimmed output',
      ],
      [
        '03 / ANNOTATE',
        'One step from viewing to editing.',
        'Open the loaded image in the dedicated editor. Very large images may need trimming before they can be annotated.',
        'Image editor · Annotation · Large-image guidance',
      ],
      [
        '04 / FINISH',
        'Ready for the next conversation.',
        'Copy the current result to the clipboard or save a local PNG. Recent files and drag-and-drop make returning to an image straightforward.',
        'Clipboard · PNG export · Recent files',
      ],
    ],
    steps: [
      ['Open an image', 'Choose an image file, drag one into the viewer, or return to a recent file.'],
      ['Find your focus', 'Fit the image to the window, inspect it at 100%, and trim unwanted edges.'],
      ['Edit and share', 'Enter the editor if you need annotation. Copy the result or save it as PNG.'],
    ],
    faq: [
      [
        'Which image files can I open?',
        'The file picker includes PNG, JPEG, WebP, BMP, GIF and TIFF. Format availability depends on the image plugins included with the build.',
      ],
      [
        'Does trimming change the original file?',
        'The viewer applies trim to its output. Use Reset trim to return to the full loaded image, and Save to write a PNG result.',
      ],
      [
        'Can I annotate an extremely large image?',
        'Viewing and editing have different resource limits. The editor checks the image size and can ask you to trim it first.',
      ],
      [
        'Is ImagePerch a standalone desktop pinning app?',
        'The verified standalone build is an image viewer and editor. Desktop pinning is not presented as a standalone ImagePerch feature.',
      ],
      [
        'Are these current product screenshots?',
        'The screenshots are real captures of the earlier shared Image Viewer implementation, with Chinese UI. They document the viewing workflow and are not captures of the newly named build.',
      ],
    ],
    limits: [
      'Extremely large images may need trimming before annotation.',
      'Supported formats depend on the bundled image plugins.',
      'Screenshots show an earlier shared viewer implementation with Chinese UI.',
      'A standalone public download is not yet verified.',
    ],
    shortcuts: [
      ['Ctrl + O', 'Open another image.'],
      ['Fit / 100%', 'Switch between overview and actual-size inspection.'],
      ['Top / Bottom', 'Jump to the start or end of the image.'],
      ['Trim / Reset trim', 'Adjust the visible output, or return to the full image.'],
    ],
    changelog:
      'The ImagePerch website documents the verified standalone image viewer and editor. A standalone public release history is not yet available.',
  },
  'zh-cn': {
    kicker: '给每一张图片，留足空间',
    title: ['长图再长，', '也能从容看清。'],
    summary: '从整体到细节，一个顺手的图片工作台。浏览长图、裁去多余边缘，进入编辑器标注，再复制或保存需要的内容。',
    category: 'Windows 图片查看与编辑工具',
    intro: ['看全貌，', '也照顾每处细节。'],
    introText: '从打开图片，到交付有用的结果，流程保持清晰。查看时专注浏览，需要加工时再进入编辑器。',
    features: [
      [
        '01 / 浏览',
        '长图很长，方向始终清楚。',
        '在适应窗口与原始大小之间切换，跳到图片两端，或借助缩略导航图定位长图里的内容。',
        '适应窗口 · 100% · 缩略导航图',
      ],
      [
        '02 / 裁切',
        '只留下真正需要的部分。',
        '通过边缘裁切手柄去掉重复或多余内容；需要重来时，重置裁切即可回到完整图片。',
        '边缘裁切 · 重置裁切 · 裁切结果输出',
      ],
      [
        '03 / 标注',
        '从查看到编辑，一步到位。',
        '将当前图片送入独立编辑器继续标注。图片过大时会提示先裁切，再进入编辑。',
        '图片编辑器 · 标注 · 大图处理提示',
      ],
      [
        '04 / 交付',
        '整理好，就能继续分享。',
        '复制当前结果到剪贴板，或另存为本地 PNG。最近文件与拖放打开，让回到上一张图片更方便。',
        '剪贴板 · PNG 导出 · 最近文件',
      ],
    ],
    steps: [
      ['打开一张图片', '选择图片文件、拖入查看器，或从最近文件继续上次的工作。'],
      ['找到要关注的内容', '适应窗口看全貌，100% 查看细节，再裁去不需要的边缘。'],
      ['加工，再分享', '需要标注时进入编辑器，完成后复制结果或保存为 PNG。'],
    ],
    faq: [
      [
        '能打开哪些图片？',
        '文件选择器包含 PNG、JPEG、WebP、BMP、GIF 和 TIFF。具体格式可用性取决于随版本提供的图片插件。',
      ],
      ['裁切会修改原始文件吗？', '查看器将裁切应用到输出结果。可用“重置裁切”回到完整载入图片，保存时输出 PNG 结果。'],
      ['特别大的图片也可以标注吗？', '查看与编辑的资源限制不同；编辑器会检查图片尺寸，过大时会提示先裁切。'],
      [
        'ImagePerch 是独立桌面贴图工具吗？',
        '目前核实的独立程序是图片查看与编辑器。官网不会将桌面贴图列为独立 ImagePerch 已具备的功能。',
      ],
      [
        '这些是当前版本的截图吗？',
        '页面使用早期共用 Image Viewer 实现的真实运行截图，界面为中文，用于展示查看流程，并非新命名程序的当次实拍。',
      ],
    ],
    limits: [
      '超大图片可能需要先裁切，才能进入标注编辑。',
      '支持格式取决于随包提供的图片插件。',
      '截图来自早期共用查看器实现，界面为中文。',
      '尚未核实到独立公开下载包。',
    ],
    shortcuts: [
      ['Ctrl + O', '打开另一张图片。'],
      ['适应窗口 / 100%', '切换全貌浏览与原始大小查看。'],
      ['最前 / 最后', '跳到图片起点或终点。'],
      ['裁切 / 重置裁切', '调整输出区域，或返回完整图片。'],
    ],
    changelog: 'ImagePerch 官网整理了已经核实的独立图片查看与编辑能力；独立公开版本记录暂未提供。',
  },
};
