const OSS = require('ali-oss');
const path = require('path');
const globby = require('globby');

const oss = new OSS({
  accessKeyId: 'LTAI4G7d4tXUnXDeR4feHnLR',
  accessKeySecret: 'ZEOXf1Nl6FBkwubbOREoORwDwA60cc',
  bucket: 'cinema-static',
  region: 'oss-cn-hongkong'
});

const publishProject = async () => {
  const files = await globby([`*/**`, `*`], {
    cwd: path.join(__dirname, 'dist')
  });

  console.log(files);

  await Promise.all(files.map(async file => {
    console.log(`正在发布：`, file);

    return await oss.put(file, path.join(__dirname, 'dist', file));
  }))

  console.log(`发布完成`);
}

publishProject();