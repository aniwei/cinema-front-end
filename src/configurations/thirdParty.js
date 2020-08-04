export default {
  oauth: {
    urls: {
      linkedin: `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=86lhzk4tpl4kih&redirect_uri=http://dev.weim.com/user/oauth/linkedin&state=${new Date().getTime()}&scope=r_liteprofile%20r_emailaddress%20w_member_social`,
      // google: '',
      // facebook: '',
      // twitter: '',
      // wechat: ''
    },
    timeout: 5 * 60 * 1000,
  }
};
