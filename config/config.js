const NODE_ENV = process.env.NODE_ENV; // webpack�����ǻ�ȡnode��������Ϣ
const config = {
  production: {  // ��������
    DOMAIN: 'production.com', // ������������ַ
    FOO_API: 'production.foo.api.com', // api����
    BAR_API: 'production.bar.api.com', // api����
    BAZ_API: 'production.baz.api.com', // api����
  },
  development: { // ��������
    DOMAIN: 'development.com', // ������������ַ
    FOO_API: 'development.foo.api.com', // api����
    BAR_API: 'development.bar.api.com', // api����
    BAZ_API: 'development.baz.api.com', // api����
  }
}

module.exports = config[NODE_ENV]
