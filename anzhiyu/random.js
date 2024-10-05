var posts=["2024/08/06/Tox/","2024/05/19/注册GitHub账号及评论区的使用/","2024/08/10/Tuta/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };