console.log(process.env);

export default {
    rootPath: process.env.NODE_ENV === 'development'
    ?'z':'https://stoic-yonath-6fe2fe.netlify.com'
    // rootPath: 'http://localhost:6969'
};
//file này để cài cái rootPath, sau này dùng heroku thì nó đổi sang đường baseUrl khác chứ kp lúc nào cx 6969