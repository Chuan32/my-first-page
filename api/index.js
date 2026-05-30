// 测试用：简单的 Vercel serverless 函数
// 等确认路由正常后，再换成 Express + Neon

module.exports = async (req, res) => {
    res.json({
        message: 'API 正常工作！',
        method: req.method,
        url: req.url,
        time: new Date().toLocaleString('zh-CN')
    });
};
